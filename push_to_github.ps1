<#
.SYNOPSIS
  Initialize git (if needed), add remote, commit and push this project to GitHub.

.DESCRIPTION
  Run this script from the project folder (or double-click it). It will:
    - check for Git
    - initialize a repo if none exists and ensure branch 'main'
    - set local git user.name/email (replace defaults or pass parameters)
    - add the provided remote (removes any existing 'origin')
    - stage and commit changes if any
    - push to the 'main' branch on the remote

.PARAMETER Remote
  The Git remote URL to push to. Defaults to the repo you provided.

.PARAMETER Name
  Local git user.name value to set (optional).

.PARAMETER Email
  Local git user.email value to set (optional).

EXAMPLE
  .\push_to_github.ps1 -Remote "https://github.com/rishiroshan20/June_16.git" -Name "Rishi" -Email "rishi@example.com"

#>

param(
    [string]$Remote = 'https://github.com/rishiroshan20/June_16.git',
    [string]$Name = 'rishi roshan',
    [string]$Email = 'drishiroshan@gmail.com'
)

try {
    # Ensure script runs from the script folder
    if ($PSScriptRoot) { Set-Location $PSScriptRoot }
} catch {
    # ignore
}

Write-Host "Working directory: $(Get-Location)"

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Error "Git is not installed or not on PATH. Please install Git from https://git-scm.com/download/win and re-run this script."
    exit 1
}

# Initialize repo if missing
if (!(Test-Path .git)) {
    Write-Host "No git repo found - initializing and creating 'main' branch..."
    git init
    git checkout -b main
} else {
    # ensure we're on main
    $current = git rev-parse --abbrev-ref HEAD 2>$null
    if ($LASTEXITCODE -ne 0 -or [string]::IsNullOrEmpty($current)) { 
        git checkout -b main
    } elseif ($current -ne 'main') {
        git checkout main 2>$null
        if ($LASTEXITCODE -ne 0) { git checkout -b main }
    }
}

# Configure local user (safe - local only)
if ($Name -and $Email) {
    Write-Host "Setting local git user: $Name <$Email>"
    git config user.name "$Name"
    git config user.email "$Email"
}

# Add remote
Write-Host "Adding remote origin: $Remote"
git remote remove origin 2>$null
git remote add origin $Remote

# Stage and commit if needed
git add .
$s = git status --porcelain
if ($s) {
    Write-Host "Committing changes..."
    git commit -m "Initial commit - website files and Vercel config"
} else {
    Write-Host "No changes to commit"
}

# Push
Write-Host "Pushing to origin main..."
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "Push succeeded."
} else {
    Write-Error "Push failed. Check authentication and remote permissions. If using HTTPS, use a PAT (personal access token) if prompted for password."
}

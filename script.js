// ==========================================
// ROMANTIC WEBSITE FOR PRIYAA
// A Journey Through Our Beautiful Memories
// ==========================================

// Memory Data
const memories = [
    {
        img: "images/memory1.jpg",
        text: `SDA, Puducherry…
Life la ennaku periya sandhosham kondu vandha school.
Adhu dhan nee, My Priyaa.
School la unn kooda irundha
Oru oru moment um childish ah… azhagaaa…
Konjam cringe ah…
Aana romba beautiful ah pochu.
Thanks for those moments.`
    },
    {
        img: "images/memory2.jpg",
        text: `College diaries…
Indha college ennaku pudikalana kooda…
Ennakunu irundha ore sandhosham
Nee dhan maaa.`
    },
    {
        img: "images/memory3.jpg",
        text: `Namaku ellam smooth ah dhaan poganum nu illa…
Konjam misunderstandings… konjam silence…
Konjam ego… konjam tears…
Aana oru vishayam matum change aagala…
Namma rendu perum vittutu pogala.
Storm vandhalum kai vidaama irundhadhu dhan
Enaku romba periya pride.`
    },
    {
        img: "images/memory4.jpg",
        text: `Innikku paatha…
Namma school kids illa.
Life serious aayiduchu…
Aana enaku innum nee dhan andha same childish smile oda Priyaa.
Un kooda irundha dhan enaku home madhiri feel aagudhu.
And I still choose you…
Not just for today…
But for every version of our future.`
    }
];

let currentIndex = 0;
let isTransitioning = false;

// DOM Elements
const welcomeOverlay = document.getElementById('welcome-overlay');
const enterBtn = document.getElementById('enter-btn');
const mainExperience = document.getElementById('main-experience');
const memoryImage = document.getElementById('memory-image');
const memoryText = document.getElementById('memory-text');
const memoryScene = document.getElementById('scene-current');
const proposalSection = document.getElementById('proposal-section');
const progressDots = document.querySelectorAll('.dot');
const bgMusic = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');
const heartsContainer = document.getElementById('hearts-container');
const petalsContainer = document.getElementById('petals-container');
const sparklesContainer = document.getElementById('sparkles-container');
const butterfliesContainer = document.getElementById('butterflies-container');
const loveParticlesContainer = document.getElementById('love-particles-container');
const photoCaption = document.getElementById('photo-caption');
const transitionBurst = document.getElementById('transition-burst');
const memoryBadge = document.getElementById('memory-badge');

// Memory captions
const captions = ['School Days', 'College Memories', 'Our Journey', 'Forever Together'];
const badgeTitles = [
    'Our Beautiful Journey',
    'Growing Together', 
    'Through Ups & Downs',
    'Forever & Always'
];

// ==========================================
// FLOATING HEARTS GENERATOR
// ==========================================

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = ['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    
    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// Generate hearts continuously
setInterval(createFloatingHeart, 2000);
for (let i = 0; i < 5; i++) {
    setTimeout(createFloatingHeart, i * 400);
}

// ==========================================
// FLOATING ROSE PETALS GENERATOR
// ==========================================

function createFloatingPetal() {
    const petal = document.createElement('div');
    petal.className = 'floating-petal';
    petal.textContent = '🌸';
    petal.style.left = Math.random() * 100 + '%';
    petal.style.fontSize = (Math.random() * 15 + 18) + 'px';
    petal.style.animationDuration = (Math.random() * 5 + 8) + 's';
    petal.style.animationDelay = Math.random() * 2 + 's';
    
    petalsContainer.appendChild(petal);
    
    setTimeout(() => {
        petal.remove();
    }, 13000);
}

// Generate petals continuously
setInterval(createFloatingPetal, 3000);
for (let i = 0; i < 3; i++) {
    setTimeout(createFloatingPetal, i * 1000);
}

// ==========================================
// SPARKLE EFFECTS GENERATOR
// ==========================================

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.animationDelay = Math.random() * 2 + 's';
    
    sparklesContainer.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

// Generate sparkles continuously
setInterval(createSparkle, 500);
for (let i = 0; i < 10; i++) {
    setTimeout(createSparkle, i * 200);
}

// ==========================================
// FLOATING BUTTERFLIES GENERATOR
// ==========================================

function createButterfly() {
    const butterfly = document.createElement('div');
    butterfly.className = 'butterfly';
    butterfly.textContent = '🦋';
    butterfly.style.left = Math.random() * 30 + '%';
    butterfly.style.top = Math.random() * 80 + 10 + '%';
    butterfly.style.animationDuration = (Math.random() * 10 + 15) + 's';
    butterfly.style.animationDelay = Math.random() * 3 + 's';
    
    butterfliesContainer.appendChild(butterfly);
    
    setTimeout(() => {
        butterfly.remove();
    }, 25000);
}

// Generate butterflies occasionally
setInterval(createButterfly, 8000);
for (let i = 0; i < 2; i++) {
    setTimeout(createButterfly, i * 4000);
}

// ==========================================
// LOVE PARTICLES GENERATOR
// ==========================================

function createLoveParticle() {
    const particle = document.createElement('div');
    particle.className = 'love-particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 2 + 4) + 's';
    particle.style.animationDelay = Math.random() * 1 + 's';
    
    loveParticlesContainer.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 6000);
}

// Generate love particles continuously
setInterval(createLoveParticle, 400);
for (let i = 0; i < 15; i++) {
    setTimeout(createLoveParticle, i * 100);
}

// ==========================================
// START EXPERIENCE
// ==========================================

enterBtn.addEventListener('click', () => {
    // Hide welcome overlay
    welcomeOverlay.classList.add('hidden');
    
    // Show main experience
    setTimeout(() => {
        mainExperience.classList.add('active');
        showMemory(0);
        
        // Play music
        bgMusic.play().catch(err => {
            console.log('Music autoplay prevented. User needs to interact.');
        });
        musicToggle.classList.add('playing');
    }, 1000);
});

// ==========================================
// SHOW MEMORY FUNCTION
// ==========================================

function showMemory(index) {
    if (isTransitioning) return;
    
    currentIndex = index;
    isTransitioning = true;
    
    // Trigger transition burst effect
    transitionBurst.classList.add('active');
    setTimeout(() => {
        transitionBurst.classList.remove('active');
    }, 1000);
    
    // Fade out current scene
    memoryScene.style.opacity = '0';
    
    setTimeout(() => {
        // Update content
        memoryImage.src = memories[index].img;
        memoryText.textContent = memories[index].text;
        
        // Update photo caption and badge
        photoCaption.textContent = captions[index];
        memoryBadge.querySelector('.badge-text').textContent = badgeTitles[index];
        
        // Reset animations
        memoryImage.style.animation = 'none';
        photoCaption.style.animation = 'none';
        memoryBadge.style.animation = 'none';
        
        setTimeout(() => {
            memoryImage.style.animation = 'zoomSlow 15s ease-in-out forwards';
            photoCaption.style.animation = 'captionSlideUp 1s ease-out 0.5s forwards';
            memoryBadge.style.animation = 'badgeFadeIn 1.5s ease-out 0.8s forwards';
        }, 50);
        
        // Fade in scene
        memoryScene.style.opacity = '1';
        
        // Update progress dots
        updateProgressDots(index);
        
        isTransitioning = false;
    }, 2000);
    
    // Auto transition to next memory or proposal
    setTimeout(() => {
        if (index < memories.length - 1) {
            showMemory(index + 1);
        } else {
            // Show proposal after last memory
            setTimeout(showProposal, 16000);
        }
    }, 16000);
}

// ==========================================
// UPDATE PROGRESS DOTS
// ==========================================

function updateProgressDots(activeIndex) {
    progressDots.forEach((dot, idx) => {
        if (idx === activeIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Progress dots click handlers
progressDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
        if (!isTransitioning && idx < memories.length) {
            showMemory(idx);
        }
    });
});

// ==========================================
// SHOW PROPOSAL SECTION
// ==========================================

function showProposal() {
    // Fade out memory scene
    memoryScene.style.opacity = '0';
    
    // Hide progress dots
    document.querySelector('.progress-dots').style.opacity = '0';
    
    setTimeout(() => {
        proposalSection.classList.add('active');
        
        // Create extra hearts for proposal
        for (let i = 0; i < 20; i++) {
            setTimeout(createFloatingHeart, i * 200);
        }
        
        // Add button event listeners
        document.getElementById('yes-btn').addEventListener('click', handleYesClick);
        document.getElementById('no-btn').addEventListener('click', handleNoClick);
    }, 2000);
}

// ==========================================
// HANDLE YES BUTTON CLICK
// ==========================================

function handleYesClick() {
    const proposalContent = document.querySelector('.proposal-content');
    const yesResponse = document.getElementById('yes-response');
    
    // Fade out proposal
    proposalContent.style.opacity = '0';
    proposalContent.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        proposalContent.style.display = 'none';
        yesResponse.classList.add('active');
        
        // Celebration effects
        for (let i = 0; i < 50; i++) {
            setTimeout(createFloatingHeart, i * 100);
            setTimeout(createFloatingPetal, i * 150);
        }
        
        // Extra sparkles
        for (let i = 0; i < 30; i++) {
            setTimeout(createSparkle, i * 50);
        }
    }, 1000);
}

// ==========================================
// HANDLE NO BUTTON CLICK
// ==========================================

function handleNoClick() {
    const proposalContent = document.querySelector('.proposal-content');
    const noResponse = document.getElementById('no-response');
    
    // Fade out proposal
    proposalContent.style.opacity = '0';
    proposalContent.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        proposalContent.style.display = 'none';
        noResponse.classList.add('active');
        
        // Gentle effects
        for (let i = 0; i < 10; i++) {
            setTimeout(createFloatingHeart, i * 400);
        }
    }, 1000);
}

// ==========================================
// MUSIC CONTROL
// ==========================================

let isMusicPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        bgMusic.pause();
        musicToggle.classList.remove('playing');
        isMusicPlaying = false;
    } else {
        bgMusic.play().then(() => {
            musicToggle.classList.add('playing');
            isMusicPlaying = true;
        }).catch(err => {
            console.log('Music play error:', err);
        });
    }
});

// Check if music is actually playing
bgMusic.addEventListener('play', () => {
    isMusicPlaying = true;
    musicToggle.classList.add('playing');
});

bgMusic.addEventListener('pause', () => {
    isMusicPlaying = false;
    musicToggle.classList.remove('playing');
});

// ==========================================
// KEYBOARD NAVIGATION
// ==========================================

document.addEventListener('keydown', (e) => {
    if (proposalSection.classList.contains('active')) return;
    
    if (e.key === 'ArrowRight' && currentIndex < memories.length - 1) {
        showMemory(currentIndex + 1);
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        showMemory(currentIndex - 1);
    }
});

// ==========================================
// MOUSE PARALLAX EFFECT
// ==========================================

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) - 0.5;
    mouseY = (e.clientY / window.innerHeight) - 0.5;
    
    // Apply subtle parallax to memory image
    if (memoryImage && !isTransitioning) {
        const moveX = mouseX * 20;
        const moveY = mouseY * 20;
        memoryImage.style.transform = `scale(1.15) translate(${moveX}px, ${moveY}px)`;
    }
});

// ==========================================
// PREVENT CONTEXT MENU (Optional)
// ==========================================

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.log('%c❤️ Made with Love for Priyaa ❤️', 'font-size: 20px; color: #ff69b4; font-weight: bold;');
console.log('%cHappy Valentine\'s Day! 💕', 'font-size: 16px; color: #ffd6e8;');

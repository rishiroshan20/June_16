export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const TELEGRAM_BOT_TOKEN = '8285360868:AAGUugqpjmINXml8dEILMWg07cV0ggfghX0';
    const TELEGRAM_CHAT_ID = '1300394066';

    const { response } = req.body;

    let message;
    if (response === 'yes') {
        message = '🎉💕 SHE SAID YES!!! 💕🎉\n\nPriyaa accepted your proposal!\n\nCongratulations, Rishi! 💍❤️';
    } else if (response === 'no') {
        message = '💔 She said "Not Yet"...\n\nDon\'t worry Rishi, give her some time. Your love is strong! 🙏';
    } else {
        return res.status(400).json({ error: 'Invalid response' });
    }

    try {
        const telegramResponse = await fetch(
            `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: message,
                    parse_mode: 'HTML'
                })
            }
        );

        const data = await telegramResponse.json();
        
        if (data.ok) {
            return res.status(200).json({ success: true });
        } else {
            return res.status(500).json({ error: 'Telegram API error', details: data });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Failed to send notification', details: error.message });
    }
}

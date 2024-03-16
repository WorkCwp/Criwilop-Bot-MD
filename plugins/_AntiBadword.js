const isToxic = /(puto|mierda|fuck|puta|verga|vrga|maricon|cabron)/i;

import axios from "axios"
import fetch from "node-fetch"

export async function before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiToxic = isToxic.exec(m.text)
    let removeParticipant = m.key.participant
    let messageId = m.key.id
    
    if (chat.antiToxic && isAntiToxic) {
        var analysisResult = await Analyze(m.text)
        var toxicityLevels = [
            "❤️  ❤️  ❤️  ❤️  ❤️", // Very friendly and welcoming
            "☠️  ❤️  ❤️  ❤️  ❤️", // Mildly toxic, is it fun?
            "☠️  ☠️  ❤️  ❤️  ❤️", // A bit toxic, calm down!
            "☠️  ☠️  ☠️  ❤️  ❤️", // Quite toxic, you can relax!
            "☠️  ☠️  ☠️  ☠️  ❤️", // Highly toxic, be careful!
            "☠️  ☠️  ☠️  ☠️  ☠️"   // Extremely toxic!
        ];
        var toxicityVerdict = [
            "Eres tan amigable. ¡Es muy acogedor conocerte!",
            "No eres demasiado tóxico, ¿es divertido?",
            "Pareces ser tóxico. ¡Cálmate!",
            "No seas tan tóxico. ¡Puedes relajarte!",
            "No hay nada más que pueda decir, ¡eres totalmente la persona más tóxica del mundo!",
            "Tu medidor de tóxicos también supera el 100%."
        ];

        const toxicityPercentage = Number(analysisResult.toxicity * 100).toFixed(2)
        let toxicityIndex;
        if (toxicityPercentage < 15) {
            toxicityIndex = 0
        } else if ((toxicityPercentage > 14) && (toxicityPercentage < 35)) {
            toxicityIndex = 1
        } else if ((toxicityPercentage > 34) && (toxicityPercentage < 51)) {
            toxicityIndex = 2
        } else if ((toxicityPercentage > 50) && (toxicityPercentage < 76)) {
            toxicityIndex = 3
        } else if ((toxicityPercentage > 75) && (toxicityPercentage < 95)) {
            toxicityIndex = 4
        } else {
            toxicityIndex = 5
        }

        var caption = `*[ FUERZA TÓXICA ]*\n\n${toxicityLevels[toxicityIndex]}\n${toxicityVerdict[toxicityIndex]}\n`
        
        await this.reply(m.chat, `*¡Malas palabras detectadas!*\n ${caption} ${isBotAdmin ? '' : '\n\n_Bot is not admin_'}`, m)

        if (isBotAdmin) {
            // Remove the participant from the group
            global.db.data.users[m.sender].warn += 1
            return this.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: messageId, participant: removeParticipant }})
        } 
    }
    return !0
}

async function Analyze(text) {
    try {
        const result = await axios.post("https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=AIzaSyDh6d2S3S4zOuZSgyySRcnj8uZMNJ6kdFQ", {
            comment: {
                text: text,
                type: 'PLAIN_TEXT'
            },
            languages: ['es'],
            requestedAttributes: { SEVERE_TOXICITY: {}, INSULT: {} }
        });
        return { toxicity: result.data.attributeScores.SEVERE_TOXICITY.summaryScore.value, insult: result.data.attributeScores.INSULT.summaryScore.value, combined: (result.data.attributeScores.SEVERE_TOXICITY.summaryScore.value + result.data.attributeScores.INSULT.summaryScore.value) / 2 };
    } catch (error) {
        console.error(error);
        return { toxicity: NaN, insult: NaN, combined: NaN };
    }
}

import {sticker} from '../lib/sticker.js';
const handler = (m) => m;
handler.all = async function(m, {conn}) {
  const chat = global.db.data.chats[m.chat];

  if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Abre este enlace')) && !m.isBaileys && !m.isGroup && !chat.isBanned && !m.fromMe) {
    const join = `*< UNE UN BOT A TU GRUPO />*\n\n*—◉ Hola @${m.sender.split('@')[0]}, si deseas solicitar un Bot para tu grupo usa el comando #join mas el enlace de tu grupo.*\n\n*—◉ Ejemplo:*\n*◉ #join* https://chat.whatsapp.com/IPBbr3nEmSkKzkJbWGtlD`.trim();
    this.sendMessage(m.chat, {text: join.trim(), mentions: [...join.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...join.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": global.imagen6, "mediaUrl": `https://atom.bio/criwilop`, "sourceUrl": `https://atom.bio/criwilop`}}}, {quoted: m});
  }
  return !0;
};
export default handler;

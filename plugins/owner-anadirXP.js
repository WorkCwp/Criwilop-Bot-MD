import MessageType from '@whiskeysockets/baileys';
const pajak = 0;
const handler = async (m, {conn, text}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '*⚠️ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰 𝙰 𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙲𝙾𝙽 𝙴𝙻 @𝚝𝚊𝚐*';
  const txt = text.replace('@' + who.split`@`[0], '').trim();
  if (!txt) throw '*⚠️ 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙻𝙰 𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳 𝙳𝙴 𝙴𝚇𝙿𝙴𝚁𝙸𝙴𝙽𝙲𝙸𝙰 (𝚇𝙿) 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰 𝙰𝙽̃𝙰𝙳𝙸𝚁*';
  if (isNaN(txt)) throw '*⚠️ 𝚂𝙸𝙼𝙱𝙾𝙻𝙾 𝙽𝙾 𝙰𝙳𝙼𝙸𝚃𝙸𝙳𝙾, 𝚂𝙾𝙻𝙾 𝙽𝚄𝙼𝙴𝚁𝙾𝚂!*';
  const xp = parseInt(txt);
  let exp = xp;
  const pjk = Math.ceil(xp * pajak);
  exp += pjk;
  if (exp < 1) throw '*⚠️ 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙼𝙸𝙽𝙸𝙼𝙾 𝙳𝙴 𝙴𝚇𝙿𝙴𝚁𝙸𝙴𝙽𝙲𝙸𝙰 (𝚇𝙿) 𝙿𝙰𝚁𝙰 𝙰𝙽̃𝙰𝙳𝙸𝚁 𝙴𝚂 𝟷*';
  const users = global.db.data.users;
  users[who].exp += xp;
  m.reply(`≡ *𝚇𝙿 𝙰𝙽̃𝙰𝙳𝙸𝙳𝙾*
┌──────────────
▢  *𝚃𝚘𝚝𝚊𝚕:* ${xp}
└──────────────`);
};
handler.command = ['añadirxp', 'addexp'];
handler.rowner = true;
export default handler;
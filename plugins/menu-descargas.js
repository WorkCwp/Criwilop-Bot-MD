import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
      m.react('📥')
   const pp = imagen3;
    // let vn = './media/menu.mp3'
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `
*╭───── • ◆ • ─────┅┅┄┄*
   *< 𝔻𝔼𝕊ℂ𝔸ℝ𝔾𝔸𝕊 />*
   
▸🔰 _${usedPrefix}instagram *<enlace / link / url>*_
▸🔰 _${usedPrefix}mediafire *<enlace / link / url>*_
▸🔰 _${usedPrefix}gitclone *<enlace / link / url>*_
▸🔰 _${usedPrefix}gdrive *<enlace / link / url>*_
▸🔰 _${usedPrefix}tiktok *<enlace / link / url>*_
▸🔰 _${usedPrefix}tiktokimg *<enlace / link / url>*_
▸🔰 _${usedPrefix}twitter *<enlace / link / url>*_
▸🔰 _${usedPrefix}fb *<enlace / link / url>*_
▸🔰 _${usedPrefix}ytshort *<enlace / link / url>*_
▸🔰 _${usedPrefix}ytmp3 *<enlace / link / url>*_
▸🔰 _${usedPrefix}ytmp4 *<enlace / link / url>*_
▸🔰 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
▸🔰 _${usedPrefix}ytmp4doc *<enlace / link / url>*_
▸🔰 _${usedPrefix}videodoc *<enlace / link / url>*_
▸🔰 _${usedPrefix}dapk2 *<enlace / link / url>*_
▸🔰 _${usedPrefix}stickerpack *<enlace / link / url>*_
▸🔰 _${usedPrefix}play *<texto>*_
▸🔰 _${usedPrefix}play2 *<texto>*_
▸🔰 _${usedPrefix}play.1 *<texto>*_
▸🔰 _${usedPrefix}play.2 *<texto>*_
▸🔰 _${usedPrefix}playdoc *<texto>*_
▸🔰 _${usedPrefix}playdoc2 *<texto>*_
▸🔰 _${usedPrefix}playlist *<texto>*_
▸🔰 _${usedPrefix}spotify *<texto>*_
▸🔰 _${usedPrefix}ringtone *<texto>*_
▸🔰 _${usedPrefix}soundcloud *<texto>*_
▸🔰 _${usedPrefix}imagen *<texto>*_
▸🔰 _${usedPrefix}pinterest *<texto>*_
▸🔰 _${usedPrefix}wallpaper *<texto>*_
▸🔰 _${usedPrefix}pptiktok *<nombre de usuario>*_
▸🔰 _${usedPrefix}igstalk *<nombre de usuario>*_
▸🔰 _${usedPrefix}igstory *<nombre de usuario>*_
▸🔰 _${usedPrefix}tiktokstalk *<username>*_
*╰───── • ◆ • ─────┅┅┄┄*`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp , caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp , caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*⚠️ 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(descargas|Descargas|descargar|Descargar|menu3|Menu3)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
      }

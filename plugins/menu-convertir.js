import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
      m.react('🔀')
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
   * ᴄᴏɴᴠᴇʀᴛɪʀ ᴍᴜʟᴛɪᴍᴇᴅɪᴀ*
   
  ▸🧧 _${usedPrefix}toanime *<imagen>*_
  ▸🧧 _${usedPrefix}togifaud *<video>*_
  ▸🧧 _${usedPrefix}toimg *<sticker>*_
  ▸🧧 _${usedPrefix}tomp3 *<video>*_
  ▸🧧 _${usedPrefix}tomp3 *<nota de voz>*_
  ▸🧧 _${usedPrefix}toptt *<video / audio>*_
  ▸🧧 _${usedPrefix}tovideo *<sticker>*_
  ▸🧧 _${usedPrefix}tourl *<video / imagen / audio>*_
  ▸🧧 _${usedPrefix}tts *<idioma> <texto>*_
  ▸🧧 _${usedPrefix}tts *<efecto> <texto>*_
*╰───── • ◆ • ─────┅┅┄┄*

*╭───── • ◆ • ─────┅┅┄┄*
       *ᴇғᴇᴄᴛᴏs*
   
  ▸🖍️ _${usedPrefix}logos *<efecto> <texto>*_

*╰───── • ◆ • ─────┅┅┄┄*

*╭───── • ◆ • ─────┅┅┄┄*
   *ᴍᴏᴅɪғɪᴄᴀᴄɪᴏɴ ᴅᴇ ᴀᴜᴅɪᴏs*
   
  *- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
  ▸🎤 _${usedPrefix}bass_
  ▸🎤 _${usedPrefix}blown_
  ▸🎤 _${usedPrefix}deep_
  ▸🎤 _${usedPrefix}earrape_
  ▸🎤 _${usedPrefix}fast_
  ▸🎤 _${usedPrefix}fat_
  ▸🎤 _${usedPrefix}nightcore_
  ▸🎤 _${usedPrefix}reverse_
  ▸🎤 _${usedPrefix}robot_
  ▸🎤 _${usedPrefix}slow_
  ▸🎤 _${usedPrefix}smooth_
  ▸🎤 _${usedPrefix}tupai_
*╰───── • ◆ • ─────┅┅┄┄*

*╭───── • ◆ • ─────┅┅┄┄*
  *ᴄʀᴇᴀᴄɪᴏɴ ᴅᴇ sᴛɪᴄᴋᴇʀs*
   
  ▸🃏 _${usedPrefix}sticker *<responder a imagen o video>*_
  ▸🃏 _${usedPrefix}sticker *<enlace / link / url>*_
  ▸🃏 _${usedPrefix}sticker2 *<responder a imagen o video>*_
  ▸🃏 _${usedPrefix}sticker2 *<enlace / link / url>*_
  ▸🃏 _${usedPrefix}s *<responder a imagen o video>*_
  ▸🃏 _${usedPrefix}s *<enlace / link / url>*_
  ▸🃏 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
  ▸🃏 _${usedPrefix}scircle *<imagen>*_
  ▸🃏 _${usedPrefix}sremovebg *<imagen>*_
  ▸🃏 _${usedPrefix}semoji *<tipo> <emoji>*_
  ▸🃏 _${usedPrefix}qc *<texto>*_
  ▸🃏 _${usedPrefix}attp *<texto>*_
  ▸🃏 _${usedPrefix}attp2 *<texto>*_
  ▸🃏 _${usedPrefix}attp3 *<texto>*_
  ▸🃏 _${usedPrefix}ttp *<texto>*_
  ▸🃏 _${usedPrefix}ttp2 *<texto>*_
  ▸🃏 _${usedPrefix}ttp3 *<texto>*_
  ▸🃏 _${usedPrefix}ttp4 *<texto>*_
  ▸🃏 _${usedPrefix}ttp5 *<texto>*_
  ▸🃏 _${usedPrefix}pat *<@tag>*_
  ▸🃏 _${usedPrefix}slap *<@tag>*_
  ▸🃏 _${usedPrefix}kiss *<@tag>*_
  ▸🃏 _${usedPrefix}dado_
  ▸🃏 _${usedPrefix}wm *<packname> <author>*_
  ▸🃏 _${usedPrefix}stickermarker *<efecto> <imagen>*_
  ▸🃏 _${usedPrefix}stickerfilter *<efecto> <imagen>*_
*╰───── • ◆ • ─────┅┅┄┄*
*_BY: ♰⍣𝑪𝒓𝒊𝒘𝒊𝒍𝒐𝒑𝑩𝒐𝒕-𝑴𝑫࿐⛦_*
`.trim();
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
handler.command = /^(convertir|Convertir|menu8|Menu8)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
      }

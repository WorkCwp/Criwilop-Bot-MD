import {addExif} from '../lib/sticker.js';
const handler = async (m, {conn, text}) => {
  if (!m.quoted) throw '*⚠️ ʀᴇsᴘᴏɴᴅᴇ ᴀʟ sᴛɪᴄᴋᴇʀ ᴘᴀʀᴀ ᴀñᴀᴅɪʀʟᴇ ɪɴғᴏʀᴍᴀᴄɪᴏɴ ᴘᴇʀsᴏɴᴀʟɪᴢᴀᴅᴀ.*';
  let stiker = false;
  try {
    let [packname, ...author] = text.split('|');
    author = (author || []).join('|');
    const mime = m.quoted.mimetype || '';
    if (!/webp/.test(mime)) throw '*⚠️ ʀᴇsᴘᴏɴᴅᴇ ᴀʟ sᴛɪᴄᴋᴇʀ ᴘᴀʀᴀ ᴀñᴀᴅɪʀʟᴇ ɪɴғᴏʀᴍᴀᴄɪᴏɴ ᴘᴇʀsᴏɴᴀʟɪᴢᴀᴅᴀ.*';
    const img = await m.quoted.download();
    if (!img) throw '*⚠️ ʀᴇsᴘᴏɴᴅᴇ ᴀʟ sᴛɪᴄᴋᴇʀ ᴘᴀʀᴀ ᴀñᴀᴅɪʀʟᴇ ɪɴғᴏʀᴍᴀᴄɪᴏɴ ᴘᴇʀsᴏɴᴀʟɪᴢᴀᴅᴀ.*';
    stiker = await addExif(img, packname || global.packname, author || global.author);
  } catch (e) {
    console.error(e);
    if (Buffer.isBuffer(e)) stiker = e;
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, {asSticker: true});
    else throw '*⚠️ ᴀʟɢᴏ ғᴀʟʟᴏ, ᴘᴏʀғᴀᴠᴏʀ ɪɴᴛᴇɴᴛᴀ ᴅᴇ ɴᴜᴇᴠᴏ, sɪ ᴇʟ ᴇʀʀᴏʀ ᴘᴇʀsɪsᴛᴇ ᴄᴏᴍᴜɴɪᴄᴀʀsᴇ ᴄᴏɴ ᴍɪ ᴄʀᴇᴀᴅᴏʀ *wa.me/573244488053*';
  }
};
handler.help = ['wm <packname>|<author>'];
handler.tags = ['sticker'];
handler.command = /^take|robar|wm$/i;
export default handler;

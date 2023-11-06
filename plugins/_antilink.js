const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
export async function before(m, {conn, isAdmin, isBotAdmin}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const delet = m.key.participant;
  const bang = m.key.id;
  const bot = global.db.data.settings[this.user.jid] || {};
  const user = `@${m.sender.split`@`[0]}`;
  const isGroupLink = linkRegex.exec(m.text);
  const grupo = `https://chat.whatsapp.com`;
  if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*⚠️sᴏʟᴏ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs ᴘᴜᴇᴅᴇɴ ᴇɴᴠɪᴀʀ ʟɪɴᴋs, ᴘᴏʀ ʟᴏ ᴛᴀɴᴛᴏ ɴᴏ sᴇ ᴛᴇ ᴇʟɪᴍɪɴᴀʀᴀ ⚠️*');
  if (chat.antiLink && isGroupLink && !isAdmin) {
    if (isBotAdmin) {
      const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
      if (m.text.includes(linkThisGroup)) return !0;
    }
    await this.sendMessage(m.chat, {text: `*「 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊𝐒 」*\n* ⚠️ ${user} ʟᴏs ʟɪɴᴋs ᴇsᴛᴀɴ ᴘʀᴏʜɪʙɪᴅᴏs ❌ sᴇʀᴀs ᴇʟɪᴍɪɴᴀᴅᴏ/ᴀ ⚠️*`, mentions: [m.sender]}, {quoted: m});
    if (!isBotAdmin) return m.reply('* ⚠️ ᴘᴀʀᴀ ǫᴜᴇ ᴇʟ ᴀɴᴛɪʟɪɴᴋs ʜᴀɢᴀ ᴇғᴇᴄᴛᴏ ᴅᴇʙᴏ sᴇʀ ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀ⚠️*');
    if (isBotAdmin && bot.restrict) {
      await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    } else if (!bot.restrict) return m.reply('*⚠️ ᴇʟ ᴏᴡɴᴇʀ ɴᴏ ᴛɪᴇɴᴇ ʜᴀʙɪʟɪᴛᴀᴅᴀ ʟᴀs ʀᴇsᴛʀɪᴄᴄɪᴏɴᴇs, ᴄᴏɴᴛᴀᴄᴛᴇ ᴄᴏɴ ᴇʟ *wa.me/573244488043* ᴘᴀʀᴀ ǫᴜᴇ ʟᴏ ʜᴀʙɪʟɪᴛᴇ...*');
  }
  return !0;
}

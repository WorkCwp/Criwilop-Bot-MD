const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*⚠️ 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝚁𝙴𝙿𝙾𝚁𝚃𝙴*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} el comando ${usedPrefix}play no manda nada*`;
  if (text.length < 10) throw `*⚠️ 𝙴𝙻 𝚁𝙴𝙿𝙾𝚁𝚃𝙴 𝙳𝙴𝙱𝙴 𝚂𝙴𝚁 𝙳𝙴 𝙼𝙸𝙽𝙸𝙼𝙾 𝟷0 𝙲𝙰𝚁𝙰𝙲𝚃𝙴𝚁𝙴𝚂!*`;
  if (text.length > 1000) throw `*⚠️ 𝙴𝙻 𝚁𝙴𝙿𝙾𝚁𝚃𝙴 𝙳𝙴𝙱𝙴 𝚂𝙴𝚁 𝙳𝙴 𝙼𝙰𝚇𝙸𝙼𝙾 𝟷000 𝙲𝙰𝚁𝙰𝙲𝚃𝙴𝚁𝙴𝚂!*`;
  const teks = `*❒═════[𝐑𝐄𝐏𝐎𝐑𝐓𝐄]═════❒*\n*┬*\n*├❧ 𝙽𝚄𝙼𝙴𝚁𝙾:* wa.me/${m.sender.split`@`[0]}\n*┴*\n*┬*\n*├❧ 𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${text}\n*┴*`;
  conn.reply('573244488043@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  conn.reply('5492216804640@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  conn.reply('59897758548@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  m.reply(`*⚠️𝑟𝑒𝑝𝑜𝑟𝑡𝑒 𝑒𝑛𝑣𝑖𝑎𝑛𝑑𝑜, 𝑠𝑖 𝑑𝑖𝑐ℎ𝑜 𝑟𝑒𝑝𝑜𝑟𝑡𝑒 𝑒𝑠 𝑓𝑎𝑙𝑠𝑜 𝑜 𝑒𝑠 𝑏𝑟𝑜𝑚𝑎 𝑐𝑜𝑛𝑙𝑙𝑒𝑣𝑎𝑟𝑎 𝑎 𝑠𝑢𝑠𝑝𝑒𝑛𝑠𝑖𝑜𝑛 𝑝𝑒𝑟𝑚𝑎𝑛𝑒𝑛𝑡𝑒 𝑑𝑒𝑙 𝑏𝑜𝑡.*`);
};
handler.help = ['reporte', 'request'].map((v) => v + ' <teks>');
handler.tags = ['info'];
handler.command = /^(report|reportar|request|reporte|bugs|bug|report-owner|reportes)$/i;
export default handler;

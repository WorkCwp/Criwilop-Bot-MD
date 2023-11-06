import ws from 'ws';
async function handler(m, { conn: _envio, usedPrefix }) {
  const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
  function convertirMsADiasHorasMinutosSegundos(ms) {
  var segundos = Math.floor(ms / 1000);
  var minutos = Math.floor(segundos / 60);
  var horas = Math.floor(minutos / 60);
  var días = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;

  var resultado = "";
  if (días !== 0) {
    resultado += días + " días, ";
  }
  if (horas !== 0) {
    resultado += horas + " horas, ";
  }
  if (minutos !== 0) {
    resultado += minutos + " minutos, ";
  }
  if (segundos !== 0) {
    resultado += segundos + " segundos";
  }

  return resultado;
}

  const message = users.map((v, index) => `*${index + 1}.-* @${v.user.jid.replace(/[^0-9]/g, '')}\n*Link:* wa.me/${v.user.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}estado\n*Nombre:* ${v.user.name || '-'}\n*Uptime:* ${ v.uptime ? convertirMsADiasHorasMinutosSegundos(Date.now() - v.uptime) : "Desconocido"}`).join('\n\n');
  const replyMessage = message.length === 0 ? '*—◉ No hay SubBots activos en estos momentos.*' : message;
  const totalUsers = users.length;
  const responseMessage = `
*—◉ 𝙰𝚀𝚄𝙸 𝚃𝙸𝙴𝙽𝙴𝚂 𝙻𝙰 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝚂𝚄𝙱𝙱𝙾𝚃𝚂 (𝚂𝙴𝚁𝙱𝙾𝚃/𝙹𝙰𝙳𝙸𝙱𝙾𝚃) 𝙰𝙲𝚃𝙸𝚅𝙾𝚂 🤖️*

*◉ 𝙿𝚄𝙴𝙳𝙴𝚂 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙰𝚁𝙻𝙾𝚂 𝙿𝙰𝚁𝙰 𝙿𝙴𝙳𝙸𝚁 𝚀𝚄𝙴 𝚂𝙴 𝚄𝙽𝙰𝙽 𝙰 𝚃𝚄 𝙶𝚁𝚄𝙿𝙾, 𝚂𝙴 𝚁𝙴𝚂𝙿𝙴𝚃𝚄𝙾𝚂𝙾!!*

*⚠️ 𝐸𝑙 𝑜𝑤𝑛𝑒𝑟 𝑑𝑒𝑙 𝑏𝑜𝑡 𝑛𝑜 𝑠𝑒 ℎ𝑎𝑐𝑒 𝑟𝑒𝑠𝑝𝑜𝑛𝑠𝑎𝑏𝑙𝑒 𝑝𝑜𝑟 𝑐𝑎𝑠𝑜𝑠 𝑞𝑢𝑒 𝑠𝑢𝑐𝑒𝑑𝑎𝑛 𝑑𝑒𝑛𝑡𝑟𝑜 𝑑𝑒𝑙 𝑢𝑠𝑜 𝑑𝑒𝑙 𝑠𝑢𝑏𝑏𝑜𝑡, 𝑙𝑎 𝑟𝑒𝑠𝑝𝑜𝑛𝑠𝑎𝑏𝑖𝑙𝑖𝑑𝑎𝑑 𝑑𝑒𝑏𝑒𝑟𝑎 𝑠𝑒𝑟 𝑡𝑜𝑚𝑎𝑑𝑎 𝑝𝑜𝑟 𝑒𝑙 𝑢𝑠𝑢𝑎𝑟𝑖𝑜 𝑞𝑢𝑒 𝑙𝑜 𝑢𝑡𝑖𝑙𝑖𝑧𝑎*

*—◉ 𝚂𝚄𝙱𝙱𝙾𝚃𝚂 𝙲𝙾𝙽𝙴𝙲𝚃𝙰𝙳𝙾𝚂:* ${totalUsers || '0'}

${replyMessage.trim()}`.trim();

  await _envio.sendMessage(m.chat, {text: responseMessage, mentions: _envio.parseMention(responseMessage)}, {quoted: m});
}
handler.command = handler.help = ['listjadibot', 'bots', 'subsbots'];
handler.tags = ['jadibot'];
export default handler;

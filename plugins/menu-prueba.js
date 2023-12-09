const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = imagen1;

    const str = `Menu 🍷`.trim();

    if (m.isGroup) {
      const fkontak2 = {
        'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'},
        'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}},
        'participant': '0@s.whatsapp.net'
      };
      conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: fkontak2 });
    }
  } catch (error) {
    console.error(error);
    conn.reply(m.chat, '*⚠️ Error*', m);
  }
};

handler.command = /^(X)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;

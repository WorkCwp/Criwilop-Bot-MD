import fetch from 'node-fetch';

let data;
let buff;
let mimeType;
let fileName;
let apiUrl;
let enviando = false;

const handler = async (m, { command, usedPrefix, conn, text }) => {
  if (!text) throw `*⚠️ Ingresa un título a buscar*`;

  if (enviando) return;
  enviando = true;

  try {
    const apiUrls = [
      `https://api-brunosobrino.zipponodes.xyz/api/ytplay?text=${text}`,
      `https://api-brunosobrino.onrender.com/api/ytplay?text=${text}`
    ];

    for (const url of apiUrls) {
      try {
        const res = await fetch(url);
        data = await res.json();
        if (data.resultado && data.resultado.url) {
          break;
        }
      } catch {}
    }

    if (!data.resultado || !data.resultado.url) {
      enviando = false;
      throw `*⚠️ Error en la búsqueda.*`;
    } else {
      try {
        if (command === 'play') {
          apiUrl = `https://api-brunosobrino.zipponodes.xyz/api/v1/ytmp3?url=${data.resultado.url}`;
          mimeType = 'audio/mpeg';
          fileName = 'error.mp3';
          buff = await conn.getFile(apiUrl);
        } else if (command === 'play2') {
          apiUrl = `https://api-brunosobrino.zipponodes.xyz/api/v1/ytmp4?url=${data.resultado.url}`;
          mimeType = 'video/mp4';
          fileName = 'error.mp4';
          buff = await conn.getFile(apiUrl);
        }
      } catch (error) {
        throw `*⚠️ Error al descargar el archivo.*`;
      }
    }

    const dataMessage = `🔸 Título: ${data.resultado.title}\n${data.resultado.url}`;
    await conn.sendMessage(m.chat, { text: dataMessage }, { quoted: m });

    if (buff) {
      await conn.sendMessage(m.chat, { [mimeType.startsWith('audio') ? 'audio' : 'video']: buff.data, mimetype: mimeType, fileName: fileName }, { quoted: m });
    } else {
      throw `*⚠️ Error al enviar el archivo.*`;
    }
  } catch (error) {
    throw error;
  } finally {
    enviando = false;
  }
};

handler.command = ['play', 'play2'];
export default handler

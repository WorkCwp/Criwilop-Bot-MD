import fetch from 'node-fetch';
let data;
let buff;
let mimeType;
let fileName;
let apiUrl;
let enviando = false;

const handler = async (m, { command, usedPrefix, conn, text }) => {
  if (!text) throw `*⚠️ Falta el nombre de la canción/video. Por favor, ingrese el comando seguido del nombre, título o enlace de una canción o video de YouTube.*\n\n*—◉ Ejemplo 1:\n *${usedPrefix + command} Kevin kaarl colapso*`;
  if (enviando) return;
  enviando = true;

  try {
    const apiUrls = [
      `https://api-brunosobrino.zipponodes.xyz/api/ytplay?text=${text}`
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
      throw `*⚠️ No se pudo obtener la URL del video/canción.*`;
    } else {
      try {
        if (command === 'play') {
          m.react('🎧');
          apiUrl = `https://api-brunosobrino.zipponodes.xyz/api/v1/ytmp3?url=${data.resultado.url}`;
          mimeType = 'audio/mpeg';
          fileName = 'error.mp3';
          buff = await fetch(apiUrl).then(res => res.buffer());
        } else if (command === 'play2') {
          m.react('🎥');
          apiUrl = `https://api-brunosobrino.zipponodes.xyz/api/v1/ytmp4?url=${data.resultado.url}`;
          mimeType = 'video/mp4';
          fileName = 'error.mp4';
          buff = await fetch(apiUrl).then(res => res.buffer());
        }
      } catch {
        try {
          if (command === 'play') {
            m.react('🎧');
            apiUrl = `https://api-brunosobrino.onrender.com/api/v1/ytmp3?url=${data.resultado.url}`;
            mimeType = 'audio/mpeg';
            fileName = 'error.mp3';
            buff = await fetch(apiUrl).then(res => res.buffer());
          } else if (command === 'play2') {
            m.react('🎥');
            apiUrl = `https://api-brunosobrino.onrender.com/api/v1/ytmp4?url=${data.resultado.url}`;
            mimeType = 'video/mp4';
            fileName = 'error.mp4';
            buff = await fetch(apiUrl).then(res => res.buffer());
          }
        } catch {
          enviando = false;
          throw `*⚠️ Error al descargar el video/canción desde las APIs disponibles.*`;
        }
      }
    }

    m.react('☑️');

    const dataMessage = `*⍣ 🔗 Título🍁:* *${data.resultado.title}*\n\n${data.resultado.url}`;
    await conn.sendMessage(m.chat, { text: dataMessage }, { quoted: m });

    if (buff) {
      await conn.sendMessage(m.chat, { [mimeType.startsWith('audio') ? 'audio' : 'video']: buff, mimetype: mimeType, fileName: fileName }, { quoted: m });
      enviando = false;
    } else {
      enviando = false;
      throw `*⚠️ Error al descargar el video/canción desde las APIs disponibles.*`;
    }
  } catch (error) {
    enviando = false;
    throw `*⚠️ Error: ${error.message || 'Ocurrió un error inesperado'}.*`;
  }
};

handler.command = ['play', 'play2'];

export default handler;

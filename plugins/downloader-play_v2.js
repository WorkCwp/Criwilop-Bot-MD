import fetch from 'node-fetch';
let data;
let buff;
let mimeType;
let fileName;
let apiUrl;
let enviando = false;
const handler = async (m, { command, usedPrefix, conn, text }) => {
  if (!text) throw `_*< DESCARGAS - PLAY v2 />*_\n\n*[ ℹ️ ] Hace falta el título del video de YouTube.*\n\n*[ 💡 ] Ejemplo:* _${usedPrefix + command} Good Feeling - Flo Rida_\n\n*[ 💡 ] Ejemplo 2:* _${usedPrefix + command} https://youtu.be/JLWRZ8eWyZo?si=EmeS9fJvS_OkDk7p_`;
if (enviando) return;
    enviando = true
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
      throw `_*< DESCARGAS - PLAY V2 />*_\n\n*[ ℹ️ ] Ocurrió un error. Por favor, inténtalo de nuevo más tarde.*`;
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
      } catch {
          try {
            if (command === 'play') {
              apiUrl = `https://api-brunosobrino.onrender.com/api/v1/ytmp3?url=${data.resultado.url}`;
              mimeType = 'audio/mpeg';
              fileName = 'error.mp3';
              buff = await conn.getFile(apiUrl);
            } else if (command === 'play2') {
              apiUrl = `https://api-brunosobrino.onrender.com/api/v1/ytmp4?url=${data.resultado.url}`;
              mimeType = 'video/mp4';
              fileName = 'error.mp4';
              buff = await conn.getFile(apiUrl);
            }
          } catch {
            enviando = false;
            throw `_*< DESCARGAS - PLAY V2 />*_\n\n*[ ℹ️ ] Ocurrió un error. Por favor, inténtalo de nuevo más tarde.*`;
          }
       }
    }

    const dataMessage = `_*< DESCARGAS - PLAY V2 />*_\n\n▢ *Título:* ${data.resultado.title}\n\n▢ *Publicado:* ${data.resultado.publicDate}\n\n▢ *Canal:* ${data.resultado.channel}\n\n▢ *Vídeo URL:* ${data.resultado.url}`;
    await conn.sendMessage(m.chat, { text: dataMessage }, { quoted: m });

    if (buff) {
      await conn.sendMessage(m.chat, {[mimeType.startsWith('audio') ? 'audio' : 'video']: buff.data, mimetype: mimeType, fileName: fileName}, {quoted: m});
      enviando = false;
    } else {
      enviando = false;
      throw `_*< DESCARGAS - PLAY V2 />*_\n\n*[ ℹ️ ] Ocurrió un error. Por favor, inténtalo de nuevo más tarde.*`;
    }
  } catch (error) {
    enviando = false;
    throw `_*< DESCARGAS - PLAY V2 />*_\n\n*[ ℹ️ ] Ocurrió un error. Por favor, inténtalo de nuevo más tarde.*`;
  }
};
handler.command = ['play', 'play2'];
export default handler;

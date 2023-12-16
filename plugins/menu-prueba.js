import fetch from 'node-fetch';

const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) {
    throw `_*< IA - BARD />*_\n\n*[ ℹ️ ] Proporciona un texto.*\n\n*[ 💡 ] Ejemplo:* _${usedPrefix + command} Hola Bard, ¿cómo estás?_`;
  }

  try {
    conn.sendPresenceUpdate('composing', m.chat);

    const API_URL = `https://vihangayt.me/tools/bard?q=${encodeURIComponent(text)}`;
    const response = await fetch(API_URL);
    const data = await response.json();

    if (data.status && data.data) {
      const respuestaAPI = data.data;
      conn.reply(m.chat, respuestaAPI, m);
    } else {
      throw '_*< IA - BARD />*_\n\n*[ ℹ️ ] No se pudo obtener una respuesta válida.*';
    }
  } catch (error) {
    throw `_*< IA - BARD />*_\n\n*[ ℹ️ ] Ocurrió un error. Por favor, inténtalo de nuevo más tarde.*`;
  }
};

handler.command = /^bard$/i;

export default handler;

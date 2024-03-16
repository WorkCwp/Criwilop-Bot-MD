import axios from 'axios';

let handler = async (m, { conn, text }) => {
  if (!text) throw '✳️ ¿Qué quieres que busque en YouTube?';

  try {
    const query = encodeURIComponent(text);
    const response = await axios.get(`https://weeb-api.vercel.app/ytsearch?query=${query}`);
    const results = response.data;

    if (results.length === 0) {
      throw '⚠️ No se encontraron resultados para la consulta dada.';
    }

    const firstResult = results[0];

    const message = `
乂 ${firstResult.title} \n
乂 *Link* : ${firstResult.url}\n
乂 *Duración* : ${firstResult.timestamp}\n
乂 *Publicado :* ${firstResult.ago}\n
乂 *Vistas:* ${firstResult.views}

    `;

    conn.sendFile(m.chat, firstResult.thumbnail, 'yts.jpeg', message, m);
  } catch (error) {
    console.error(error);
    throw '⚠️ Se produjo un error al buscar videos de YouTube..';
  }
};

handler.help = ['ytsearch'];
handler.tags = ['downloader'];
handler.command = ['ytsearch', 'yts'];

export default handler;

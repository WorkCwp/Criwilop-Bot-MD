import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    const imageUrl = data[0].url;

    const message = `¡Aquí tienes una imagen aleatoria de un gato para alegrar tu día! 😺\n${imageUrl}`;

    conn.reply(m.chat, message, m);
  } catch (error) {
    conn.reply(m.chat, '¡Oh no! Parece que los gatos están de huelga en este momento. 😿 Intenta de nuevo más tarde.', m);
  }
};

handler.command = /^gato$/i;
export default handler;

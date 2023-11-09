import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  try {
    const res = await fetch('https://api.thecatapi.com/v1/images/search');
    const img = await res.json();
    const caption = `_♰⍣𝑪𝒓𝒊𝒘𝒊𝒍𝒐𝒑𝑩𝒐𝒕-𝑴𝑫࿐⛦_`.trim();
    conn.sendFile(m.chat, img[0].url, 'cat.jpg', caption, m);
  } catch {
    throw '*Error!*';
    }
};

handler.command = /^gato$/i;
export default handler;

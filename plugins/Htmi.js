import fetch from 'node-fetch';
const handler = async (m, {conn, text}) => {
  try {
    const res = await fetch('https://hitomi.la/reader/2722567.html');
    const img = await res.json();
    const caption = `_♰⍣𝑪𝒓𝒊𝒘𝒊𝒍𝒐𝒑𝑩𝒐𝒕-𝑴𝑫࿐⛦_`.trim();
    conn.sendFile(m.chat, img[0].url, 'dog.jpg', caption, m);
  } catch {
    throw '*Error!*';
  }
};
handler.command = /^n$/i;
handler.fail = null;
export default handler

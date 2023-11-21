import fetch from 'node-fetch';

const handler = async (m, {conn, usedPrefix, command}) => {
  m.react('🕶️')
  const res = await fetch('https://api-brunosobrino.zipponodes.xyz/api/wallpaper/hacker');
  if (!res.ok) throw await res.text();
  const buffer = await res.buffer();
  conn.sendFile(m.chat, buffer, 'wallpaper.webp', `texto prueba`, m);
};

handler.help = [''];
handler.tags = [''];
handler.command = /^(sticker2|Sticker2|Sticker 2|sticker 2)$/i;

export default handler;

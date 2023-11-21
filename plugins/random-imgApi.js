import fetch from 'node-fetch';

const handler = async (m, {conn, usedPrefix, command}) => {
  const res = await fetch('https://api-brunosobrino.zipponodes.xyz/api/wallpaper/hacker');
  if (!res.ok) throw await res.text();
  const buffer = await res.buffer();
  conn.sendFile(m.chat, buffer, 'wallpaper.png', `texto prueba`, m);
};

handler.help = [''];
handler.tags = [''];
handler.command = /^(p)$/i;

export default handler;

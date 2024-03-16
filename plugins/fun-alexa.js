import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  const name = conn.getName(m.sender);
  if (!text) {
    throw `Hi *${name}*, ¿Quieres hablar? Responder con *${usedPrefix + command}* (tu mensaje)\n\n📌 Ejemplo: *${usedPrefix + command}* Hola robot`;
  }
  
  m.react('🗣️');

  const msg = encodeURIComponent(text);
  
  const res = await fetch(`https://ultimetron.guruapi.tech/rekha?prompt=${msg}`);

  const json = await res.json();
  
  
    let reply = json.result.response;
    m.reply(reply);

};

handler.help = ['bot'];
handler.tags = ['fun'];
handler.command = ['bot', 'alexa'];

export default handler;


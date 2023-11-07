const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*------------------------------------

*—◉ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚃𝙴𝚁𝙼𝚄𝚇*
> Comandos:
- cd && termux-setup-storage
- apt-get update -y && apt-get upgrade -y
- pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn 
- git clone https://github.com/WorkCwp/Criwilop-Bot-MD.git && cd Criwilop-Bot-MD
- yarn install
- npm install
- npm update
- npm start

------------------------------------

—◉ ✔️ ACTIVAR EN CASO DE DETENERSE EN TERMUX ✔️
ESCRIBE LOS SIGUIENTES COMANDOS UNO POR UNO:
> cd Criwilop-Bot-MD
> npm start

------------------------------------

—◉ 👽 OBTENER OTRO CODIGO QR EN TERMUX 👽
ESCRIBE LOS SIGUIENTES COMANDOS UNO POR UNO:
> cd Criwilop-Bot-MD
> rm -rf CwpSession
> npm start`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/WorkCwp/Criwilop-Bot-MD`},
    'mimetype': `application/${document}`,
    'fileName': `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://github.com/WorkCwp/Criwilop-Bot-MD',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://m.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs'}},
    'caption': text,
    'footer': wm,
    // 'buttons':[
    // {buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1},
    // {buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['instalarbot', 'instalarbot'];
export default handler;

import fetch from 'node-fetch';
const handler = async (m, {conn, text}) => {
  try {
    const url = text.split(' ')[1]; // Obtener el enlace de TikTok del mensaje
    const res = await fetch(`https://api-phx.zipponodes.xyz/api/tiktokv2?url=${url}`);
    const videoUrl = await res.text(); // Obtener la URL del video descargado

    // Enviar el video a WhatsApp
    await conn.sendFile(m.chat, videoUrl, 'video.mp4', 'Aquí está el video de TikTok que solicitaste');

  } catch {
    throw '*¡Error!* No se pudo descargar el video de TikTok';
  }
};
handler.help = ['tt'];
handler.tags = ['tiktok'];
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm|tt|ttnowm|tiktokaudio)$/i;
handler.fail = null;
export default handler;

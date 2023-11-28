import fetch from 'node-fetch';
const handler = async (m, {conn, text}) => {
  try {
    const res = await fetch(`https://api-phx.zipponodes.xyz/api/tiktokv2?url=${text}`);
  } catch {
    throw '*Error!*';
  }
};
handler.help = ['tiktok-dl'];
handler.tags = ['tiktok'];
handler.command = /^tt$/i;
handler.fail = null;
export default handler;

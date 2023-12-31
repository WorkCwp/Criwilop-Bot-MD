import axios from 'axios';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
import { mediafiredl } from '@bochilteam/scraper';

const MAX_FILE_SIZE_MB = 150;

const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `*⚠️ 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴 𝚅𝙰𝙻𝙸𝙳𝙾 𝙳𝙴 𝙼𝙴𝙳𝙸𝙰𝙵𝙸𝚁𝙴, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾: ${usedPrefix + command} https://www.mediafire.com/file/r0lrc9ir5j3e2fs/DOOM_v13_UNCLONE*`;

  try {
    const resEX = await mediafiredl(args[0]);

    if (isFileSizeValid(resEX.filesizeH)) {
      const captionES = `
*📓 𝙽𝙾𝙼𝙱𝚁𝙴:* ${resEX.filename}
*📁 𝙿𝙴𝚂𝙾:* ${resEX.filesizeH}
*📄 𝚃𝙸𝙿𝙾:* ${resEX.ext}

*⏳ 𝙴𝚂𝙿𝙴𝚁𝙴 𝙴𝙽 𝙻𝙾 𝚀𝚄𝙴 𝙴𝙽𝚅𝙸𝙾 𝚂𝚄 𝙰𝚁𝙲𝙷𝙸𝚅𝙾. . . .* 
`.trim();
      m.reply(captionES);
      await conn.sendFile(m.chat, resEX.url, resEX.filename, '', m, null, { mimetype: resEX.ext, asDocument: true });
    } else {
      throw `*⚠️El archivo supera los ${MAX_FILE_SIZE_MB}MB y no se puede enviar.*`;
    }
  } catch (error) {
    // Handle errors
    console.error(error);
    await m.reply(`*⚠️El archivo supera los ${MAX_FILE_SIZE_MB}MB y no se puede enviar.*`);
  }
};

handler.help = ['mediafire'].map((v) => v + ' <url>');
handler.tags = ['downloader'];
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i;
export default handler;

async function mediafireDl(url) {
  const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/', '')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`);
  const $ = cheerio.load(res.data);
  const link = $('#downloadButton').attr('href');
  const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ', '').replaceAll('\n', '');
  const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text();
  const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ', '');
  let mime = '';
  const rese = await axios.head(link);
  mime = rese.headers['content-type'];
  return { name, size, date, mime, link };
}

function isFileSizeValid(fileSize) {
  const numericSize = parseFloat(fileSize);
  const isSizeValid = !isNaN(numericSize) && numericSize <= MAX_FILE_SIZE_MB;
  return isSizeValid;
}

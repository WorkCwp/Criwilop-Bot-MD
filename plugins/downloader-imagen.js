import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*⚠️ INGRESE UN TITULO A BUSCAR*`
const prohibited = ['caca', 'polla', 'porno', 'porn', 'gore', 'cum', 'semen', 'puta', 'puto', 'culo', 'putita', 'putito','pussy', 'hentai', 'pene', 'coño', 'asesinato', 'zoofilia', 'mia khalifa', 'desnudo', 'desnuda', 'cuca', 'chocha', 'muertos', 'pornhub', 'xnxx', 'xvideos', 'teta', 'vagina', 'marsha may', 'misha cross', 'sexmex', 'furry', 'furro', 'furra', 'xxx', 'rule34', 'panocha', 'pedofilia', 'necrofilia', 'pinga', 'horny', 'ass', 'nude', 'popo', 'nsfw', 'femdom', 'futanari', 'erofeet', 'sexo', 'sex', 'yuri', 'ero', 'ecchi', 'blowjob', 'anal', 'ahegao', 'pija', 'verga', 'trasero', 'violation', 'violacion', 'bdsm', 'cachonda', '+18', 'mia marin', 'lana rhoades', 'cepesito', 'hot', 'buceta', 'nopor', 'xxx']
if (prohibited.some(word => m.text.toLowerCase().includes(word))) return m.reply('*⚠️ PARA BUSCAR ESE CONTENIDO SI ERES BUENO, PERO LA DE CHAMBEAR NO SE LA SABE*')      
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendFile(m.chat, link, 'error.jpg', `*🍁 Resultado de busqueda: ${text}*`, m)
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|imagen)$/i
handler.exp = 20
handler.money = 50
export default handler

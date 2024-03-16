
import fg from 'api-dylux'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `📌 Ejemplo : \n\n*${usedPrefix + command}* [link]`
          m.react(rwait)    
          try {
          let { SD, HD, desc, thumb, audio } = await fg.twitter(args[0])
          let te = ` 
┌─⊷ *TWITTER DL*
▢ Description: ${desc}
└───────────`
conn.sendFile(m.chat, HD, 'twitter.mp4', te, m)
m.react(done)
} catch (e) {
  	m.reply(`✳️ verifica que el enlace sea de Twitter`)
	} 
	
}
handler.help = ['twitter'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(twitter|tw)$/i
handler.diamond = true

export default handler

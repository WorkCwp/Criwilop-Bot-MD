
import fetch from 'node-fetch'

let handler = m => m
handler.all = async function (m) {
	
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/17bce288248c8850af508.jpg')
	
	//reply link wa
   global.rpl = { contextInfo: { externalAdReply: { mediaUrl: dygp, mediaType: 'VIDEO', description: 'grupo de apoyo', title: packname, body: 'grupo de apoyo', thumbnailUrl: pp, sourceUrl: dygp }}} 
	
	//reply link PayPal
    global.rpyp = { contextInfo: { externalAdReply: { mediaUrl: dygp, mediaType: 'VIDEO', description: 'Donate', title: 'YOUTUBE', body: 'Keep bot alive', thumbnailUrl: pp, sourceUrl: fgyt }}}
	
	//reply link yt
    global.rpyt = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: fgyt, mediaType: 'VIDEO', description: 'Suscribete : ' + fgyt, title: 'YouTube', body: 'aprende a crear tus propios bots', thumbnailUrl: pp, sourceUrl: fgyt }}}

	global.fcon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: 'status@broadcast' }, message: { contactMessage: { displayName: `Criwilop-MD`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:'Criwilop-MD'\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

} 
export default handler
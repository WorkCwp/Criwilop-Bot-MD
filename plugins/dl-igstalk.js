
import fg from 'api-dylux'
let handler= async (m, { conn, args, text, usedPrefix, command }) => {
	
    if (!args[0]) throw `✳️ Ingrese el nombre de usuario de Instagram` 
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKING* 
▢ *🔖número:* ${res.name} 
▢ *🔖Nombre de usuario:* ${res.username}
▢ *👥seguidores:* ${res.followersH}
▢ *🫂siguiendo:* ${res.followingH}
▢ *📌biografía:* ${res.description}
▢ *🏝️posteos:* ${res.postsH}

▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`

     await conn.sendFile(m.chat, res.profilePic, 'tt.png', te, m)
     
}
handler.help = ['igstalk']
handler.tags = ['downloader']
handler.command = ['igstalk'] 

export default handler

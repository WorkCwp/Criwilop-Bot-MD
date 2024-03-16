let handler = async (m, {conn, usedPrefix}) => {

	let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]

    let username = conn.getName(who)
    if (!(who in global.db.data.users)) throw `🟨 El usuario no se encuentra en mi base de datos.`
    conn.reply(m.chat, `👛 *Billetera | ${username}*

🪙 *Oro* : ${user.credit}
`, m, { mentions: [who] })
}
handler.help = ['wallet']
handler.tags = ['economy']
handler.command = ['cartera', 'gold'] 

export default handler

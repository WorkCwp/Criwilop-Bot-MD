let handler = async (m, {conn, usedPrefix}) => {
	
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    let username = conn.getName(who)
    //let { wealth } = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `✳️ El usuario no se encuentra en mi base de datos.`

    var wealth = 'En bancarrota 😭'
     if (`${user.bank}`           <= 3000){
            wealth = 'En bancarrota 😭'
      } else if (`${user.bank}`   <= 6000){
            wealth = 'Pobre 😢'
        } else if (`${user.bank}` <= 100000){
            wealth = 'Promedio 💸'
        } else if (`${user.bank}` <= 1000000){
            wealth = 'Rico 💸💰'
        } else if (`${user.bank}` <= 10000000){
            wealth = 'Millonario 🤑'
        } else if (`${user.bank}` <= 1000000000){
            wealth = 'Multimillonario 🤑'
        } else if (`${user.bank}` <= 10000000000){
            wealth = 'multimillonario 🤑🤑'
        }    
    
    conn.reply(m.chat, `🏦 *Banco | ${username}*

*🪙 oro* : ${user.bank}

*Poder :* ${wealth}

`, m, { mentions: [who] })  //${user.chicken}
}
handler.help = ['bank']
handler.tags = ['economy']
handler.command = ['bank', 'vault'] 

export default handler
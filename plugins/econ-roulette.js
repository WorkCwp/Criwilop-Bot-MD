

let handler = async (m, { conn, args, text, usedPrefix , command }) => {




    let amount = parseInt(args[0])
    let color = args[1]?.toLowerCase()
    if (args.length < 2 )  throw `✳️ Command Usage: ${usedPrefix + command} <amount> <color>\n\n Example: ${usedPrefix + command} 500 red`
    let colores = ['red', 'black']
    let colour = colores[Math.floor(Math.random() * colores.length)];
    let user = global.db.data.users[m.sender]
    if (isNaN(amount) || amount < 500) throw `✳️ La apuesta mínima es 500 de oro.`
    if (!colores.includes(color)) throw '✳️ Debes especificar un color válido: rojo o negro.'
    if (user.credit < amount) throw '✳️ Usted no tiene suficiente oro!'
    if (amount > 100000) throw `🟥 *No puedes apostar oro más de 100000.*`
   let result = ''
    if (colour == color) {
        result = `${colour == 'red' ? 'La pelota aterrizó en 🔴' : 'La pelota aterrizó en ⚫'} \n\n Ganaste ${amount * 2} oro`
        user.credit += amount * 2
    } else {
        result = `${colour == 'red' ? 'La pelota aterrizó en 🔴' : 'La pelota aterrizó en ⚫'} \n\n Perdiste ${amount} oro`
        user.credit -= amount
    }
    m.reply(result)
}
handler.help = ['roulette <amount> <color(red/black)>']
handler.tags = ['economy']
handler.command = ['roulette', 'rt']

handler.group = true

export default handler
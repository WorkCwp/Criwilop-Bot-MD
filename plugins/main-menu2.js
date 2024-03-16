import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Asia/Kolkata').format('HH')
let wib = moment.tz('Asia/Kolkata').format('HH:mm:ss')

let handler = async (m, { conn, usedPrefix, command}) => {

    let d = new Date(new Date + 3600000)
    let locale = 'es'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ El usuario no se encuentra en mi base de datos`
let pp = './Assets/Criwilogo.jpg'

let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let totaluser = Object.values(global.db.data.users).length 
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let greeting = ucapan()
let quote = quotes[Math.floor(Math.random() * quotes.length)];

let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
🚀 *_¡Prepárate ${name}, ${greeting}! ¡Nos vamos de aventura!_* 🚀

📜 *_Cita del día: ${quote}_* 📜

┏━💼 _Información del Usuario:_ 💼━┓
┃ 👾  *Usuario:* ${taguser} 
┃ 🎩  *Nombre:* ${name} 
┃ 💎  *Diamantes:* ${diamond} 
┃ 🏆  *Rango:* ${role}
┃ 🎮  *XP:* ${exp} 
┗━━━━━━━━━━━┛

┏━━⏰ _¡La Salsa de Hoy!_ ⏰━┓
┃ 📆  *Fecha Actual:* ${date} 
┃ ⏲️  *Hora Actual:* ${wib} 
┗━━━━━━━━━━━━━┛

┏━━🤖 _ESTADO DEL BOT:_🤖━━┓
┃ 🤡  *Nombre del Bot:* ${botname} 
┃ 💻  *Plataforma:* Linux 
┃ 📣  *Prefijo:* ${usedPrefix} 
┃ 🕓  *Tiempo de Actividad:* ${uptime}
┃ 💌  *Base de Datos:* ${rtotalreg} de ${totaluser} 
┃ 📚  *Usuarios Totales:* ${totaluser} 
┗━━━━━━━━━━━━━┛

💡 *_Recuerda, cuando tengas dudas, usa ${usedPrefix}list o ${usedPrefix}help2. ¡Es como mi libro de hechizos mágicos!_* 💡`



conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, null, rpyt)


    m.react(done)

}
handler.help = ['main']
handler.tags = ['group']
handler.command = ['menu2', 'help2'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
    
    function ucapan() {
      const time = moment.tz('Asia/Kolkata').format('HH')
      let res = "feliz temprano en el día☀️"
      if (time >= 4) {
        res = "¡Buenos Días! 🌄"
      }
      if (time >= 10) {
        res = "¡Buenas Tardes! ☀️"
      }
      if (time >= 15) {
        res = "¡Buenas Tardes! 🌇"
      }
      if (time >= 18) {
        res = "¡Buenas Noches! 🌙"
      }
      return res
    }
    const quotes = [
      "No soy perezoso, solo estoy en modo de ahorro de energía.",
      "La vida es corta, sonríe mientras aún tienes dientes.",
      "Puedo ser una mala influencia, ¡pero me divierto mucho!",
      "Estoy en una dieta de whisky. Ya perdí tres días.",
      "¿Por qué algunas parejas no van al gimnasio? Porque algunas relaciones no funcionan.",
      "Le dije a mi esposa que debería abrazar sus errores... Me dio un abrazo.",
      "Soy genial en la multitarea. Puedo perder el tiempo, ser improductivo y procrastinar ¡todo al mismo tiempo!",
      "Sabes que estás envejeciendo cuando te agachas para atarte los cordones y te preguntas qué más podrías hacer mientras estás ahí abajo.",
      "Soy tan bueno durmiendo que puedo hacerlo con los ojos cerrados.",
      "Si piensas que a nadie le importa si estás vivo, intenta dejar de pagar un par de facturas.",
      "Solía pensar que era indeciso, pero ahora ya no estoy tan seguro.",
      "Si no puedes convencerlos, confúndelos.",
      "Le dije a mi esposa que estaba dibujando sus cejas demasiado altas. Parecía sorprendida.",
      "No soy torpe, solo estoy en una misión para probar la gravedad.",
      "Le dije a mi esposa que debería hacer más flexiones. ¡Dijo: 'Podría hacer cien!' Así que conté hasta diez y me detuve.",
      "La vida es como una caja de chocolates; no dura mucho si tienes hambre.",
      "No estoy diciendo que soy Mujer Maravilla, solo digo que nadie me ha visto a mí y a Mujer Maravilla en la misma habitación.",
      "¿Por qué le llaman sueño de belleza cuando despiertas pareciendo un troll?",
      "No siempre pierdo mi teléfono, pero cuando lo hago, siempre está en silencio.",
      "Mi cama es un lugar mágico donde de repente recuerdo todo lo que se suponía que debía hacer.",
      "Amo el sonido que haces cuando te callas.",
      "No estoy discutiendo, solo estoy explicando por qué tengo razón.",
      "No soy un completo idiota, algunas partes están faltando.",
      "Cuando la vida te da limones, escupe a alguien en el ojo.",
      "No necesito controlar mi ira. Solo necesitas dejar de hacerme enojar.",
      "No estoy diciendo que soy Batman. Solo digo que nadie me ha visto a mí y a Batman en la misma habitación.",
      "No estoy diciendo que soy Superman. Solo digo que nadie me ha visto a mí y a Superman en la misma habitación.",
      "No estoy diciendo que soy Spider-Man. Solo digo que nadie me ha visto a mí y a Spider-Man en la misma habitación.",
      "No estoy diciendo que soy un superhéroe. Solo digo que nadie me ha visto a mí y a un superhéroe en la misma habitación.",
      "El pájaro madrugador puede tener el gusano porque los gusanos son asquerosos y las mañanas son estúpidas.",
      "Si la vida te da limones, haz limonada. ¡Luego encuentra a alguien cuya vida le haya dado vodka y haz una fiesta!",
      "El camino hacia el éxito siempre está en construcción.",
      "Soy tan inteligente que a veces no entiendo ni una sola palabra de lo que estoy diciendo.",
      "Algunas personas solo necesitan un aplauso. En la cara. Con una silla.",
      "No estoy diciendo que soy perfecto, pero estoy bastante cerca.",
      "Un día sin sol es como, ya sabes, noche.",
      "La mejor manera de predecir el futuro es crearlo.",
      "Si no puedes ser un buen ejemplo, entonces solo tendrás que ser una advertencia horrible.",
      "No sé por qué sigo presionando el botón de escape. Solo estoy tratando de salir de aquí.",
      "No soy perezoso. Estoy en modo de ahorro de energía.",
      "No necesito un estilista de cabello, mi almohada me da un nuevo peinado todas las mañanas.",
      "No tengo una mala caligrafía, tengo mi propia fuente.",
      "No soy torpe. Es solo que el suelo me odia, la mesa y las sillas son matones, y las paredes se interponen en mi camino.",
      "No estoy diciendo que soy Batman. Solo digo que nadie me ha visto a mí y a Batman en la misma habitación.",
      "No estoy diciendo que soy Mujer Maravilla. Solo digo que nadie me ha visto a mí y a Mujer Maravilla en la misma habitación.",
      "No estoy diciendo que soy Superman. Solo digo que nadie me ha visto a mí y a Superman en la misma habitación.",
      "No estoy diciendo que soy Spider-Man. Solo digo que nadie me ha visto a mí y a Spider-Man en la misma habitación.",
      "No estoy diciendo que soy un superhéroe. Solo digo que nadie me ha visto a mí y a un superhéroe en la misma habitación.",
      "El tiempo nos enseña muchas cosas, especialmente cuando no tenemos tiempo.",
      "La vida es como un libro, cada día cambia una página nueva. A veces reímos, a veces lloramos, pero cada historia es incompleta."
];

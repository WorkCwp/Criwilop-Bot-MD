import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {

   /* const M = ['imagen1', 'imagen2', 'imagen3', 'imagen4', 'imagen5'];
  const indiceRandom = Math.floor(Math.random() * M.length);
  */
      m.react('🍰')
   const pp = imagen3;
    // let vn = './media/menu.mp3'
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `
*┏┄┄⟞ *♰⍣𝑪𝒓𝒊𝒘𝒊𝒍𝒐𝒑𝑩𝒐𝒕-𝑴𝑫࿐⛦* ⟝┄┄┓*
   
▸*𝗛ola, ${taguser}*
   
▸*Owner:* ♰⍣𝑪𝒓𝒊𝒘𝒊𝒍𝒐𝒑࿐⛦
  *Numero:* wa.me/573244488043

▸*Colab1:* *† 𝑀𝑐𝐹𝑙𝑦 †*
  *Numero:* wa.me/5492216804640

▸*colab2:* *༒𝙑𝙄𝘾𝙏𝙊𝙍_𝘽𝙄𝙕𝙀𝙍𝘼𝙋༒*
  *Numero:* wa.me/59897758548

▸*PayPal:* https://www.paypal.me/3244488043
*┄┄⟞ *♰⍣𝑪𝒓𝒊𝒘𝒊𝒍𝒐𝒑𝑩𝒐𝒕-𝑴𝑫࿐⛦* ⟝┄┄*
${readMore}
*╭───── • ◆ • ─────┅┅┄┄*
  *< 𝕀ℕ𝔽𝕆 𝔻𝔼𝕃 𝕌𝕊𝕌𝔸ℝ𝕀𝕆 />*
   
 *🎮 Nivel:* ${level}
 *🧰 Experiencia:* ${exp}
*╰───── • ◆ • ─────┅┅┄┄*

*╭───── • ◆ • ─────┅┅┄┄*
 *< 𝔹𝕆𝕋 𝕆𝔽ℂ 𝕆 𝕊𝕌𝔹 𝔹𝕆𝕋 />*
   
 ${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || '*Este es el Bot oficial*'}
*╰───── • ◆ • ─────┅┅┄┄*

*╭───── • ◆ • ─────┅┅┄┄*
 *< 𝕊𝕆𝕃𝕌ℂ𝕀𝕆ℕ 𝔸 𝔼ℝℝ𝕆ℝ𝔼𝕊 />*
   
➤ Mensajes en espera
▸⭐ _${usedPrefix}fixmsgespera_
➤ Mensajes en espera (owner)
▸⭐ _${usedPrefix}dsowner_
*╰───── • ◆ • ─────┅┅┄┄*

*╭───── • ◆ • ─────┅┅┄┄*
    *< 𝕀ℕ𝔽𝕆 𝔹𝕆𝕋 />*
   
▸📣 _${usedPrefix}grupos_
▸📣 _${usedPrefix}estado_
▸📣 _${usedPrefix}infobot_
▸📣 _${usedPrefix}speedtest_
▸📣 _${usedPrefix}donar_
▸📣 _${usedPrefix}owner_
▸📣 _${usedPrefix}script_
▸📣 _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
*╰───── • ◆ • ─────┅┅┄┄*

*╭───── • ◆ • ─────┅┅┄┄*
 *< 𝕌ℕ𝔼 𝕌ℕ 𝔹𝕆𝕋 𝔸 𝕋𝕌 𝔾ℝ𝕌ℙ𝕆 />*
  ◆━━━━━━━▣✦▣━━━━━━◆
▸👾 _${usedPrefix}join *<enlace / link / url>*_
*╰───── • ◆ • ─────┅┅┄┄*

*╭───── • ◆ • ─────┅┅┄┄*
 *< 𝕊𝔼ℝ𝔹𝕆𝕋 - 𝕁𝔸𝔻𝕀𝔹𝕆𝕋 />*
   
▸🤖 _${usedPrefix}serbot --code_
▸🤖 _${usedPrefix}serbot_
▸🤖 _${usedPrefix}deletebot_
*╰───── • ◆ • ─────┅┅┄┄*

*╭───── • ◆ • ─────┅┅┄┄*
             *< 𝕁𝕌𝔼𝔾𝕆𝕊 />*
             
▸🎮 _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
▸🎮 _${usedPrefix}fake *<texto1> <@tag> <texto2>*_
▸🎮 _${usedPrefix}ppt *<papel / tijera /piedra>*_
▸🎮 _${usedPrefix}prostituto *<nombre / @tag>*_
▸🎮 _${usedPrefix}prostituta *<nombre / @tag>*_
▸🎮 _${usedPrefix}gay2 *<nombre / @tag>*_
▸🎮 _${usedPrefix}lesbiana *<nombre / @tag>*_
▸🎮 _${usedPrefix}pajero *<nombre / @tag>*_
▸🎮 _${usedPrefix}pajera *<nombre / @tag>*_
▸🎮 _${usedPrefix}puto *<nombre / @tag>*_
▸🎮 _${usedPrefix}puta *<nombre / @tag>*_
▸🎮 _${usedPrefix}manco *<nombre / @tag>*_
▸🎮 _${usedPrefix}manca *<nombre / @tag>*_
▸🎮 _${usedPrefix}rata *<nombre / @tag>*_
▸🎮 _${usedPrefix}love *<nombre / @tag>*_
▸🎮 _${usedPrefix}doxear *<nombre / @tag>*_
▸🎮 _${usedPrefix}pregunta *<texto>*_
▸🎮 _${usedPrefix}suitpvp *<@tag>*_
▸🎮 _${usedPrefix}slot *<apuesta>*_
▸🎮 _${usedPrefix}ttt *<nombre sala>*_
▸🎮 _${usedPrefix}delttt_
▸🎮 _${usedPrefix}acertijo_
▸🎮 _${usedPrefix}simi *<texto>*_
▸🎮 _${usedPrefix}top *<texto>*_
▸🎮 _${usedPrefix}topgays_
▸🎮 _${usedPrefix}topotakus_
▸🎮 _${usedPrefix}formarpareja_
▸🎮 _${usedPrefix}verdad_
▸🎮 _${usedPrefix}reto_
▸🎮 _${usedPrefix}cancion_
▸🎮 _${usedPrefix}pista_
▸🎮 _${usedPrefix}akinator_
▸🎮 _${usedPrefix}wordfind_
*╰───── • ◆ • ─────┅┅┄┄*

*╭───── • ◆ • ─────┅┅┄┄**
 *< ℝ𝔼ℙ𝕆ℝ𝕋𝔸ℝ 𝔼ℝℝ𝕆ℝ𝔼𝕊 />*
   
▸🔰 _${usedPrefix}reporte *<texto>*_
*╰───── • ◆ • ─────┅┅┄┄*

*╭───── • ◆ • ─────┅┅┄┄*
 *< 𝔻𝔼𝕊ℂ𝔸ℝ𝔾𝔸𝕊 />*
   
▸🔰 _${usedPrefix}instagram *<enlace / link / url>*_
▸🔰 _${usedPrefix}mediafire *<enlace / link / url>*_
▸🔰 _${usedPrefix}gitclone *<enlace / link / url>*_
▸🔰 _${usedPrefix}gdrive *<enlace / link / url>*_
▸🔰 _${usedPrefix}tiktok *<enlace / link / url>*_
▸🔰 _${usedPrefix}tiktokimg *<enlace / link / url>*_
▸🔰 _${usedPrefix}xnxxdl *<enlace / link / url>*_
▸🔰 _${usedPrefix}xvideosdl *<enlace / link / url>*_
▸🔰 _${usedPrefix}twitter *<enlace / link / url>*_
▸🔰 _${usedPrefix}fb *<enlace / link / url>*_
▸🔰 _${usedPrefix}ytshort *<enlace / link / url>*_
▸🔰 _${usedPrefix}ytmp3 *<enlace / link / url>*_
▸🔰 _${usedPrefix}ytmp4 *<enlace / link / url>*_
▸🔰 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
▸🔰 _${usedPrefix}ytmp4doc *<enlace / link / url>*_
▸🔰 _${usedPrefix}videodoc *<enlace / link / url>*_
▸🔰 _${usedPrefix}dapk2 *<enlace / link / url>*_
▸🔰 _${usedPrefix}stickerpack *<enlace / link / url>*_
▸🔰 _${usedPrefix}play *<texto>*_
▸🔰 _${usedPrefix}play2 *<texto>*_
▸🔰 _${usedPrefix}play.1 *<texto>*_
▸🔰 _${usedPrefix}play.2 *<texto>*_
▸🔰 _${usedPrefix}playdoc *<texto>*_
▸🔰 _${usedPrefix}playdoc2 *<texto>*_
▸🔰 _${usedPrefix}playlist *<texto>*_
▸🔰 _${usedPrefix}spotify *<texto>*_
▸🔰 _${usedPrefix}ringtone *<texto>*_
▸🔰 _${usedPrefix}soundcloud *<texto>*_
▸🔰 _${usedPrefix}imagen *<texto>*_
▸🔰 _${usedPrefix}pinterest *<texto>*_
▸🔰 _${usedPrefix}wallpaper *<texto>*_
▸🔰 _${usedPrefix}pptiktok *<nombre de usuario>*_
▸🔰 _${usedPrefix}igstalk *<nombre de usuario>*_
▸🔰 _${usedPrefix}igstory *<nombre de usuario>*_
▸🔰 _${usedPrefix}tiktokstalk *<username>*_
*╰───── • ◆ • ─────┅┅┄┄*

*╭───── • ◆ • ─────┅┅┄┄*
 *< 𝔹𝕌𝕊ℂ𝔸𝔻𝕆ℝ𝔼𝕊 />*
 
▸🔍 _${usedPrefix}githubsearch *<texto>*_
▸🔍 _${usedPrefix}pelisplus *<texto>*_
▸🔍 _${usedPrefix}modapk *<texto>*_
▸🔍 _${usedPrefix}stickersearch *<texto>*_
▸🔍 _${usedPrefix}stickersearch2 *<texto>*_
▸🔍 _${usedPrefix}animeinfo *<texto>*_
▸🔍 _${usedPrefix}google *<texto>*_
▸🔍 _${usedPrefix}letra *<texto>*_
▸🔍 _${usedPrefix}wikipedia *<texto>*_
▸🔍 _${usedPrefix}ytsearch *<texto>*_
▸🔍 _${usedPrefix}playstore *<texto>*_
*╰───── • ◆ • ─────┅┅┄┄*

*╭───── • ◆ • ─────┅┅┄┄*
 *< 𝔾ℝ𝕌ℙ𝕆𝕊 />* 
   
▸🍁 _${usedPrefix}add *<numero>*_
▸🍁 _${usedPrefix}kick *<@tag>*_
▸🍁 _${usedPrefix}kick2 *<@tag>*_
▸🍁 _${usedPrefix}listanum *<texto>*_
▸🍁 _${usedPrefix}kicknum *<texto>*_
▸🍁 _${usedPrefix}grupo *<abrir / cerrar>*_
▸🍁 _${usedPrefix}grouptime *<opcion> <tiempo>*_
▸🍁 _${usedPrefix}promote *<@tag>*_
▸🍁 _${usedPrefix}demote *<@tag>*_
▸🍁 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
▸🍁 _${usedPrefix}demote *<@tag>*_
▸🍁 _${usedPrefix}infogroup_
▸🍁 _${usedPrefix}resetlink_
▸🍁 _${usedPrefix}link_
▸🍁 _${usedPrefix}setname *<texto>*_
▸🍁 _${usedPrefix}setdesc *<texto>*_
▸🍁 _${usedPrefix}invocar *<texto>*_
▸🍁 _${usedPrefix}setwelcome *<texto>*_
▸🍁 _${usedPrefix}setbye *<texto>*_
▸🍁 _${usedPrefix}hidetag *<texto>*_
▸🍁 _${usedPrefix}hidetag *<audio>*_
▸🍁 _${usedPrefix}hidetag *<video>*_
▸🍁 _${usedPrefix}hidetag *<imagen>*_
▸🍁 _${usedPrefix}warn *<@tag>*_
▸🍁 _${usedPrefix}unwarn *<@tag>*_
▸🍁 _${usedPrefix}listwarn_
▸🍁 _${usedPrefix}fantasmas_
▸🍁 _${usedPrefix}destraba_
▸🍁 _${usedPrefix}setpp *<imagen>*_
*╰───── • ◆ • ─────┅┅┄┄*

*╭───── • ◆ • ─────┅┅┄┄*
 *< ℂ𝕆ℕ𝕍𝔼ℝ𝕋𝕀𝔻𝕆ℝ𝔼𝕊 />*
   
▸🧧 _${usedPrefix}toanime *<imagen>*_
▸🧧 _${usedPrefix}togifaud *<video>*_
▸🧧 _${usedPrefix}toimg *<sticker>*_
▸🧧 _${usedPrefix}tomp3 *<video>*_
▸🧧 _${usedPrefix}tomp3 *<nota de voz>*_
▸🧧 _${usedPrefix}toptt *<video / audio>*_
▸🧧 _${usedPrefix}tovideo *<sticker>*_
▸🧧 _${usedPrefix}tourl *<video / imagen / audio>*_
▸🧧 _${usedPrefix}tts *<idioma> <texto>*_
▸🧧 _${usedPrefix}tts *<efecto> <texto>*_
*╰───── • ◆ • ─────┅┅┄┄*

*╭───── • ◆ • ─────┅┅┄┄*
 *< 𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝕐 𝕃𝕆𝔾𝕆𝕊 />*
   
▸🖍️ _${usedPrefix}logos *<efecto> <texto>*_
*╰───── • ◆ • ─────┅┅┄┄*

*╭───── • ◆ • ─────┅┅┄┄*
 *< 𝔽ℝ𝔸𝕊𝔼𝕊 𝕐 𝕋𝔼𝕏𝕋𝕆𝕊 />*
   
▸🥀 _${usedPrefix}piropo_
▸🥀 _${usedPrefix}consejo_
▸🥀 _${usedPrefix}fraseromantica_
▸🥀 _${usedPrefix}historiaromantica_
*╰───── • ◆ • ─────┅┅┄┄*

*╭───── • ◆ • ─────┅┅┄┄*
 *< ℝ𝔸ℕ𝔻-𝔸ℕ𝕀𝕄𝔼𝕊 />*
   
▸🧿 _${usedPrefix}menuanimes_
*╰───── • ◆ • ─────┅┅┄┄*

*╭───── • ◆ • ─────┅┅┄┄*
 *< ℝ𝔸ℕ𝔻𝕆𝕄 />*
   
▸👾 _${usedPrefix}kpop *<blackpink / exo / bts>*_
▸👾 _${usedPrefix}cristianoronaldo_
▸👾 _${usedPrefix}messi_
▸👾 _${usedPrefix}cat_
▸👾 _${usedPrefix}dog_
▸👾 _${usedPrefix}meme_
▸👾 _${usedPrefix}itzy_
▸👾 _${usedPrefix}blackpink_
▸👾 _${usedPrefix}navidad_
▸👾 _${usedPrefix}wpmontaña_
▸👾 _${usedPrefix}pubg_
▸👾 _${usedPrefix}wpgaming_
▸👾 _${usedPrefix}wpaesthetic_
▸👾 _${usedPrefix}wpaesthetic2_
▸👾 _${usedPrefix}wprandom_
▸👾 _${usedPrefix}wallhp_
▸👾 _${usedPrefix}wpvehiculo_
▸👾 _${usedPrefix}wpmoto_
▸👾 _${usedPrefix}coffee_
▸👾 _${usedPrefix}pentol_
▸👾 _${usedPrefix}caricatura_
▸👾 _${usedPrefix}ciberespacio_
▸👾 _${usedPrefix}technology_
▸👾 _${usedPrefix}doraemon_
▸👾 _${usedPrefix}hacker_
▸👾 _${usedPrefix}planeta_
▸👾 _${usedPrefix}randomprofile_
*╰───── • ◆ • ─────┅┅┄┄*

*╭───── • ◆ • ────╮*
 *< 𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝔻𝔼 𝔸𝕌𝔻𝕀𝕆𝕊 />*
   
*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
▸🎤 _${usedPrefix}bass_
▸🎤 _${usedPrefix}blown_
▸🎤 _${usedPrefix}deep_
▸🎤 _${usedPrefix}earrape_
▸🎤 _${usedPrefix}fast_
▸🎤 _${usedPrefix}fat_
▸🎤 _${usedPrefix}nightcore_
▸🎤 _${usedPrefix}reverse_
▸🎤 _${usedPrefix}robot_
▸🎤 _${usedPrefix}slow_
▸🎤 _${usedPrefix}smooth_
▸🎤 _${usedPrefix}tupai_
*╰───── • ◆ • ─────┅┅┄┄*

*╭───── • ◆ • ─────┅┅┄┄*
 *< ℂℍ𝔸𝕋 𝔸ℕ𝕆ℕ𝕀𝕄𝕆 />*
   
▸📳 _${usedPrefix}start_
▸📳 _${usedPrefix}next_
▸📳 _${usedPrefix}leave_
*╰───── • ◆ • ─────┅┅┄┄*

*╭───── • ◆ • ─────┅┅┄┄*
 *< 𝔸𝕌𝔻𝕀𝕆𝕊 />*   
   
▸🔊 _${usedPrefix}menuaudios_
*╰───── • ◆ • ─────┅┅┄┄*

*╭───── • ◆ • ─────┅┅┄┄*
 *< ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊 />*
   
▸🛠️ _${usedPrefix}inspect *<link wa_gc>*_
▸🛠️ _${usedPrefix}chatgpt *<texto>*_
▸🛠️ _${usedPrefix}delchatgpt
▸🛠️ _${usedPrefix}gptvoz *<texto>*_
▸🛠️ _${usedPrefix}dall-e *<texto>*_
▸🛠️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
▸🛠️ _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
▸🛠️ _${usedPrefix}readviewonce *<imagen / video>*_
▸🛠️ _${usedPrefix}clima *<país> <ciudad>*_
▸🛠️ _${usedPrefix}encuesta *<texto1|texto2...>*_
▸🛠️ _${usedPrefix}afk *<motivo>*_
▸🛠️ _${usedPrefix}ocr *<responde a imagen>*_
▸🛠️ _${usedPrefix}hd *<responde a imagen>*_
▸🛠️ _${usedPrefix}acortar *<enlace / link / url>*_
▸🛠️ _${usedPrefix}calc *<operacion math>*_
▸🛠️ _${usedPrefix}del *<mensaje>*_
▸🛠️ _${usedPrefix}whatmusic *<audio>*_
▸🛠️ _${usedPrefix}readqr *<imagen (QR)>*_
▸🛠️ _${usedPrefix}qrcode *<texto>*_
▸🛠️ _${usedPrefix}readmore *<texto1| texto2>*_
▸🛠️ _${usedPrefix}styletext *<texto>*_
▸🛠️ _${usedPrefix}traducir *<texto>*_
▸🛠️ _${usedPrefix}nowa *<numero>*_
▸🛠️ _${usedPrefix}covid *<pais>*_
▸🛠️ _${usedPrefix}horario_
▸🛠️ _${usedPrefix}dropmail_
*╰───── • ◆ • ─────┅┅┄┄*

*╭───── • ◆ • ─────┅┅┄┄*
 *< ℝℙ𝔾 - 𝕃𝕀𝕄𝕀𝕋𝔼𝕊 - 𝔼ℂ𝕆ℕ𝕆𝕄𝕀𝔸 />*
   
▸💵 _${usedPrefix}adventure_
▸💵 _${usedPrefix}cazar_
▸💵 _${usedPrefix}cofre_
▸💵 _${usedPrefix}balance_
▸💵 _${usedPrefix}claim_
▸💵 _${usedPrefix}heal_
▸💵 _${usedPrefix}lb_
▸💵 _${usedPrefix}levelup_
▸💵 _${usedPrefix}myns_
▸💵 _${usedPrefix}perfil_
▸💵 _${usedPrefix}work_
▸💵 _${usedPrefix}minar_
▸💵 _${usedPrefix}minar2_
▸💵 _${usedPrefix}buy_
▸💵 _${usedPrefix}buyall_
▸💵 _${usedPrefix}verificar_
▸💵 _${usedPrefix}robar *<cantidad> <@tag>*_
▸💵 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
▸💵 _${usedPrefix}unreg *<numero de serie>*_
*╰───── • ◆ • ─────┅┅┄┄*

*╭───── • ◆ • ─────┅┅┄┄*
 *< 𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊 />*
   
▸🃏 _${usedPrefix}sticker *<responder a imagen o video>*_
▸🃏 _${usedPrefix}sticker *<enlace / link / url>*_
▸🃏 _${usedPrefix}sticker2 *<responder a imagen o video>*_
▸🃏 _${usedPrefix}sticker2 *<enlace / link / url>*_
▸🃏 _${usedPrefix}s *<responder a imagen o video>*_
▸🃏 _${usedPrefix}s *<enlace / link / url>*_
▸🃏 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
▸🃏 _${usedPrefix}scircle *<imagen>*_
▸🃏 _${usedPrefix}sremovebg *<imagen>*_
▸🃏 _${usedPrefix}semoji *<tipo> <emoji>*_
▸🃏 _${usedPrefix}qc *<texto>*_
▸🃏 _${usedPrefix}attp *<texto>*_
▸🃏 _${usedPrefix}attp2 *<texto>*_
▸🃏 _${usedPrefix}attp3 *<texto>*_
▸🃏 _${usedPrefix}ttp *<texto>*_
▸🃏 _${usedPrefix}ttp2 *<texto>*_
▸🃏 _${usedPrefix}ttp3 *<texto>*_
▸🃏 _${usedPrefix}ttp4 *<texto>*_
▸🃏 _${usedPrefix}ttp5 *<texto>*_
▸🃏 _${usedPrefix}pat *<@tag>*_
▸🃏 _${usedPrefix}slap *<@tag>*_
▸🃏 _${usedPrefix}kiss *<@tag>*_
▸🃏 _${usedPrefix}dado_
▸🃏 _${usedPrefix}wm *<packname> <author>*_
▸🃏 _${usedPrefix}stickermarker *<efecto> <imagen>*_
▸🃏 _${usedPrefix}stickerfilter *<efecto> <imagen>*_
*╰───── • ◆ • ─────┅┅┄┄*

*╭───── • ◆ • ─────┅┅┄┄*
 *< 𝕆𝕎ℕ𝔼ℝ 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝔻𝕆ℝ𝔼𝕊 />*
   
▸👑 > *<funcion>*
▸👑 => *<funcion>*
▸👑 $ *<funcion>*
▸👑 _${usedPrefix}setprefix *<prefijo>*_
▸👑 _${usedPrefix}resetprefix_
▸👑 _${usedPrefix}autoadmin_
▸👑 _${usedPrefix}grouplist_
▸👑 _${usedPrefix}chetar_
▸👑 _${usedPrefix}leavegc_
▸👑 _${usedPrefix}cajafuerte_
▸👑 _${usedPrefix}blocklist_
▸👑 _${usedPrefix}addowner *<@tag / numero>*_
▸👑 _${usedPrefix}delowner *<@tag / numero>*_
▸👑 _${usedPrefix}block *<@tag / numero>*_
▸👑 _${usedPrefix}unblock *<@tag / numero>*_
▸👑 _${usedPrefix}enable *restrict*_
▸👑 _${usedPrefix}disable *restrict*_
▸👑 _${usedPrefix}enable *autoread*_
▸👑 _${usedPrefix}disable *autoread*_
▸👑 _${usedPrefix}enable *public*_
▸👑 _${usedPrefix}disable *public*_
▸👑 _${usedPrefix}enable *pconly*_
▸👑 _${usedPrefix}disable *pconly*_
▸👑 _${usedPrefix}enable *gconly*_
▸👑 _${usedPrefix}disable *gconly*_
▸👑 _${usedPrefix}enable *anticall*_
▸👑 _${usedPrefix}disable *anticall*_
▸👑 _${usedPrefix}enable *antiprivado*_
▸👑 _${usedPrefix}disable *antiprivado*_
▸👑 _${usedPrefix}enable *modejadibot*_
▸👑 _${usedPrefix}disable *modejadibot*_
▸👑 _${usedPrefix}enable *audios_bot*_
▸👑 _${usedPrefix}disable *audios_bot*_
▸👑 _${usedPrefix}enable *antispam*_
▸👑 _${usedPrefix}disable *antispam*_
▸👑 _${usedPrefix}msg *<texto>*_
▸👑 _${usedPrefix}banchat_
▸👑 _${usedPrefix}unbanchat_
▸👑 _${usedPrefix}resetuser *<@tag>*_
▸👑 _${usedPrefix}banuser *<@tag>*_
▸👑 _${usedPrefix}unbanuser *<@tag>*_
▸👑 _${usedPrefix}dardiamantes *<@tag> <cantidad>*_
▸👑 _${usedPrefix}añadirxp *<@tag> <cantidad>*_
▸👑 _${usedPrefix}banuser *<@tag>*_
▸👑 _${usedPrefix}bc *<texto>*_
▸👑 _${usedPrefix}bcchats *<texto>*_
▸👑 _${usedPrefix}bcgc *<texto>*_
▸👑 _${usedPrefix}bcgc2 *<audio>*_
▸👑 _${usedPrefix}bcgc2 *<video>*_
▸👑 _${usedPrefix}bcgc2 *<imagen>*_
▸👑 _${usedPrefix}bcbot *<texto>*_
▸👑 _${usedPrefix}cleartpm_
▸👑 _${usedPrefix}restart_
▸👑 _${usedPrefix}update_
▸👑 _${usedPrefix}banlist_
▸👑 _${usedPrefix}addprem *<@tag> <tiempo>*_
▸👑 _${usedPrefix}addprem2 *<@tag> <tiempo>*_
▸👑 _${usedPrefix}addprem3 *<@tag> <tiempo>*_
▸👑 _${usedPrefix}addprem4 *<@tag> <tiempo>*_
▸👑 _${usedPrefix}delprem *<@tag>*_
▸👑 _${usedPrefix}listcmd_
▸👑 _${usedPrefix}setppbot *<responder a imagen>*_
▸👑 _${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
▸👑 _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
▸👑 _${usedPrefix}saveimage
▸👑 _${usedPrefix}viewimage
*╰───── • ◆ • ─────┅┅┄┄*`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp , caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp , caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*⚠️ 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
      }

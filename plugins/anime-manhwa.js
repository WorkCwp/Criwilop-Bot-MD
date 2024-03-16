import fetch from 'node-fetch';


let handler = async (m, { conn, text }) => {
    if (!text) throw 'Proporcione el nombre manhwa para buscar.';
    let query = encodeURIComponent(text)

    const url = `https://asura.guruapi.tech/asura/search?name=${query}`;

    const response = await fetch(url);
    const json = await response.json();

    if (!response.ok) {
        throw `Ocurrió un error: ${json.error}`;
    }
   
    let link = json.data[0].link;

    const url2 = `https://asura.guruapi.tech/asura/details?url=${link}`;

    let response2 = await fetch(url2);
    let json2 = await response2.json();

    if (!response2.ok) {
        throw `Ocurrió un error: ${json2.error}`;
    }
    let lastEpisodeUrl = 'N/A';

    if (json2.data.urls && json2.data.urls.length > 0) {
        lastEpisodeUrl = json2.data.urls[json2.data.urls.length - 1];
    }

    let message = `Name: ${json2.data.title}\n\nDescripción: ${json2.data.description}\n\nGenero: ${json2.data.genre}\n\nStatus: ${json2.data.status}\n\n ultimo episodio: ${lastEpisodeUrl}\n`
    
    let thumb = json.data[0].image;

    await conn.sendMessage(m.chat, {
        image: { url: thumb },
        caption: message
    })
}

handler.help = ['manhwa'];
handler.tags = ['anime'];
handler.command = /^manhwa/i;

export default handler;

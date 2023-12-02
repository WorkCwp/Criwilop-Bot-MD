// Importar las librerías necesarias
const { Client } = require('@adiwajshing/baileys');
const Scraper = require('@bochilteam/scraper');
const axios = require('axios');

// Crear una instancia del cliente de WhatsApp
const client = new Client();

// Escuchar eventos de mensajes entrantes
client.on('message', async (message) => {
  try {
    // Verificar si el mensaje es un comando para descargar música o video
    if (message.body.startsWith('/descargar')) {
      const text = message.body.split(' ')[1]; // Obtener el texto después del comando

      // Construir la URL de la API de descarga de YouTube
      const apiUrl = `https://api-brunosobrino.zipponodes.xyz/api/ytplay?text=${text}`;

      // Realizar la solicitud a la API
      const response = await axios.get(apiUrl);

      // Verificar si la solicitud fue exitosa
      if (response.status === 200) {
        const { data } = response;

        // Descargar el archivo de música o video
        const scraper = new Scraper();
        const downloadUrl = data.downloadUrl;
        const file = await scraper.download(downloadUrl);

        // Enviar el archivo descargado como respuesta al mensaje
        await client.sendMessage(message.from, file, { sendMediaAsSticker: true });
      } else {
        // Enviar un mensaje de error si la solicitud no fue exitosa
        await client.sendMessage(message.from, 'Ocurrió un error al descargar el archivo.');
      }
    }
  } catch (error) {
    console.error(error);
    await client.sendMessage(message.from, 'Ocurrió un error inesperado.');
  }
});

// Iniciar sesión en WhatsApp
client.connect();


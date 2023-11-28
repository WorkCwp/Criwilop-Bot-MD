// Importar las dependencias necesarias
const { Client } = require('@whiskeysockets/baileys');
const { Message } = require('@adiwajshing/keyed-db');
const { generateGame } = require('@green-code/music-track-data');

// Crear un cliente de WhatsApp
const client = new Client();

// Escuchar los mensajes entrantes
client.on('message', async (message) => {
  // Verificar si el mensaje es un comando para el juego
  if (message.body === '!jugar') {
    // Generar un juego interactivo
    const game = generateGame();

    // Enviar el juego al remitente
    await client.sendMessage(message.from, game);

    // Guardar el estado del juego en la base de datos
    const gameData = new Message(game);
    gameData.save();
  }
});

// Conectar el cliente de WhatsApp
client.connect();

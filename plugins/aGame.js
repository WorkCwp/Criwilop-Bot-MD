// Importar las dependencias necesarias
import { Client } from '@whiskeysockets/baileys';
import { Message } from '@adiwajshing/keyed-db';
import { generateGame } from '@green-code/music-track-data';

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

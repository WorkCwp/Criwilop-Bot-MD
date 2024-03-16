
// Importar módulos
import os from 'os';
import { spawn } from 'child_process';
import path from 'path';
import { createRequire } from 'module';
import fs from 'fs';
import { promises as fsPromises } from 'fs';
import chalk from 'chalk';
import cfonts from 'cfonts';

// Bandera para controlar si el bot está corriendo
let isRunning = false;

// Función para iniciar el bot
async function start(botFile) {
  // Evitar que se inicie más de una vez
  if (isRunning) return;
  isRunning = true;

  // Obtener directorio del archivo del bot
  const botDir = path.join(path.dirname(new URL(import.meta.url).pathname), botFile);

  // Comando para iniciar el bot
  const cmd = [botDir, ...process.argv.slice(2)];

  // Spawn del proceso del bot
  const botProcess = spawn(process.argv[0], cmd, { stdio: ['inherit', 'inherit', 'inherit', 'ipc'] });

  // Manejar eventos del proceso del bot
  botProcess.on('exit', (code) => {
    isRunning = false;
    start(botFile);
  });

  botProcess.on('message', (msg) => {
    console.log(chalk.green('✔️RECEIVED '), msg);
    botProcess.send('restart');
  });

  botProcess.on('error', (err) => {
    isRunning = false;
    console.log(chalk.red('❌Exited with code: '), err);
    fs.readdir(botDir, async (err, files) => {
      if (err) {
        console.log(chalk.red('Error reading plugins folder: '), err);
        return;
      }
      console.log(chalk.green('Using Baileys version '), require('@whiskeysockets/baileys').version);
    });
  });
}

// Iniciar el bot
start('Guru.js');

// Manejar errores no capturados y rechazos de promesas no manejadas
process.on('unhandledRejection', () => {
  console.error(chalk.red('Unhandled promise rejection. Bot will restart...'));
  start('Guru.js');
});

process.on('uncaughtException', (err) => {
  console.error(chalk.red('Error: '), err);
  console.error(chalk.red('Bot will restart...'));
  start('Guru.js');
});

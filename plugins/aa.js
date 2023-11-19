handler = async (m, {conn, text}) => {
  const message = text.toLowerCase();
  let response = '';

  if (message.includes('hola')) {
    response = 'buenas';
  } else if (message.includes('una duda')) {
    response = 'claro, puedes decírmelo';
  } else if (message.includes('quien eres?')) {
    response = 'Soy una IA';
  }

  if (response !== '') {
    m.reply(response);
  }
};

conn.on('chat-update', async (chatUpdate) => {
  if (chatUpdate.messages && chatUpdate.count) {
    const message = chatUpdate.messages.all()[0];
    const text = message.text.toLowerCase();

    if (text.includes('hola') || text.includes('una duda') || text.includes('quien eres?')) {
      handler({ m: message, conn, text });
    }
  }
});

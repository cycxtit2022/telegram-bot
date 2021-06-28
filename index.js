const TelegramBot = require ( 'node-telegram-bot-api' );

const token = '1610742860:AAEEBKdbeYvIiAwwDnj-uR2zAF9V1sOq0Jc' ; 
const bot = new TelegramBot(token, { 
  polling: true
 });



bot.onText( /\/start/ , function  onLoveText ( msg ) { 
  bot.sendMessage(msg.chat.id, '你好呀！' ); 
});


bot.onText( /\/echo (.+)/ , (msg, match) => {

  const chatId = msg.chat.id; const resp = match[ 1 ];   bot.sendMessage(chatId, resp); });
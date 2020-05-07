
const bot = require("./src/bot");
const botTweetar = require("./src/tweetar")

// TIMEOUTS
const timeoutMin = 1000 * 60; // minuto
const timeoutDia = 1000 * 60 * 60 * 24 // dia

botTweetar.cotacaoBitcoin(bot, 0);


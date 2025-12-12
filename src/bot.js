require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

const { showHome } = require("./sections/menu");
const { showNews } = require("./sections/news");
const { showSchedule } = require("./sections/schedule");
const { showArtists } = require("./sections/artists");
const { showTickets } = require("./sections/tickets");

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, msg => {
  bot.sendMessage(msg.chat.id, "🎪 Загрузка...", {
    reply_markup: { inline_keyboard: [] }
  }).then(sent => showHome(bot, sent));
});

bot.on("callback_query", query => {
  const msg = query.message;

  switch (query.data) {
    case "home": showHome(bot, msg); break;
    case "news": showNews(bot, msg); break;
    case "schedule": showSchedule(bot, msg); break;
    case "artists": showArtists(bot, msg); break;
    case "tickets": showTickets(bot, msg); break;
  }
});
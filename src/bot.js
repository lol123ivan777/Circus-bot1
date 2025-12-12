require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

const { showHome } = require("./sections/menu");
const { showNews } = require("./sections/news");
const { showSchedule } = require("./sections/schedule");
const { showArtists } = require("./sections/artists");
const { showTickets } = require("./sections/tickets");
const { showContacts } = require("./sections/contacts");

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
  console.error("❌ TELEGRAM_BOT_TOKEN не найден");
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

console.log("🎪 Circus bot is running");

/* ---------- /start ---------- */
bot.onText(/\/start/, msg => {
  bot.sendMessage(msg.chat.id, "🎪 Загрузка...", {
    reply_markup: { inline_keyboard: [] }
  }).then(sent => {
    showHome(bot, sent);
  });
});

/* ---------- CALLBACKS ---------- */
bot.on("callback_query", query => {
  const msg = query.message;
  const data = query.data;

  // Главная
  if (data === "home") return showHome(bot, msg);

  // Новости: news_0, news_1 ...
  if (data.startsWith("news_")) {
    const page = parseInt(data.split("_")[1], 10);
    return showNews(bot, msg, page);
  }

  // Расписание
  if (data === "schedule_dec") return showSchedule(bot, msg, "dec");
  if (data === "schedule_jan") return showSchedule(bot, msg, "jan");

  // Артисты: artists_0, artists_1 ...
  if (data.startsWith("artists_")) {
    const page = parseInt(data.split("_")[1], 10);
    return showArtists(bot, msg, page);
  }

  // Билеты
  if (data === "tickets") return showTickets(bot, msg);

  // Контакты
  if (data === "contacts") return showContacts(bot, msg);

  bot.answerCallbackQuery(query.id);
});
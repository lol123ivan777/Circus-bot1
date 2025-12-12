require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

const token = process.env.TELEGRAM_BOT_TOKEN;8285864678:AAFFLWa2GHk58ZpmxhuGc57wjoibw62FFDY0

if (!token) {
  console.error("❌ Нет TELEGRAM_BOT_TOKEN в .env");
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

console.log("🎪 Circus bot is running");

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "🎪 Добро пожаловать в цирк!\n\nСкоро здесь будет расписание, артисты и шоу ✨"
  );
});
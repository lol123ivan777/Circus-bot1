const { mainMenu } = require("../navigation");

function showHome(bot, msg) {
  const text =
    "🎪 *Цирк Никулина*\n\n" +
    "Добро пожаловать! Выбирай раздел ниже 👇";

  bot.editMessageText(text, {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
    parse_mode: "Markdown",
    reply_markup: mainMenu()
  });
}

module.exports = { showHome };
const { mainMenu } = require("../navigation");

function showHome(bot, msg) {
  const text =
    "🎪 *Цирк Никулина на Цветном бульваре*\n\n" +
    "Выберите раздел 👇";

  bot.editMessageText(text, {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
    parse_mode: "Markdown",
    reply_markup: mainMenu()
  });
}

module.exports = { showHome };
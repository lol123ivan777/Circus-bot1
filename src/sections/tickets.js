const { backHome } = require("../navigation");

function showTickets(bot, msg) {
  const text =
    "🎟 *Билеты*\n\n" +
    "Приобрести билеты можно на официальном сайте цирка.";

  bot.editMessageText(text, {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
    parse_mode: "Markdown",
    reply_markup: backHome()
  });
}

module.exports = { showTickets };
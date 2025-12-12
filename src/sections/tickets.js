function showTickets(bot, msg) {
  const text =
    "🎟 *Билеты*\n\n" +
    "Приобрести билеты можно на официальном сайте:\n" +
    "https://circusnikulin.ru/tickets";

  bot.editMessageText(text, {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [[{ text: "🏠 На главную", callback_data: "home" }]]
    }
  });
}

module.exports = { showTickets };
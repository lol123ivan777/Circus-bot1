function showContacts(bot, msg) {
  const text =
    "📍 *Контакты*\n\n" +
    "*Адрес:*\nМосква, Цветной бульвар, 13\n\n" +
    "*Телефоны:*\n" +
    "+7 (495) 628-83-49\n" +
    "+7 (495) 780-31-35\n\n" +
    "*Соцсети:*\n" +
    "VK: https://vk.com/circusnikulin\n" +
    "TG: https://t.me/nikulin_circus\n\n" +
    "*Почта:*\ninfo@circusnikulin.ru\npr@circusnikulin.ru";

  bot.editMessageText(text, {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [[{ text: "🏠 На главную", callback_data: "home" }]]
    }
  });
}

module.exports = { showContacts };
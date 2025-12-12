function showContacts(bot, msg) {
  const text =
    "📍 Контакты\n\n" +
    "Адрес:\n" +
    "127051, Россия, Москва, Цветной бульвар, 13\n\n" +
    "Телефон:\n" +
    "+7 (495) 628-83-49\n\n" +
    "Администрация:\n" +
    "+7 (495) 780-31-35\n\n" +
    "Социальные сети:\n" +
    "VK: https://vk.com/circusnikulin\n" +
    "Telegram: https://t.me/nikulin_circus\n\n" +
    "Отдел забытых вещей:\n" +
    "Забытые вещи можно забрать во время работы гардероба в дни представлений.\n\n" +
    "Электронные билеты:\n" +
    "https://circusnikulin.ru/tickets\n\n" +
    "Поддержка электронных билетов:\n" +
    "8 (495) 215-0000\n" +
    "ticket@profticket.ru\n\n" +
    "Электронная почта:\n" +
    "info@circusnikulin.ru\n" +
    "pr@circusnikulin.ru";

  bot.editMessageText(text, {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
    reply_markup: {
      inline_keyboard: [[{ text: "🏠 На главную", callback_data: "home" }]]
    }
  });
}

module.exports = { showContacts };
exports.showHome = (bot, msg) => {
  bot.editMessageText(
    "🎪 *Цирк Никулина на Цветном бульваре*\n\nВыберите раздел 👇",
    {
      chat_id: msg.chat.id,
      message_id: msg.message_id,
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [
            { text: "📰 Новости", callback_data: "news" },
            { text: "🎭 Расписание", callback_data: "schedule" }
          ],
          [
            { text: "🤹 Артисты", callback_data: "artists" },
            { text: "📍 Контакты", callback_data: "contacts" }
          ],
          [
            {
              {
  text: "🎟 БИЛЕТЫ / ПРИЛОЖЕНИЕ",
  web_app: {
    url: "https://circus-nikulin-app.vercel.app"
  }
}
              }
            }
          ]
        ]
      }
    }
  );
};
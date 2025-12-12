const news = require("../../data/news.json");

function showNews(bot, msg, page = 0) {
  const item = news[page];

  let text =
    `📰 *Новости*\n\n` +
    `📅 ${item.date}\n` +
    `*${item.title}*`;

  const keyboard = [];

  if (page > 0) keyboard.push({ text: "⬅️ Назад", callback_data: `news_${page - 1}` });
  if (page < news.length - 1) keyboard.push({ text: "➡️ Вперёд", callback_data: `news_${page + 1}` });

  keyboard.push({ text: "🏠 На главную", callback_data: "home" });

  bot.editMessageText(text, {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: [keyboard] }
  });
}

module.exports = { showNews };
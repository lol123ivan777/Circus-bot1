const news = require("../../data/news.json");
const { backHome } = require("../navigation");

function showNews(bot, msg) {
  const item = news[0];

  const text =
    `📰 *Новости*\n\n` +
    `*${item.title}*\n` +
    `${item.text}`;

  bot.editMessageText(text, {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
    parse_mode: "Markdown",
    reply_markup: backHome()
  });
}

module.exports = { showNews };
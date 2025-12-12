const artists = require("../../data/artists.json");

const PER_PAGE = 5;

function showArtists(bot, msg, page = 0) {
  const start = page * PER_PAGE;
  const slice = artists.slice(start, start + PER_PAGE);

  let text = "🤹 *Артисты*\n\n";

  slice.forEach(a => {
    text += `• *${a.title}*\n  п/р ${a.lead}\n\n`;
  });

  const buttons = [];

  if (page > 0)
    buttons.push({ text: "⬅️ Назад", callback_data: `artists_${page - 1}` });

  if (start + PER_PAGE < artists.length)
    buttons.push({ text: "➡️ Вперёд", callback_data: `artists_${page + 1}` });

  buttons.push({ text: "🏠 На главную", callback_data: "home" });

  bot.editMessageText(text, {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: [buttons] }
  });
}

module.exports = { showArtists };
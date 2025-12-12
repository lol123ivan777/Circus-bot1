const artists = require("../../data/artists.json");

function showArtists(bot, msg, page = 0) {
  const a = artists[page];

  const text =
    `🤹 *Артисты*\n\n` +
    `*${a.title}*\n` +
    `п/р ${a.lead}`;

  const buttons = [];

  if (page > 0) buttons.push({ text: "⬅️", callback_data: `artist_${page - 1}` });
  if (page < artists.length - 1) buttons.push({ text: "➡️", callback_data: `artist_${page + 1}` });

  buttons.push({ text: "🏠", callback_data: "home" });

  bot.editMessageText(text, {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: [buttons] }
  });
}

module.exports = { showArtists };
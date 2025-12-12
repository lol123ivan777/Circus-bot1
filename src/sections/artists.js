const artists = require("../../data/artists.json");
const { backHome } = require("../navigation");

function showArtists(bot, msg) {
  let text = "🤹 *Артисты*\n\n";

  artists.forEach(a => {
    text += `• ${a.name} — ${a.genre}\n`;
  });

  bot.editMessageText(text, {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
    parse_mode: "Markdown",
    reply_markup: backHome()
  });
}

module.exports = { showArtists };
const schedule = require("../../data/schedule.json");
const { backHome } = require("../navigation");

function showSchedule(bot, msg) {
  let text = "🎭 *Расписание спектаклей*\n\n";

  schedule.forEach(s => {
    text += `📅 ${s.date} — ${s.title}\n`;
  });

  bot.editMessageText(text, {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
    parse_mode: "Markdown",
    reply_markup: backHome()
  });
}

module.exports = { showSchedule };
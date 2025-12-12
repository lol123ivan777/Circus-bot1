const dec = require("../../data/schedule_december_2025.json");
const jan = require("../../data/schedule_january_2026.json");

function render(list, title) {
  let text = `🎭 *${title}*\n\n`;
  list.forEach(d => {
    text += `📅 ${d.day} — ${d.time}\n`;
  });
  return text;
}

function showSchedule(bot, msg, month = "dec") {
  const text = month === "dec"
    ? render(dec, "Декабрь 2025")
    : render(jan, "Январь 2026");

  bot.editMessageText(text, {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Декабрь 2025", callback_data: "schedule_dec" },
          { text: "Январь 2026", callback_data: "schedule_jan" }
        ],
        [{ text: "🏠 На главную", callback_data: "home" }]
      ]
    }
  });
}

module.exports = { showSchedule };
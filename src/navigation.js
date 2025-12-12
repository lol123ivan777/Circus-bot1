function mainMenu() {
  return {
    inline_keyboard: [
      [{ text: "📰 Новости", callback_data: "news" }],
      [{ text: "🎭 Расписание спектаклей", callback_data: "schedule" }],
      [{ text: "🤹 Артисты", callback_data: "artists" }],
      [{ text: "🎟 Билеты", callback_data: "tickets" }]
    ]
  };
}

function backHome() {
  return {
    inline_keyboard: [
      [{ text: "🏠 На главную", callback_data: "home" }]
    ]
  };
}

module.exports = {
  mainMenu,
  backHome
};
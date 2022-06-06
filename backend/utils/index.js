exports.getWeekNumber = (day) => {
  const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  return days.indexOf(day) + 1;
};

export const dateToString = date => {
  const mm = date.getMonth() + 1; // getMonth() is zero-based
  const dd = date.getDate();

  return [
    date.getFullYear(),
    "/",
    (mm > 9 ? "" : "0") + mm,
    "/",
    (dd > 9 ? "" : "0") + dd
  ].join("");
};

export const calcDifference = (startStr, endStr) => {
  const startTime = startStr.split(":");
  const endTime = endStr.split(":");
  const start = Number(startTime[0]) * 60 + Number(startTime[1]);
  const end = Number(endTime[0]) * 60 + Number(endTime[1]);
  let diff = end - start;
  return `${parseInt(diff / 60)}h ${diff % 60}m`;
};

export const strToDate = dateObj => {
  if (dateObj) {
    const date = dateObj.getDate();
    const monthMap = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const weekMap = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const day = weekMap[dateObj.getDay()];
    const month = monthMap[dateObj.getMonth() + 1];
    return `  ${day}, ${date} ${month}`;
  }
  return "";
};

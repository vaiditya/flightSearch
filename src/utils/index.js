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

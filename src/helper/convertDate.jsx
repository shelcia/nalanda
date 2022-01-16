const convertDate = (date) => {
  // console.log({ date });
  const dates = new Date(date);
  const formattedDate = Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(dates);
  return formattedDate;
};

// Thu Jun 09 2011 00:00:00 GMT+0530 (India Standard Time) ->2011-06-08
const convertDateFormat = (str) => {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
};

const convertDateMonthFormat = (date) => {
  if (date === null) {
    return "";
  }
  const dates = new Date(date);
  const formattedDate = Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    // day: "2-digit",
  }).format(dates);
  return formattedDate;
};

export { convertDate, convertDateFormat, convertDateMonthFormat };

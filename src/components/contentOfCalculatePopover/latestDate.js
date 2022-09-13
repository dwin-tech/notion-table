/* eslint-disable no-unused-vars */
const checkLatestDate = (data) => {
  const currentDay = new Date().getDate();
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  const newData = data.reduce((acc, el) => {
    if (el.value !== "") {
      acc.push(new Date(el.value));
    }
    return acc;
  }, []);
  const max = Math.max(...newData);
  if (max !== -Infinity) {
    const smallestDate = new Date(max).toISOString().substring(0, 10);
    const year = smallestDate.substring(0, smallestDate.indexOf("-"));
    const month = smallestDate.substring(
      smallestDate.indexOf("-") + 1,
      smallestDate.lastIndexOf("-")
    );
    const day = smallestDate.substring(smallestDate.lastIndexOf("-") + 1);
    const outputYear = currentYear - +year;
    const outputMonth = currentMonth - +month;
    const outputDay = +currentDay - +day;
    if (outputYear === 1) {
      if (+currentMonth <= +month) {
        return `LATEST a year ago`;
      }
      const count = 12 - (+currentMonth - +month);
      return count > 1 ? `LATEST ${count} months ago` : `LATEST a month ago`;
    }
    if (outputYear > 1) {
      return `LATEST ${outputYear} years ago`;
    }
    if (outputYear === -1) {
      if (+currentMonth <= +month) {
        return `LATEST in a year`;
      }
      const count = 12 - (+currentMonth - +month);
      return count > 1 ? `LATEST in ${count} months` : `LATEST in a month`;
    }
    if (outputYear < -1) {
      return `LATEST in ${outputYear * -1} years`;
    }
    if (outputMonth === 1) {
      if (+currentDay === +day) {
        return "LATEST a month ago";
      }
      const daysInMonth = new Date(+currentYear, +currentMonth, 0).getDate();
      const count = daysInMonth - (+currentDay - +day) * -1;
      if (daysInMonth === count) {
        return `LATEST a month ago`;
      }
      return count > 1 ? `LATEST ${count} days ago` : "LATEST a day ago";
    }
    if (outputMonth > 1) {
      return `LATEST ${outputMonth} months ago`;
    }
    if (outputMonth === -1) {
      if (+currentDay === +day) {
        return "LATEST in a month";
      }
      const daysInMonth = new Date(+currentYear, +currentMonth, 0).getDate();
      const count = daysInMonth - (+currentDay - +day);
      return count > 1 ? `LATEST in ${count} days` : `LATEST a ${count} day`;
    }
    if (outputMonth < -1) {
      return `LATEST in ${outputMonth * -1} months`;
    }
    if (outputDay === 1) {
      return `LATEST a day ago`;
    }
    if (outputDay > 1) {
      return `LATEST ${outputDay} days ago`;
    }
    if (outputDay === -1) {
      const time = new Date().getHours();
      const count = 24 - time;
      return count > 1 ? `LATEST in ${count} hours` : "LATEST in a hour";
    }
    if (outputDay < -1) {
      return `LATEST in ${outputDay * -1} days`;
    }
    const time = new Date().getHours();
    return time > 1 ? `LATEST ${time} hours ago` : "LATEST a hour ago";
  }
  return `LATEST`;
};

export default checkLatestDate;

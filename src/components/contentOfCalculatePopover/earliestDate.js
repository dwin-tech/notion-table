const checkEarliestDate = (data) => {
  const currentDay = new Date().getDate();
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  const newData = data.reduce((acc, el) => {
    if (el.value !== "") {
      acc.push(new Date(el.value));
    }
    return acc;
  }, []);
  const min = Math.min(...newData);
  if (min !== -Infinity) {
    const smallestDate = new Date(min).toISOString().substring(0, 10);
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
        return `EARLIEST a year ago`;
      }
      const count = 12 - (+currentMonth - +month);
      return count > 1
        ? `EARLIEST ${count} months ago`
        : `EARLIEST a month ago`;
    }
    if (outputYear > 1) {
      return `EARLIEST ${outputYear} years ago`;
    }
    if (outputYear === -1) {
      if (+currentMonth <= +month) {
        return `EARLIEST in a year`;
      }
      const count = 12 - (+currentMonth - +month);
      return count > 1 ? `EARLIEST in ${count} months` : `EARLIEST in a month`;
    }
    if (outputYear < -1) {
      return `EARLIEST in ${outputYear * -1} years`;
    }
    if (outputMonth === 1) {
      if (+currentDay === +day) {
        return "EARLIEST a month ago";
      }
      const daysInMonth = new Date(+currentYear, +currentMonth, 0).getDate();
      const count = daysInMonth - (+currentDay - +day) * -1;
      if (daysInMonth === count) {
        return `EARLIEST a month ago`;
      }
      return count > 1 ? `EARLIEST ${count} days ago` : "EARLIEST a day ago";
    }
    if (outputMonth > 1) {
      return `EARLIEST ${outputMonth} months ago`;
    }
    if (outputMonth === -1) {
      if (+currentDay === +day) {
        return "EARLIEST in a month";
      }
      const daysInMonth = new Date(+currentYear, +currentMonth, 0).getDate();
      const count = daysInMonth - (+currentDay - +day);
      return count > 1
        ? `EARLIEST in ${count} days`
        : `EARLIEST a ${count} day`;
    }
    if (outputMonth < -1) {
      return `EARLIEST in ${outputMonth * -1} months`;
    }
    if (outputDay === 1) {
      return `EARLIEST a day ago`;
    }
    if (outputDay > 1) {
      return `EARLIEST ${outputDay} days ago`;
    }
    if (outputDay === -1) {
      const time = new Date().getHours();
      const count = 24 - time;
      return count > 1 ? `EARLIEST in ${count} hours` : "EARLIEST in a hour";
    }
    if (outputDay < -1) {
      return `EARLIEST in ${outputDay * -1} days`;
    }
    const time = new Date().getHours();
    return time > 1 ? `EARLIEST ${time} hours ago` : "EARLIEST a hour ago";
  }
  return "EARLIEST";
};

export default checkEarliestDate;

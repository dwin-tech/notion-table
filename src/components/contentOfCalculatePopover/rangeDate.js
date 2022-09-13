const checkRangeDate = (data) => {
  const newData = data.reduce((acc, el) => {
    if (el.value !== "") {
      acc.push(new Date(el.value));
    }
    return acc;
  }, []);
  const max = Math.max(...newData);
  const min = Math.min(...newData);
  if (min !== -Infinity) {
    const smallestDate = new Date(min).toISOString().substring(0, 10);
    const biggestDate = new Date(max).toISOString().substring(0, 10);
    const smallestDateYear = +smallestDate.substring(
      0,
      smallestDate.indexOf("-")
    );
    const biggestDateYear = +biggestDate.substring(0, biggestDate.indexOf("-"));
    const smallestDateMonth = +smallestDate.substring(
      smallestDate.indexOf("-") + 1,
      smallestDate.lastIndexOf("-")
    );
    const biggestDateMonth = +biggestDate.substring(
      biggestDate.indexOf("-") + 1,
      biggestDate.lastIndexOf("-")
    );
    const smallestDateDay = +smallestDate.substring(
      smallestDate.lastIndexOf("-") + 1
    );
    const biggestDateDay = +biggestDate.substring(
      biggestDate.lastIndexOf("-") + 1
    );
    const outputYear = biggestDateYear - smallestDateYear;
    const outputMonth = biggestDateMonth - smallestDateMonth;
    const outputDay = biggestDateDay - smallestDateDay;

    if (outputYear === 1) {
      if (outputMonth < 0) {
        const count = 12 - outputMonth * -1;
        return count > 1 ? `RANGE ${count} months` : "RANGE a month";
      }
      return `a year`;
    }
    if (outputYear > 1) {
      return `RANGE ${outputYear} years`;
    }
    if (outputMonth === 1) {
      if (outputDay < 0) {
        const daysInMonth = new Date(
          smallestDateYear,
          smallestDateMonth,
          0
        ).getDate();
        const count = daysInMonth - outputDay * -1;
        return count > 1 ? `RANGE ${count} days` : "RANGE a day";
      }
      return "RANGE a month";
    }
    if (outputMonth > 1) {
      return `RANGE ${outputMonth} months`;
    }
    if (outputDay) {
      return outputDay > 1 ? `RANGE ${outputDay} days` : `RANGE a day`;
    }
    return "RANGE a few seconds";
  }
  return "RANGE";
};

export default checkRangeDate;

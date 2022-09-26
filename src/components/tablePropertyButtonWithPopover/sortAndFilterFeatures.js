const sortedData = (data, sortType) => {
  return sortType === "ascending"
    ? data.sort((a, b) => {
        if (a.value === "") return 1;
        if (b.value === "") return -1;
        if (!Number.isNaN(+a.value) && !Number.isNaN(+b.value))
          return +a.value - +b.value;
        if (a.value < b.value) return -1;
        return 1;
      })
    : data.sort((a, b) => {
        if (a.value === "") return 1;
        if (b.value === "") return -1;
        if (!Number.isNaN(+a.value) && !Number.isNaN(+b.value))
          return +b.value - +a.value;
        if (a.value < b.value) return 1;
        return -1;
      });
};

const sortedDate = (data, sortType, type) => {
  return data.sort((a, b) => {
    if (type === "date") {
      const value1 = new Date(a.value) || 1;
      const value2 = new Date(b.value) || 1;
      return sortType === "ascending" ? value2 - value1 : value1 - value2;
    }
    return sortType === "ascending" ? b.value - a.value : a.value - b.value;
  });
};

const sortedPositions = (item, sortType) => {
  const data = [...item.data];
  if (item.type !== "date") {
    return sortedData(data, sortType).reduce((acc, el) => {
      acc.push(el.position);
      return acc;
    }, []);
  }

  return sortedDate(data, sortType, item.type).reduce((acc, el) => {
    acc.push(el.position);
    return acc;
  }, []);
};

export default sortedPositions;

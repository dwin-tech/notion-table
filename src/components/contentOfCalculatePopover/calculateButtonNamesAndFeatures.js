/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import checkEarliestDate from "./earliestDate";
import checkLatestDate from "./latestDate";
import checkRangeDate from "./rangeDate";

const calculateButtonNamesAndFeatures = {
  default: {
    None: () => {
      return "Calculate";
    },
    "Count all": (data) => {
      return `COUNT ${data.length}`;
    },
    "Count values": (data) => {
      return `VALUES ${data.filter((el) => el.value).length}`;
    },
    "Count unique values": (data) => {
      return `UNIQUE ${
        data.reduce((acc, el) => {
          if (!acc.includes(el.value)) acc.push(el.value);
          return acc;
        }, []).length
      }`;
    },
    "Count empty": (data) => {
      return `EMPTY ${data.filter((el) => !el.value).length}`;
    },
    "Count not empty": (data) => {
      return `NOT EMPTY ${data.filter((el) => el.value).length}`;
    },
    "Percent empty": (data) => {
      const value = (data.filter((el) => !el.value).length * 100) / data.length;
      return `EMPTY ${!Number.isInteger(+value) ? value.toFixed(3) : value}%`;
    },
    "Percent not empty": (data) => {
      const value = (data.filter((el) => el.value).length * 100) / data.length;
      return `NOT EMPTY ${
        !Number.isInteger(+value) ? value.toFixed(3) : value
      }%`;
    },
  },
  number: {
    Sum: (data) => {
      const newData = data.filter((el) => el.value !== "");
      if (newData.length) {
        return `SUM ${data.reduce((acc, el) => (acc += +el.value), 0)}`;
      }
      return "SUM";
    },
    Avarge: (data) => {
      const array = data.filter((el) => el.value !== "");
      if (array.length) {
        const value =
          array.reduce((acc, el) => (acc += +el.value), 0) / array.length;
        return `AVARGE ${value.toFixed(5)}`;
      }
      return "AVARGE";
    },
    Median: (data) => {
      const array = data
        .filter((el) => el.value !== "")
        .sort((a, b) => a.value - b.value);
      if (array.length) {
        const middle = Math.floor(array.length / 2);
        let value = "";
        if (array.length % 2) {
          value = array[middle].value;
        } else if (array.length) {
          value = (+array[middle].value + +array[middle - 1].value) / 2;
        }
        return `MEDIAN ${value}`;
      }
      return "MEDIAN";
    },
    Min: (data) => {
      const newData = data.filter((el) => el.value !== "");
      if (newData.length) {
        const value = newData.reduce((acc, el) => {
          if (acc > +el.value) {
            acc = +el.value;
          }
          return acc;
        }, newData[0].value);
        return `MIN ${value}`;
      }
      return "MIN";
    },
    Max: (data) => {
      const newData = data.filter((el) => el.value !== "");
      if (newData.length) {
        const value = newData.reduce((acc, el) => {
          if (acc < +el.value) {
            acc = +el.value;
          }
          return acc;
        }, newData[0].value);
        return `MAX ${value}`;
      }
      return "MAX";
    },
    Range: (data) => {
      const newData = data.filter((el) => el.value !== "");
      if (newData.length) {
        const max = newData.reduce((acc, el) => {
          if (acc > +el.value) {
            acc = +el.value;
          }
          return acc;
        }, +newData[0].value);
        const min = newData.reduce((acc, el) => {
          if (acc < +el.value) {
            acc = +el.value;
          }
          return acc;
        }, +newData[0].value);
        return `RANGE ${max - min < 0 ? (max - min) * -1 : max - min}`;
      }
      return "RANGE";
    },
  },
  date: {
    "Earliest date": (data) => {
      return checkEarliestDate(data);
    },
    "Latest date": (data) => {
      return checkLatestDate(data);
    },
    "Date range": (data) => {
      return checkRangeDate(data);
    },
  },
};

export default calculateButtonNamesAndFeatures;

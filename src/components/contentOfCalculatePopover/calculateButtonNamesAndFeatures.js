const calculateButtonNamesAndFeatures = {
  default: {
    None: () => {
      return "Calculate";
    },
    "Count all": (data) => {
      return `COUNT ${data.length}`;
    },
    "Count values": (data) => {
      return `VALUES ${data.filter((e) => e.value).length}`;
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
      return `EMPTY ${data.filter((e) => !e.value).length}`;
    },
    "Count not empty": (data) => {
      return `NOT EMPTY ${data.filter((e) => e.value).length}`;
    },
    "Percent empty": (data) => {
      return `EMPTY ${
        (data.filter((e) => !e.value).length * 100) / data.length
      }%`;
    },
    "Percent not empty": (data) => {
      return `NOT EMPTY ${
        (data.filter((e) => e.value).length * 100) / data.length
      }%`;
    },
  },
};

export default calculateButtonNamesAndFeatures;

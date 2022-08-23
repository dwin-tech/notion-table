const setDataIntoStorage = (key, value) => {
  const newValue = JSON.stringify(value);
  localStorage.setItem(key, newValue);
};

export default setDataIntoStorage;

export const getDatainToStorage = (key) => {
  const result = localStorage.getItem(key);
  try {
    return JSON.parse(result);
  } catch (err) {
    return null;
  }
};

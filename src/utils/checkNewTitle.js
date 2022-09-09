const checkNewTitle = (type, propertyNames) => {
  const properties = Object.values(propertyNames);
  if (!properties.includes(type)) return type;
  for (let i = 1; i <= properties.length; i += 1) {
    if (!properties.includes(`${type} (${i})`)) {
      return `${type} (${i})`;
    }
  }

  return type;
};

export default checkNewTitle;

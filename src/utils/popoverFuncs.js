const possibleIncludes = [
  "table",
  "layout",
  "board",
  "timeLine",
  "list",
  "gallery",
];

const checkName = (selectedObject) => {
  return possibleIncludes.includes(selectedObject.name);
};

export default checkName;

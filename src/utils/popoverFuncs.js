const possibleIncludes = [
  "table",
  "layout",
  "board",
  "timeLine",
  "list",
  "gallery",
];

const chekedName = (selectedObject) => {
  return possibleIncludes.includes(selectedObject.type);
};

export default chekedName;

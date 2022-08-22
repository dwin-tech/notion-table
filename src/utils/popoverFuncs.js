const chekedName = (selectedObject) => {
  if (
    selectedObject.name === "table" ||
    selectedObject.name === "board" ||
    selectedObject.name === "timeLine" ||
    selectedObject.name === "calendar" ||
    selectedObject.name === "list" ||
    selectedObject.name === "gallery"
  ) {
    return true;
  }
  return false;
};

export default chekedName;

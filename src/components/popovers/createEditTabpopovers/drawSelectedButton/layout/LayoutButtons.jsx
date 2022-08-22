import React, { useEffect } from "react";
import TableChartIcon from "@mui/icons-material/TableChart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ViewListIcon from "@mui/icons-material/ViewList";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { addNewEditTab } from "../../../../../features/tableTabsInfo/tableTabsInfoSlice";
import { changeSelectedType } from "../../../../../features/tableTypeInfo/tableTypeInfoSlice";

import style from "./layout.module.scss";

function LayoutButtons() {
  const dispatch = useDispatch();

  const selectedType = useSelector((store) => store.tableTypeInfo);
  const { selectedTabId, tabsArray } = useSelector(
    (store) => store.tableTabsInfo
  );
  const { showNewTabPopover } = useSelector((store) => store.showPopoverInfo);
  const selectedObject = tabsArray.find((e) => e.id === selectedTabId);
  const btnStyleCheked = (type) => {
    return selectedType[type] ? "blue_btn" : "black_btn";
  };

  useEffect(() => {
    dispatch(changeSelectedType(selectedObject.type));
  }, [selectedObject]);

  const buttons = [
    ["table", <TableChartIcon />],
    ["board", <DashboardIcon />],
    ["timeLine", <ViewTimelineIcon />],
    ["calendar", <CalendarMonthIcon />],
    ["list", <ViewListIcon />],
    ["gallery", <CollectionsBookmarkIcon />],
  ];

  const chekedName = () => {
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

  const actionDeliver = (type) => {
    if (showNewTabPopover) {
      return { id: selectedTabId, type, name: "New View" };
    }
    if (chekedName()) {
      return { id: selectedTabId, type, name: type };
    }
    return { id: selectedTabId, type, name: selectedObject.name };
  };

  return (
    <div className={style.table_type_container}>
      {buttons.map((e) => (
        <button
          key={uuid()}
          type="submit"
          onClick={() => {
            dispatch(changeSelectedType(e[0]));
            dispatch(addNewEditTab(actionDeliver(e[0])));
          }}
          className={style[btnStyleCheked(e[0])]}
        >
          {e[1]}
          {e[0]}
        </button>
      ))}
    </div>
  );
}

export default LayoutButtons;

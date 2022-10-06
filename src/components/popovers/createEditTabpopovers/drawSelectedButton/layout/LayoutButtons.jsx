import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import buttons from "./buttonsArray";
import { addNewEditTab } from "../../../../../features/tableTabsInfo/tableTabsInfoSlice";
import { changeSelectedType } from "../../../../../features/tableTypeInfo/tableTypeInfoSlice";

import style from "./layout.module.scss";
import checkName from "../../../../../utils/popoverFuncs";

function LayoutButtons() {
  const dispatch = useDispatch();

  const selectedType = useSelector((store) => store.tableTypeInfo);
  const { selectedTabId, tabsArray } = useSelector(
    (store) => store.tableTabsInfo
  );
  const { showNewTabPopover } = useSelector((store) => store?.showPopoverInfo);
  const selectedObject = tabsArray.find((e) => e.id === selectedTabId);
  const btnStyleCheked = (type) => {
    return selectedType[type] ? "blue_btn" : "black_btn";
  };

  useEffect(() => {
    dispatch(changeSelectedType(selectedObject?.type));
  }, [selectedObject]);

  const actionDeliver = (type) => {
    if (showNewTabPopover) {
      if (type === "board") {
        return {
          id: selectedTabId,
          boardGroup: [""],
          type,
          name: "New View",
        };
      }
      return { id: selectedTabId, type, name: "New View" };
    }
    if (checkName(selectedObject)) {
      if (type === "board") {
        return {
          id: selectedTabId,
          boardGroup: [""],
          type,
          name: type,
        };
      }
      return { id: selectedTabId, type, name: type };
    }
    if (type === "board") {
      return {
        id: selectedTabId,
        boardGroup: [""],
        type,
        name: selectedObject?.name,
      };
    }
    return { id: selectedTabId, type, name: selectedObject?.name };
  };

  return (
    <div className={style.table_type_container}>
      {buttons.map((e) => (
        <button
          key={e[0]}
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

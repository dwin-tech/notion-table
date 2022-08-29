import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import Switch from "@mui/material/Switch";
import { changeCreatedTabName } from "../../../../../features/tableTabsInfo/tableTabsInfoSlice";
import GoBackComponent from "../../../../goBackButton/GoBackButton";
import style from "./layout.module.scss";
import CustomInput from "../../../../custom/CustomInput";
import LayoutButtons from "./LayoutButtons";
import { doneAndCloseBtn } from "../../popoverFunctions";
import { changeShowView } from "../../../../../features/showPopoversInfo/showPopoverInfoSlice";

export default function Layout() {
  const dispatch = useDispatch();
  const { showNewTabPopover } = useSelector((store) => store.showPopoverInfo);
  const { selectedTabId, createdTabName, tabsArray } = useSelector(
    (store) => store.tableTabsInfo
  );

  const selectedObject = tabsArray.find((e) => e.id === selectedTabId);
  const [switchCheked, setSwitchCheked] = useState(false);

  const changeTabName = (val) => {
    dispatch(changeCreatedTabName(val));
  };

  return (
    <div className={style.new_view_container}>
      <div className={style.layout_cancel_container}>
        {showNewTabPopover ? (
          <div>New View</div>
        ) : (
          <GoBackComponent text="Layout" onChange={changeShowView} />
        )}
        <button
          type="submit"
          className={style.onclose_btn}
          onClick={() =>
            doneAndCloseBtn(
              dispatch,
              showNewTabPopover,
              selectedTabId,
              createdTabName,
              selectedObject
            )
          }
        >
          <CloseIcon />
        </button>
      </div>
      {showNewTabPopover && (
        <CustomInput onChange={changeTabName} placeholder="New View" />
      )}
      <LayoutButtons />
      <button
        className={style.switch_button}
        type="submit"
        onClick={() => setSwitchCheked(!switchCheked)}
      >
        <p>Wrap all columns</p>
        <Switch checked={switchCheked} />
      </button>
      <button type="submit" className={style.switch_button}>
        <p>Open pages in</p>
        <p>Side peek</p>
      </button>
      {showNewTabPopover && (
        <button
          className={style.done_btn}
          type="submit"
          onClick={() =>
            doneAndCloseBtn(
              dispatch,
              showNewTabPopover,
              selectedTabId,
              createdTabName,
              selectedObject
            )
          }
        >
          Done
        </button>
      )}
    </div>
  );
}

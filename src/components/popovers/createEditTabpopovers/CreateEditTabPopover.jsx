import React from "react";
import Popover from "@mui/material/Popover";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useSelector, useDispatch } from "react-redux";
import style from "./popovers.module.scss";
import EditTabPopoverJsx from "./CreateTabPopoverDrawing";
import {
  changeShowCreateTabPopover,
  // chengePopoverEventCurrentTarget,
} from "../../../features/showPopoversInfo/showPopoverInfoSlice";
import onClosePopover from "./popoverFunctions";

export default function EditTabPopover() {
  const dispatch = useDispatch();
  const { showCreateTabPopover, showNewTabPopover } = useSelector(
    (store) => store.showPopoverInfo
  );
  const { createdTabName, selectedTabId, tabsArray } = useSelector(
    (store) => store.tableTabsInfo
  );

  const id = showCreateTabPopover ? "simple-popover" : undefined;

  const selectedObject = tabsArray.find((e) => e.id === selectedTabId);

  return (
    <div>
      <button
        className={style.createTabPoper_btn}
        type="submit"
        onClick={() => {
          dispatch(changeShowCreateTabPopover(true));
        }}
      >
        <MoreHorizIcon />
      </button>
      <Popover
        id={id}
        open={showCreateTabPopover}
        onClose={() =>
          onClosePopover(
            dispatch,
            createdTabName,
            showNewTabPopover,
            selectedObject,
            selectedTabId
          )
        }
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          style: {
            height: "76.5%",
            borderLeft: "1px solid #000",
            width: "22%",
            minWidth: "250px",
          },
        }}
      >
        <EditTabPopoverJsx />
      </Popover>
    </div>
  );
}

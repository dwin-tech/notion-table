import React from "react";
import Popover from "@mui/material/Popover";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useSelector, useDispatch } from "react-redux";
import style from "./popovers.module.scss";
import EditTabPopoverJsx from "./CreateTabPopoverJsx";
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
          // dispatch(chengePopoverEventCurrentTarget([e.currentTarget]));
        }}
      >
        <MoreHorizIcon />
      </button>
      <Popover
        id={id}
        open={showCreateTabPopover}
        // anchorEl={popoverEventCurrentTarget[0]}
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
            // overflow: "auto",
            height: "85%",
            marginTop: "81px",
            marginRight: "-200px",
            width: "25%",
            minWidth: "300px",
            boxShadow: "none",
            backgroundColor: "#ffffff",
            paddingBottom: "66px",
          },
        }}
      >
        <EditTabPopoverJsx />
      </Popover>
    </div>
  );
}

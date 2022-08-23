import React, { useState, useRef } from "react";
import Popover from "@mui/material/Popover";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useSelector, useDispatch } from "react-redux";
import style from "./popovers.module.scss";
import EditTabPopoverJsx from "./CreateTabPopoverJsx";
import { changeShowCreateTabPopover } from "../../../features/showPopoversInfo/showPopoverInfoSlice";
import onClosePopover from "./popoverFunctions";

export default function EditTabPopover() {
  const buttonRef = useRef();
  const dispatch = useDispatch();
  const { showCreateTabPopover, showNewTabPopover } = useSelector(
    (store) => store.showPopoverInfo
  );
  const { createdTabName, selectedTabId, tabsArray } = useSelector(
    (store) => store.tableTabsInfo
  );
  // eslint-disable-next-line no-unused-vars
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = () => {
    setAnchorEl(buttonRef);
  };

  const id = showCreateTabPopover ? "simple-popover" : undefined;

  const selectedObject = tabsArray.find((e) => e.id === selectedTabId);

  return (
    <div>
      <button
        ref={buttonRef}
        className={style.createTabPoper_btn}
        type="submit"
        onClick={(e) => {
          dispatch(changeShowCreateTabPopover(true));
          handleClick(e);
        }}
      >
        <MoreHorizIcon />
      </button>
      <Popover
        id={id}
        open={showCreateTabPopover}
        anchorEl={buttonRef}
        ForwardRef={buttonRef}
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
            height: "85%",
            marginTop: "50px",
            marginRight: "0",
            width: "25%",
            minWidth: "200px",
            boxShadow: "none",
            backgroundColor: "#ffffff",
          },
        }}
      >
        <EditTabPopoverJsx />
      </Popover>
    </div>
  );
}

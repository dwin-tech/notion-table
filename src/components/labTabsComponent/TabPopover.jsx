/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Tab from "@mui/material/Tab";
import { useDispatch, useSelector } from "react-redux";
import { Draggable } from "react-beautiful-dnd";
import selectTabIcon from "../../utils/tabIeIcons";
import { changeSelectedTabId } from "../../features/tableTabsInfo/tableTabsInfoSlice";
import setDataIntoStorage from "../../utils/callLocalStorage";
import style from "./tabs.module.scss";
import ContentOfTabPopover from "./ContentOfTabPopover";

export default function TabPopover({
  item,
  index,
  currentIndex,
  setCurrentIndex,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const { tabsArray } = useSelector((store) => store.tableTabsInfo);

  const handleClick = (event, newValue) => {
    if (currentIndex === newValue) {
      setAnchorEl(event.currentTarget);
    } else {
      setCurrentIndex(newValue);
      dispatch(changeSelectedTabId(tabsArray[newValue]?.id));
      setDataIntoStorage("selectedTabId", tabsArray[newValue]?.id);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "tab-popover" : undefined;

  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Tab
            className={style.tab_popover_btn}
            anchorel={anchorEl}
            onClick={(event) => handleClick(event, index)}
            icon={selectTabIcon[item.type]}
            iconPosition="start"
            value={index}
            label={item.name}
          />

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            PaperProps={{
              style: {
                minWidth: "240px",
              },
            }}
          >
            <Typography component="div" sx={{ p: 2 }}>
              <ContentOfTabPopover item={item} setAnchorEl={setAnchorEl} />
            </Typography>
          </Popover>
        </div>
      )}
    </Draggable>
  );
}

TabPopover.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
};

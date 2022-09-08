import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import PropTypes from "prop-types";
import style from "./tableDrawing.module.scss";
import CustomInputWithValue from "../custom/CustomInputWithValue";
import ItemInfoPopoverButtons from "./ItemInfoPopoverButtons";

export default function ItemInfoPopover({ index }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchActionInputValue, setSearchActionInputValue] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeActionInputValue = (val) => {
    setSearchActionInputValue(val);
  };

  const open = Boolean(anchorEl);
  const id = open ? "popover-of-each-line" : undefined;

  return (
    <div>
      <div className={style.drag_icon_btn}>
        <DragIndicatorIcon onClick={handleClick} />
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
      >
        <Typography component="div" sx={{ p: 2 }}>
          <CustomInputWithValue
            placeholder="Search actions..."
            value={searchActionInputValue}
            onChange={changeActionInputValue}
            onBlur={changeActionInputValue}
          />
          <ItemInfoPopoverButtons index={index} onClose={setAnchorEl} />
        </Typography>
      </Popover>
    </div>
  );
}

ItemInfoPopover.propTypes = {
  index: PropTypes.number.isRequired,
};

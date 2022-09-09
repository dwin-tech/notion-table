import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PropTypes from "prop-types";
import style from "./tableDrawing.module.scss";
import ContentOfCalculatePopover from "../contentOfCalculatePopover/ContentOfCalculatePopover";
import calculateButtonNamesAndFeatures from "../contentOfCalculatePopover/calculateButtonNamesAndFeatures";

export default function CalculatePopover({ item }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const buttonName = calculateButtonNamesAndFeatures.default[
    item.currentCalculateBtnValue
  ](item.data);

  return (
    <div>
      <button
        className={style.calculate_btns}
        type="submit"
        onClick={handleClick}
      >
        {buttonName}
        {buttonName === "Calculate" && <KeyboardArrowDownIcon />}
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          style: {
            maxWidth: "200px",
          },
        }}
      >
        <Typography component="div" sx={{ p: 2 }}>
          <ContentOfCalculatePopover
            onCloseCalculatePopover={setAnchorEl}
            item={item}
          />
        </Typography>
      </Popover>
    </div>
  );
}

CalculatePopover.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

import React, { useState, useEffect } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PropTypes from "prop-types";
import style from "./tableDrawing.module.scss";
import ContentOfCalculatePopover from "../contentOfCalculatePopover/ContentOfCalculatePopover";
import calculateButtonNamesAndFeatures from "../contentOfCalculatePopover/calculateButtonNamesAndFeatures";

export default function CalculatePopover({ item }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [buttonTitle, setButtonTitle] = useState("Calculate");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "calculate-popover" : undefined;

  const renderOfCalculateButtonName = () => {
    if (
      Object.keys(calculateButtonNamesAndFeatures.number).includes(
        item.currentCalculateBtnValue
      )
    ) {
      setButtonTitle(
        calculateButtonNamesAndFeatures.number[item.currentCalculateBtnValue](
          item.data
        )
      );
    } else if (
      Object.keys(calculateButtonNamesAndFeatures.date).includes(
        item.currentCalculateBtnValue
      )
    ) {
      setButtonTitle(
        calculateButtonNamesAndFeatures.date[item.currentCalculateBtnValue](
          item.data
        )
      );
    } else {
      setButtonTitle(
        calculateButtonNamesAndFeatures.default[item.currentCalculateBtnValue](
          item.data
        )
      );
    }
  };

  useEffect(() => {
    renderOfCalculateButtonName();
  }, [item]);

  return (
    <div>
      <button
        className={style.calculate_btns}
        type="submit"
        onClick={handleClick}
      >
        {buttonTitle}
        {buttonTitle === "Calculate" && <KeyboardArrowDownIcon />}
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

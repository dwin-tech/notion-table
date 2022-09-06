import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import propertyIcons from "../propertyIcons/propertyIcons";
import style from "./popoverOfButton.module.scss";

export default function PopoverOfButton({ item }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "popover-of-property-buttons" : undefined;

  return (
    <div>
      <button
        type="submit"
        className={style.btn_property}
        onClick={handleClick}
      >
        {propertyIcons[item.type]}
        <p>{item.title}</p>
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
            display: "flex",
            flexDirection: "column",
            width: "220px",
            minWidth: "180px",
            maxWidth: "calc(100vw - 24px)",
            maxHeight: "70vh",
          },
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
}

PopoverOfButton.propTypes = {
  item: PropTypes.InstanceOf(Array).isRequired,
};

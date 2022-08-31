import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import style from "./properties.module.scss";
import basicTypeProperties from "../../../../typeOfProperties/typeOfProperties";
import propertyIcons from "../../../../propertyIcons/propertyIcons";

export default function EditTypePopover() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <button
        className={style.chossen_type_btn}
        type="submit"
        onClick={handleClick}
      >
        <div>Type</div>
        <div>
          icon
          <div>type</div>
          icon
        </div>
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{
          style: {
            width: "23%",
            minWidth: "270px",
          },
        }}
      >
        <Typography sx={{ p: 2 }}>
          <input type="text" />
          <p>Basic</p>
          <div>{Object.entries(basicTypeProperties).map(e => <button type="submit">
            <div>
              {propertyIcons[e[0]]}
              <p></p>
            </div>
          </button>)}</div>
        </Typography>
      </Popover>
    </div>
  );
}

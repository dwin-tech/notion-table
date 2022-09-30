import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import style from "./board.module.scss";

export default function BoardHeaderTitlePopover({ name }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "board-header-title-popover" : undefined;

  return (
    <div>
      <button
        type="submit"
        className={style.add_new_group_btn}
        onClick={handleClick}
      >
        {name}
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
}

BoardHeaderTitlePopover.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  name: PropTypes.object.isRequired,
};

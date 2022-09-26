import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import PropTtypes from "prop-types";
import PROPERTY_ICONS from "../propertyIcons/propertyIcons";
import style from "./popoverOfButton.module.scss";
import EditTypePopoverContent from "./EditTypePopoverContent";

export default function EditTypePopover({ item, setAnchorElement }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    if (item.type !== "title") {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "edit-type-popover" : undefined;

  return (
    <div>
      <button
        type="submit"
        className={style.property_popover_btns}
        onClick={handleClick}
      >
        <div>
          {PROPERTY_ICONS[item.type]}
          <p>Type</p>
        </div>
        <p>{item.type}</p>
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
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
            maxWidth: "300px",
            maxHeight: "400px",
            padding: "5px",
          },
        }}
      >
        <Typography sx={{ p: 2 }} component="div">
          <EditTypePopoverContent
            setAnchorElement={setAnchorElement}
            setAnchorEl={setAnchorEl}
            item={item}
          />
        </Typography>
      </Popover>
    </div>
  );
}

EditTypePopover.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTtypes.object.isRequired,
  setAnchorElement: PropTtypes.func.isRequired,
};

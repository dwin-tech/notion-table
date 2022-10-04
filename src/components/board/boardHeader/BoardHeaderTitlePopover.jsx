import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import style from "./board.module.scss";
import ContentOfBoardHeaderTitlePopover from "./ContentOfBoardHeaderTitlePopover";
import {
  addNewBoardGroup,
  changeToggleShowModal,
} from "../../../features/tableTabsInfo/tableTabsInfoSlice";

export default function BoardHeaderTitlePopover({
  name,
  boardGroup,
  selectedTabId,
  index,
}) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [newTitle, setNewTitle] = useState(name);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "board-header-title-popover" : undefined;

  const handleAddBoardGroupOrChangeName = () => {
    if (newTitle && newTitle !== name) {
      if (boardGroup.includes(newTitle)) {
        dispatch(changeToggleShowModal(true));
        return;
      }
      dispatch(
        addNewBoardGroup({
          id: selectedTabId,
          name: newTitle,
          oldName: name || "",
          index,
        })
      );
    }
    handleClose();
  };

  return (
    <div>
      <button
        type="submit"
        className={style.add_new_group_btn}
        onClick={handleClick}
      >
        {name || <AddIcon />}
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
      >
        <Typography sx={{ p: 2 }} component="div">
          {name ? (
            <ContentOfBoardHeaderTitlePopover
              value={newTitle}
              onChange={setNewTitle}
              placeholder="Rename group"
              onClick={handleAddBoardGroupOrChangeName}
            />
          ) : (
            <ContentOfBoardHeaderTitlePopover
              value=""
              onChange={setNewTitle}
              placeholder="New group"
              onClick={handleAddBoardGroupOrChangeName}
            />
          )}
        </Typography>
      </Popover>
    </div>
  );
}

BoardHeaderTitlePopover.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  boardGroup: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  selectedTabId: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

import React from "react";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import LinkIcon from "@mui/icons-material/Link";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import style from "./tabs.module.scss";
import { changeShowCreateTabPopover } from "../../features/showPopoversInfo/showPopoverInfoSlice";
import {
  deleteTab,
  duplicateTab,
} from "../../features/tableTabsInfo/tableTabsInfoSlice";
import { changeToggleDeleteDialog } from "../../features/tableDataInfo/tableDataInfoSlice";
import DeleteDialog from "../deleteDialog/DeleteDialog";

function ContentOfTabPopover({ setAnchorEl }) {
  const dispatch = useDispatch();
  const { toggleDeleteDialog } = useSelector((store) => store.tableDataInfo);
  const { selectedTabId } = useSelector((store) => store.tableTabsInfo);
  const handleRenameOrEditTab = () => {
    dispatch(changeShowCreateTabPopover(true));
    setAnchorEl(null);
  };

  const handleduplicateTab = () => {
    dispatch(duplicateTab());
    setAnchorEl(null);
    dispatch(changeShowCreateTabPopover(true));
  };

  const handleDeleteTab = () => {
    dispatch(changeToggleDeleteDialog(true));
  };

  const onDeleteTab = (id) => {
    dispatch(deleteTab(id));
    setAnchorEl(null);
    dispatch(changeToggleDeleteDialog(false));
  };

  return (
    <div className={style.tab_popover_btns}>
      <button type="submit" onClick={handleRenameOrEditTab}>
        <DriveFileRenameOutlineIcon />
        <p>Rename</p>
      </button>
      <button type="submit" onClick={handleRenameOrEditTab}>
        <MenuOpenIcon />
        <p>Edit view</p>
      </button>
      <div className={style.border_top} />
      <button type="submit">
        <LinkIcon />
        <p>Copy link to view</p>
      </button>
      <div className={style.border_bottom} />
      <button type="submit" onClick={handleduplicateTab}>
        <ContentCopyIcon />
        <p>Duplicate</p>
      </button>
      <button type="submit" onClick={handleDeleteTab}>
        <DeleteIcon />
        <p>Delete</p>
      </button>
      {toggleDeleteDialog && (
        <DeleteDialog
          text="Are you sure you want to delete this view"
          onDelete={onDeleteTab}
          id={selectedTabId}
        />
      )}
    </div>
  );
}

ContentOfTabPopover.propTypes = {
  setAnchorEl: PropTypes.func.isRequired,
};

export default ContentOfTabPopover;

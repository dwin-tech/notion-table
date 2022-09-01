import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import style from "./deleteDialog.module.scss";
import { changeToggleDeletedDialog } from "../../features/tableDataInfo/tableDataInfoSlice";

export default function DeletedDialog({ type, onDelete, id }) {
  const dispatch = useDispatch();

  return (
    <div>
      <Dialog
        paperWidthSm
        open
        onClose={() => dispatch(changeToggleDeletedDialog(false))}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure you want to delete this {type}?
        </DialogTitle>
        <DialogContent className={style.dialog_btns_container}>
          <button
            className={style.delete_btn}
            type="submit"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
          <button
            onClick={() => dispatch(changeToggleDeletedDialog(false))}
            className={style.cancel_btn}
            type="submit"
          >
            Cancel
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

DeletedDialog.propTypes = {
  type: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

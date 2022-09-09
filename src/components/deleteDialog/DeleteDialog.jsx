import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import style from "./deleteDialog.module.scss";
import { changeToggleDeleteDialog } from "../../features/tableDataInfo/tableDataInfoSlice";

export default function DeleteDialog({ text, onDelete, id }) {
  const dispatch = useDispatch();

  return (
    <div>
      <Dialog
        open
        onClose={() => dispatch(changeToggleDeleteDialog(false))}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{text}</DialogTitle>
        <DialogContent className={style.dialog_btns_container}>
          <button
            className={style.delete_btn}
            type="submit"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
          <button
            onClick={() => dispatch(changeToggleDeleteDialog(false))}
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

DeleteDialog.propTypes = {
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

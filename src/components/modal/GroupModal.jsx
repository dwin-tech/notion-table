import * as React from "react";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { changeToggleShowModal } from "../../features/tableTabsInfo/tableTabsInfoSlice";
import style from "./modal.module.scss";

export default function GroupModal() {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(changeToggleShowModal(false));

  return (
    <div>
      <Modal
        open
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={style.modal_content}>
          <p>Group already exists.</p>
          <button type="submit" onClick={handleClose}>
            Okay
          </button>
        </div>
      </Modal>
    </div>
  );
}

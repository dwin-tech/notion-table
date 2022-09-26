import React, { useState } from "react";
import PropTypes from "prop-types";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import Switch from "@mui/material/Switch";
import style from "./popoverOfButton.module.scss";
import {
  changeDeletePropertyInItem,
  changeSelectedPropertyHide,
  changeToggleDeleteDialog,
} from "../../features/tableDataInfo/tableDataInfoSlice";
import DeleteDialog from "../deleteDialog/DeleteDialog";

function EditTypePopoverBtns({ item, setAnchorElement }) {
  const dispatch = useDispatch();
  const { toggleDeleteDialog } = useSelector((store) => store.tableDataInfo);
  const [switchCheked, setSwitchCheked] = useState(false);

  const handleHideProperty = () => {
    dispatch(changeSelectedPropertyHide(item.id));
    setAnchorElement(false);
  };

  const onDelete = (id) => {
    dispatch(changeDeletePropertyInItem({ id, value: true }));
    dispatch(changeToggleDeleteDialog(false));
    setAnchorElement(false);
  };

  return (
    <div>
      <button
        type="submit"
        className={style.property_popover_btns}
        onClick={handleHideProperty}
      >
        <div>
          <RemoveRedEyeIcon />
          <p> Hide in view</p>
        </div>
      </button>
      <button
        type="submit"
        className={style.property_popover_btns}
        onClick={() => dispatch(changeToggleDeleteDialog(true))}
      >
        <div>
          <DeleteIcon />
          <p>Delete property</p>
        </div>
      </button>
      {toggleDeleteDialog && (
        <DeleteDialog
          onDelete={onDelete}
          id={item.id}
          text="Are you sure? This property will be deleted for everyone on Task title"
        />
      )}
      <div className={style.border_top} />
      <button
        className={style.property_popover_btns}
        type="submit"
        onClick={() => setSwitchCheked(!switchCheked)}
      >
        <p>Wrap all columns</p>
        <Switch checked={switchCheked} />
      </button>
    </div>
  );
}

EditTypePopoverBtns.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
  setAnchorElement: PropTypes.func.isRequired,
};

export default EditTypePopoverBtns;

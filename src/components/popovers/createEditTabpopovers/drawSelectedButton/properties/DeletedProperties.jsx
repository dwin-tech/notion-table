import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import UndoIcon from "@mui/icons-material/Undo";
import DeleteIcon from "@mui/icons-material/Delete";
import GoBackComponent from "../../../../goBackButton/GoBackButton";
import {
  changeSelectedPropertyForEdit,
  changeToggleDeleteDialog,
  changeToggleDeletedProperties,
  deleteProperty,
} from "../../../../../features/tableDataInfo/tableDataInfoSlice";
import {
  changeShowCreateTabPopover,
  changeShowView,
  changeToggleAddPropertyPopover,
} from "../../../../../features/showPopoversInfo/showPopoverInfoSlice";
import style from "./properties.module.scss";
import propertyIcons from "../../../../propertyIcons/propertyIcons";
import DeleteDialog from "../../../../deleteDialog/DeleteDialog";

export default function DeletedProperties() {
  const dispatch = useDispatch();

  const { data, toggleDeleteDialog } = useSelector(
    (store) => store.tableDataInfo
  );

  const onCloseBtn = () => {
    dispatch(changeShowView(false));
    dispatch(changeShowCreateTabPopover(false));
    dispatch(changeToggleDeletedProperties());
  };

  const unDeleteProperty = (id) => {
    dispatch(changeSelectedPropertyForEdit(id));
    dispatch(changeToggleDeletedProperties());
    dispatch(changeToggleAddPropertyPopover(true));
  };

  const deletedData = data.filter((e) => e.deleted);

  const onDelete = (id) => {
    dispatch(changeToggleDeleteDialog(false));
    dispatch(deleteProperty(id));
  };

  return (
    <div>
      <div className={style.go_back_close_container}>
        <GoBackComponent
          text="Deleted properties"
          onChange={changeToggleDeletedProperties}
        />
        <button
          type="submit"
          onClick={onCloseBtn}
          className={style.onclose_btn}
        >
          <CloseIcon />
        </button>
      </div>
      <div>
        {deletedData.map((item) => (
          <div key={item.id} className={style.deleted_container}>
            <div>
              {propertyIcons[item.type]}
              <p>{item.title}</p>
            </div>
            <div>
              <UndoIcon
                onClick={() => unDeleteProperty(item.id)}
                className={style.back_delete_btns}
              />
              <DeleteIcon
                onClick={() => {
                  dispatch(changeToggleDeleteDialog(true));
                }}
                className={style.back_delete_btns}
              />
              {toggleDeleteDialog && (
                <DeleteDialog
                  onDelete={onDelete}
                  id={item.id}
                  text="Are you sure you want to delete this property ?"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

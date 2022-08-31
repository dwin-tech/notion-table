import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import UndoIcon from "@mui/icons-material/Undo";
import DeleteIcon from "@mui/icons-material/Delete";
import GoBackComponent from "../../../../goBackButton/GoBackButton";
import {
  changeSelectedPropertyForEdit,
  changeToggleDeletedDialog,
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
import DeletedDialog from "../../../../deletedDialog/DeletedDialog";

export default function DeletedProperties() {
  const dispatch = useDispatch();

  const { data, toggleDeletedDialog } = useSelector(
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
    dispatch(changeToggleDeletedDialog(false));
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
        {deletedData.map((e, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i} className={style.deleted_container}>
            <div>
              {propertyIcons[e.type]}
              <p>{e.title}</p>
            </div>
            <div>
              <UndoIcon
                onClick={() => unDeleteProperty(e.id)}
                className={style.back_delete_btns}
              />
              <DeleteIcon
                onClick={() => {
                  dispatch(changeToggleDeletedDialog(true));
                }}
                className={style.back_delete_btns}
              />
              {toggleDeletedDialog && (
                <DeletedDialog onDelete={onDelete} id={e.id} type="property" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

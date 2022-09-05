import React from "react";
import { useDispatch, useSelector } from "react-redux";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import propertyIcons from "../../../../propertyIcons/propertyIcons";
import basicTypeProperties, {
  advancedTypeProperties,
} from "../../../../typeOfProperties/typeOfProperties";
import style from "./properties.module.scss";
import {
  changeDeletePropertyInItem,
  changeSelectedPropertyHide,
  changeToggleDeletedDialog,
  changetoggleEditTypeDrawer,
} from "../../../../../features/tableDataInfo/tableDataInfoSlice";
import DeletedDialog from "../../../../deleteDialog/DeleteDialog";
import { changeToggleAddPropertyPopover } from "../../../../../features/showPopoversInfo/showPopoverInfoSlice";

export default function EditPropertiesButtons() {
  const dispatch = useDispatch();
  const { selectedPropertyForEdit, toggleDeletedDialog } = useSelector(
    (store) => store.tableDataInfo
  );

  const onDelete = () => {
    dispatch(changeToggleDeletedDialog(false));
    dispatch(
      changeDeletePropertyInItem({
        id: selectedPropertyForEdit?.id,
        value: true,
      })
    );
    dispatch(changeToggleAddPropertyPopover(false));
  };

  return (
    <div className={style.edit_property_btns}>
      <button
        type="submit"
        onClick={() => {
          if (selectedPropertyForEdit?.type !== "title") {
            dispatch(changetoggleEditTypeDrawer(false));
          }
        }}
      >
        <p>Type</p>
        <div>
          {propertyIcons[selectedPropertyForEdit.type]}
          <p>
            {basicTypeProperties[selectedPropertyForEdit.type] ||
              advancedTypeProperties[selectedPropertyForEdit.type] ||
              "Title"}
          </p>
          <KeyboardArrowRightIcon />
        </div>
      </button>
      {selectedPropertyForEdit?.type !== "title" ? (
        <>
          <div className={style.border_bottom} />
          <div>
            <button
              type="submit"
              onClick={() =>
                dispatch(
                  changeSelectedPropertyHide(selectedPropertyForEdit?.id)
                )
              }
            >
              <div>
                {selectedPropertyForEdit.hide ? (
                  <RemoveRedEyeIcon />
                ) : (
                  <VisibilityOffIcon />
                )}{" "}
                <p>{selectedPropertyForEdit.hide ? "Show" : "Hide"} in view</p>
              </div>
            </button>
            <button type="submit">
              <div>
                <ContentCopyIcon />
                <p>Duplicate property</p>
              </div>
            </button>
            <button
              type="submit"
              onClick={() => {
                dispatch(changeToggleDeletedDialog(true));
              }}
            >
              <div>
                <DeleteIcon />
                <p>Delete property</p>
              </div>
            </button>
            {toggleDeletedDialog && (
              <DeletedDialog
                onDelete={onDelete}
                text="Are you sure? This property will be deleted for everyone on Task title"
              />
            )}
          </div>
        </>
      ) : null}
    </div>
  );
}

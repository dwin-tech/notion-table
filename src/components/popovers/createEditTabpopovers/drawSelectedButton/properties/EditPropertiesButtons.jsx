import React, { useState, useEffect } from "react";
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
  changeToggleDeleteDialog,
  changetoggleEditTypeDrawer,
} from "../../../../../features/tableDataInfo/tableDataInfoSlice";
import DeleteDialog from "../../../../deleteDialog/DeleteDialog";
import { changeToggleAddPropertyPopover } from "../../../../../features/showPopoversInfo/showPopoverInfoSlice";

export default function EditPropertiesButtons() {
  const dispatch = useDispatch();
  const { selectedPropertyForEdit, toggleDeleteDialog } = useSelector(
    (store) => store.tableDataInfo
  );
  const [propertyIcon, setPropertyIcon] = useState();
  const [basicOrAdvancedIcons, setBasicOrAdvancedIcons] = useState();

  const onDelete = () => {
    dispatch(changeToggleDeleteDialog(false));
    dispatch(
      changeDeletePropertyInItem({
        id: selectedPropertyForEdit?.id,
        value: true,
      })
    );
    dispatch(changeToggleAddPropertyPopover(false));
  };

  useEffect(() => {
    if (selectedPropertyForEdit) {
      setPropertyIcon(propertyIcons[selectedPropertyForEdit.type]);
      setBasicOrAdvancedIcons(
        basicTypeProperties[selectedPropertyForEdit.type] ||
          advancedTypeProperties[selectedPropertyForEdit.type]
      );
    }
  }, [selectedPropertyForEdit]);

  return (
    <div className={style.edit_property_btns}>
      <button
        type="submit"
        onClick={() => {
          if (selectedPropertyForEdit?.type !== "title") {
            dispatch(changetoggleEditTypeDrawer(true));
          }
        }}
      >
        <p>Type</p>
        <div>
          {propertyIcon}
          <p>{basicOrAdvancedIcons}</p>
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
                dispatch(changeToggleDeleteDialog(true));
              }}
            >
              <div>
                <DeleteIcon />
                <p>Delete property</p>
              </div>
            </button>
            {toggleDeleteDialog && (
              <DeleteDialog
                onDelete={onDelete}
                id={selectedPropertyForEdit.id}
                text="Are you sure? This property will be deleted for everyone on Task title"
              />
            )}
          </div>
        </>
      ) : null}
    </div>
  );
}

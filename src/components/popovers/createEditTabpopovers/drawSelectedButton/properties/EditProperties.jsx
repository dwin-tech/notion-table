import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import GoBackComponent from "../../../../goBackButton/GoBackButton";
import style from "./properties.module.scss";
import {
  changeShowCreateTabPopover,
  changeShowView,
  changeToggleAddPropertyPopover,
} from "../../../../../features/showPopoversInfo/showPopoverInfoSlice";
import CustomInputWithValue from "../../../../custom/CustomInputWithValue";
import {
  addNewPropertyNames,
  changeSelectedPropertyTitle,
} from "../../../../../features/tableDataInfo/tableDataInfoSlice";
import EditPropertiesButtons from "./EditPropertiesButtons";
import EditTypeDrawing from "./EditTypeDrawing";
import chekedNewTitle from "../../../../../utils/chekedNewTitle";

export default function EditProperties() {
  const dispatch = useDispatch();

  const { propertyNames, selectedPropertyForEdit, toggleEditTypeDrawer } =
    useSelector((store) => store.tableDataInfo);

  const [customInputValue, setCustomInputValue] = useState("");
  const closeButton = () => {
    dispatch(changeShowCreateTabPopover(false));
    dispatch(changeShowView(false));
    dispatch(changeToggleAddPropertyPopover(false));
  };

  const changePropertiesInputValue = (val) => {
    const newTitle = chekedNewTitle(val, propertyNames);
    dispatch(
      addNewPropertyNames({
        id: selectedPropertyForEdit.id,
        value: newTitle,
      })
    );
    dispatch(
      changeSelectedPropertyTitle({
        id: selectedPropertyForEdit.id,
        value: newTitle,
      })
    );
  };

  const chekedIncludesTitleInData = (val) => {
    const newValue = chekedNewTitle(val, propertyNames);
    if (val !== newValue) {
      setCustomInputValue(val);
    } else {
      setCustomInputValue("");
    }
  };
  return (
    <div>
      {toggleEditTypeDrawer ? (
        <EditTypeDrawing />
      ) : (
        <>
          <div className={style.go_back_container}>
            <GoBackComponent
              text="Edit properties"
              onChange={changeToggleAddPropertyPopover}
            />
            <button
              type="submit"
              className={style.onclose_btn}
              onClick={closeButton}
            >
              <CloseIcon />
            </button>
          </div>
          <CustomInputWithValue
            value={selectedPropertyForEdit.title}
            placeholder="Search for a property"
            onChange={chekedIncludesTitleInData}
            onBlur={changePropertiesInputValue}
          />
          {customInputValue && (
            <p className={style.name_include_text}>
              A property named {customInputValue} already exists in this
              database.
            </p>
          )}
          <EditPropertiesButtons />
        </>
      )}
    </div>
  );
}

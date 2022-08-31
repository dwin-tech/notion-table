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
import { changeSelectedPropertyTitle } from "../../../../../features/tableDataInfo/tableDataInfoSlice";
import EditPropertiesButtons from "./EditPropertiesButtons";

export default function EditProperties() {
  const dispatch = useDispatch();

  const { propertyNames, selectedPropertyForEdit } = useSelector(
    (store) => store.tableDataInfo
  );

  const [customInputValue, setCustomInputValue] = useState(false);
  const closeButton = () => {
    dispatch(changeShowCreateTabPopover(false));
    dispatch(changeShowView(false));
    dispatch(changeToggleAddPropertyPopover(false));
  };

  const changePropertiesInputValue = (val) => {
    dispatch(
      changeSelectedPropertyTitle({
        id: selectedPropertyForEdit.id,
        value: val,
      })
    );
  };

  const chekedIncludesTitleInData = (val) => {
    if (
      selectedPropertyForEdit.title !== val &&
      Object.values(propertyNames).includes(val)
    ) {
      setCustomInputValue(val);
    } else setCustomInputValue("");
  };
  return (
    <div>
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
        <p>
          A property named {customInputValue} already exists in this database.
        </p>
      )}
      <EditPropertiesButtons />
    </div>
  );
}

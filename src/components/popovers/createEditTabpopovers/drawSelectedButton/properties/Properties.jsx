import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../../../../custom/CustomInput";
import GoBackComponent from "../../../../goBackButton/GoBackButton";
import style from "./properties.module.scss";
import {
  changeShowCreateTabPopover,
  changeShowView,
  changeToggleAddPropertyPopover,
} from "../../../../../features/showPopoversInfo/showPopoverInfoSlice";
import CustomInputWithValue from "../../../../custom/CustomInputWithValue";
import EditProperties from "./EditProperties";
import DefaultProperties from "./DefaultProperties";

function Properties() {
  const dispatch = useDispatch();
  const { toggleAddPropertyPopover } = useSelector(
    (store) => store.showPopoverInfo
  );
  const [propertiesInputValue, setPropertiesInputValue] = useState("");

  const changePropertiesInputValue = (val) => {
    setPropertiesInputValue(val);
  };

  const closeButton = () => {
    dispatch(changeShowCreateTabPopover(false));
    setTimeout(() => {
      dispatch(changeShowView(false));
    }, 500);
  };
  return (
    <div>
      <div className={style.go_back_close_container}>
        <GoBackComponent
          text={toggleAddPropertyPopover ? "Edit property" : "Properties"}
          onChange={
            toggleAddPropertyPopover
              ? changeToggleAddPropertyPopover
              : changeShowView
          }
        />
        <button
          type="submit"
          className={style.onclose_btn}
          onClick={closeButton}
        >
          <CloseIcon />
        </button>
      </div>
      <div>
        {!toggleAddPropertyPopover ? (
          <CustomInput
            onChange={changePropertiesInputValue}
            placeholder="Search for a property..."
          />
        ) : (
          <CustomInputWithValue
            value={propertiesInputValue}
            onChange={changePropertiesInputValue}
            placeholder="Property name"
          />
        )}
      </div>
      {toggleAddPropertyPopover ? <EditProperties /> : <DefaultProperties />}
    </div>
  );
}

export default Properties;

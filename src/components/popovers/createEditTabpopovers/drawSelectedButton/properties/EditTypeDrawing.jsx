import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { v4 as uuidv4 } from "uuid";
import {
  changeShowCreateTabPopover,
  changeShowView,
  changeToggleAddPropertyPopover,
} from "../../../../../features/showPopoversInfo/showPopoverInfoSlice";
import {
  addNewPropertyNames,
  addPropertyInToData,
  changeSelectedPropertyForEdit,
  changeSelectedPropertyType,
  changeToggleAddNewPropertyType,
  changetoggleEditTypeDrawer,
} from "../../../../../features/tableDataInfo/tableDataInfoSlice";
import GoBackComponent from "../../../../goBackButton/GoBackButton";
import propertyIcons from "../../../../propertyIcons/propertyIcons";
import basicTypeProperties, {
  advancedTypeProperties,
} from "../../../../typeOfProperties/typeOfProperties";
import style from "./properties.module.scss";
import CustomInputWithValue from "../../../../custom/CustomInputWithValue";
import chekedNewTitle from "../../../../../utils/chekedNewTitle";

export default function EditTypeDrawing() {
  const {
    data,
    selectedPropertyForEdit,
    toggleAddNewPropertyType,
    propertyNames,
  } = useSelector((store) => store.tableDataInfo);
  const [searchPropertyTypeInput, setSearchPropertyTypeInput] = useState("");
  const dispatch = useDispatch();
  const closeButton = () => {
    dispatch(changeShowCreateTabPopover(false));
    dispatch(changeShowView(false));
    dispatch(changeToggleAddPropertyPopover(false));
    dispatch(changetoggleEditTypeDrawer(false));
  };

  const selectNewType = (type) => {
    if (toggleAddNewPropertyType) {
      const newTitle = chekedNewTitle(type, propertyNames);
      const id = uuidv4();
      dispatch(addNewPropertyNames({ id, value: newTitle }));
      dispatch(
        addPropertyInToData({
          id,
          type,
          title: newTitle,
          hide: false,
          deleted: false,
          data: new Array(data[0].data.length).fill().map(() => {
            return { id: uuidv4(), value: "" };
          }),
        })
      );
      dispatch(changeSelectedPropertyForEdit(id));
      dispatch(changeToggleAddNewPropertyType(false));
    } else {
      const newTitle = chekedNewTitle(type, propertyNames);
      dispatch(
        addNewPropertyNames({
          id: selectedPropertyForEdit?.id,
          value: newTitle,
        })
      );
      dispatch(
        changeSelectedPropertyType({
          id: selectedPropertyForEdit?.id,
          type: newTitle,
        })
      );
    }
    dispatch(changetoggleEditTypeDrawer(false));
  };

  const changeSearchPropertyInputValue = (val) => {
    setSearchPropertyTypeInput(val);
  };

  return (
    <div className={style.edit_type_section}>
      <div className={style.go_back_container}>
        <GoBackComponent
          text="Choose property type"
          onChange={changetoggleEditTypeDrawer}
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
        value={searchPropertyTypeInput}
        onChange={changeSearchPropertyInputValue}
        onBlur={changeSearchPropertyInputValue}
        placeholder="Search for a property type..."
      />
      <p>Basic</p>
      <div className={style.type_container}>
        {Object.entries(basicTypeProperties).map((e, i) => (
          <button
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            type="submit"
            onClick={() => selectNewType(e[0])}
          >
            <div>
              {propertyIcons[e[0]]}
              <p>{e[1]}</p>
            </div>
            {selectedPropertyForEdit?.type === e[0] &&
              !toggleAddNewPropertyType && <CheckIcon />}
          </button>
        ))}
      </div>
      <p>Advanced</p>
      <div className={style.type_container}>
        {Object.entries(advancedTypeProperties).map((e, i) => (
          <button
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            type="submit"
            onClick={() => selectNewType(e[0])}
          >
            <div>
              {propertyIcons[e[0]]}
              <p>{e[1]}</p>
            </div>
            {selectedPropertyForEdit?.type === e[0] &&
              !toggleAddNewPropertyType && <CheckIcon />}
          </button>
        ))}
      </div>
    </div>
  );
}

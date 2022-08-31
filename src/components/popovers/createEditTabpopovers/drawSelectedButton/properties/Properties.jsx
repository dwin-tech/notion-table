// eslint-disable-next-line no-unused-vars
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
// import DeletedProperties from "./DeletedProperties";
import PropertiesButtons from "./PropertiesButtons";
import { changeSelectedPropertyTitle } from "../../../../../features/tableDataInfo/tableDataInfoSlice";

function Properties() {
  const dispatch = useDispatch();
  const { toggleAddPropertyPopover } = useSelector(
    (store) => store.showPopoverInfo
  );
  const toggleDeletedProperties = useSelector(
    (store) => store.tableDataInfo.toggleDeletedProperties
  );
  const { selectedPropertyForEdit, propertyNames } = useSelector(
    (store) => store.tableDataInfo
  );
  const [chekedTitle, setChekedTitle] = useState(false);
  // const [propertiesInputValue, setPropertiesInputValue] = useState("");

  // eslint-disable-next-line no-unused-vars
  const changePropertiesInputValue = (val) => {
    dispatch(
      changeSelectedPropertyTitle({
        id: selectedPropertyForEdit.id,
        value: val,
      })
    );
  };

  const chekedIncludesTitleInData = (val) => {
    if (selectedPropertyForEdit.title !== val) {
      setChekedTitle(Object.values(propertyNames).includes(val));
    }
  };

  const closeButton = () => {
    dispatch(changeShowCreateTabPopover(false));
    setTimeout(() => {
      dispatch(changeShowView(false));
    }, 500);
  };

  return (
    <div>
      {toggleDeletedProperties ? (
        // <DeletedProperties />
        <div>hhhh</div>
      ) : (
        <>
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
                value={selectedPropertyForEdit?.title}
                onBlur={changePropertiesInputValue}
                onChange={chekedIncludesTitleInData}
                placeholder="Property name"
              />
            )}
            {chekedTitle && (
              <div>A property named Name already exists in this database</div>
            )}
          </div>
          {toggleAddPropertyPopover ? (
            <EditProperties />
          ) : (
            <>
              <DefaultProperties />
              <PropertiesButtons />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Properties;

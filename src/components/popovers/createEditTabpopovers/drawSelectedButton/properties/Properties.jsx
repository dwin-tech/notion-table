import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../../../../custom/CustomInput";
import GoBackComponent from "../../../../goBackButton/GoBackButton";
import style from "./properties.module.scss";
import {
  changeShowCreateTabPopover,
  changeShowView,
} from "../../../../../features/showPopoversInfo/showPopoverInfoSlice";
import EditProperties from "./EditProperties";
import DefaultProperties from "./DefaultProperties";
import DeletedProperties from "./DeletedProperties";
import PropertiesButtons from "./PropertiesButtons";
import { changeSelectedPropertyTitle } from "../../../../../features/tableDataInfo/tableDataInfoSlice";

export default function Properties() {
  const dispatch = useDispatch();
  const { toggleAddPropertyPopover } = useSelector(
    (store) => store.showPopoverInfo
  );
  const toggleDeletedProperties = useSelector(
    (store) => store.tableDataInfo.toggleDeletedProperties
  );
  const { selectedPropertyForEdit } = useSelector(
    (store) => store.tableDataInfo
  );

  const changePropertiesInputValue = (val) => {
    dispatch(
      changeSelectedPropertyTitle({
        id: selectedPropertyForEdit.id,
        value: val,
      })
    );
  };

  const closeButton = () => {
    dispatch(changeShowCreateTabPopover(false));
    dispatch(changeShowView(false));
  };

  const renderAddOrDeletePopoverContent = () => {
    if (toggleAddPropertyPopover) {
      return <EditProperties />;
    }
    if (toggleDeletedProperties) {
      return <DeletedProperties />;
    }
    return null;
  };

  return (
    <div>
      {renderAddOrDeletePopoverContent() || (
        <>
          <div className={style.go_back_close_container}>
            <GoBackComponent text="Properties" onChange={changeShowView} />
            <button
              type="submit"
              className={style.onclose_btn}
              onClick={closeButton}
            >
              <CloseIcon />
            </button>
          </div>
          <div>
            <CustomInput
              onChange={changePropertiesInputValue}
              placeholder="Search for a property..."
            />
          </div>
          <DefaultProperties />
          <PropertiesButtons />
        </>
      )}
    </div>
  );
}

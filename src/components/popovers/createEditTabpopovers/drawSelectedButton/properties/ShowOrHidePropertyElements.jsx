import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import {
  changeSelectedPropertyForEdit,
  toggleHideAItemProperty,
  toggleHidePropertyInToData,
} from "../../../../../features/tableDataInfo/tableDataInfoSlice";
import style from "./properties.module.scss";
import { changeToggleAddPropertyPopover } from "../../../../../features/showPopoversInfo/showPopoverInfoSlice";
import ShowDataContent from "./ShowDataContent";
import HideDataContent from "./HideDataContent";

function ShowOrHidePropertyElements({
  type,
  text,
  buttonName,
  searchPropertyInput,
}) {
  const dispatch = useDispatch();
  const tableData = useSelector((store) => store.tableDataInfo.data);

  const handleMoveToEditFieldBtnClick = (id) => {
    dispatch(changeSelectedPropertyForEdit(id));
    dispatch(changeToggleAddPropertyPopover(true));
  };

  const handleChangeShowPropertyData = (event, id, value) => {
    event.stopPropagation();
    dispatch(toggleHideAItemProperty({ id, value }));
  };

  return (
    <div className={style.show_hide_properties}>
      {type === "hide" &&
      !tableData.filter((data) => data.hide && !data.deleted).length ? null : (
        <div className={style.shown_hidden_container}>
          <p>{text} in table</p>
          <button
            type="submit"
            className={style.hide_show_btn}
            onClick={() =>
              dispatch(toggleHidePropertyInToData(type === "show"))
            }
          >
            {buttonName} all
          </button>
        </div>
      )}
      {type === "show" ? (
        <ShowDataContent
          type={type}
          handleMoveToEditFieldBtnClick={handleMoveToEditFieldBtnClick}
          handleChangeShowPropertyData={handleChangeShowPropertyData}
          searchPropertyInput={searchPropertyInput}
        />
      ) : (
        <HideDataContent
          type={type}
          handleMoveToEditFieldBtnClick={handleMoveToEditFieldBtnClick}
          handleChangeShowPropertyData={handleChangeShowPropertyData}
          searchPropertyInput={searchPropertyInput}
        />
      )}
    </div>
  );
}

ShowOrHidePropertyElements.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
  searchPropertyInput: PropTypes.string.isRequired,
};

export default ShowOrHidePropertyElements;

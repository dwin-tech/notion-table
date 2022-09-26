/* eslint-disable no-param-reassign */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CustomInputWithValue from "../custom/CustomInputWithValue";
import style from "./popoverOfButton.module.scss";
import EditTypePopover from "./EditTypePopover";
import checkNewTitle from "../../utils/checkNewTitle";
import {
  changeSelectedValueInView,
  changeShowCreateTabPopover,
  changeShowView,
  changeToggleAddPropertyPopover,
} from "../../features/showPopoversInfo/showPopoverInfoSlice";
import { PROPERTIES } from "../../constants/headerContantes/headerConstantes";
import {
  changeSelectedPropertyForEdit,
  changeSelectedPropertyTitle,
} from "../../features/tableDataInfo/tableDataInfoSlice";
import SortAndFilterBtnsContent from "./SortAndFilterBtnsContent";

function ContentOfPropertyPopover({ item, setAnchorElement }) {
  const dispatch = useDispatch();
  const { propertyNames } = useSelector((store) => store.tableDataInfo);
  const [customInputValue, setCustomInputValue] = useState("");
  const isTitleInData = (val) => {
    val = val.trim();
    const newValue = checkNewTitle(val, propertyNames);
    setCustomInputValue(val !== newValue ? val : "");
  };

  const handleOpenEditPopover = () => {
    dispatch(changeShowCreateTabPopover(true));
    dispatch(changeSelectedValueInView(PROPERTIES));
    dispatch(changeShowView(true));
    dispatch(changeSelectedPropertyForEdit(item.id));
    dispatch(changeToggleAddPropertyPopover(true));
  };

  const handleChangePropertyName = (value) => {
    dispatch(changeSelectedPropertyTitle({ id: item.id, value }));
  };

  return (
    <div>
      <CustomInputWithValue
        value={item.title}
        onChange={isTitleInData}
        placeholder="Property name"
        onBlur={handleChangePropertyName}
      />
      {customInputValue && (
        <p className={style.name_include_text}>
          A property named {customInputValue} already exists in this database.
        </p>
      )}
      <EditTypePopover setAnchorElement={setAnchorElement} item={item} />
      <button
        type="submit"
        className={style.property_popover_btns}
        onClick={handleOpenEditPopover}
      >
        <div>
          <MenuOpenIcon />
          <p>Edit property</p>
        </div>
      </button>
      <div className={style.border_top} />
      <SortAndFilterBtnsContent
        item={item}
        setAnchorElement={setAnchorElement}
      />
    </div>
  );
}

ContentOfPropertyPopover.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
  setAnchorElement: PropTypes.func.isRequired,
};

export default ContentOfPropertyPopover;

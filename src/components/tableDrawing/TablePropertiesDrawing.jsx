import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import style from "./tableDrawing.module.scss";
import {
  changeSelectedValueInView,
  changeShowCreateTabPopover,
  changeShowView,
  changeToggleAddPropertyPopover,
} from "../../features/showPopoversInfo/showPopoverInfoSlice";
import { PROPERTIES } from "../../constants/headerContantes/headerConstantes";
import PopoverOfButton from "../tablePropertyButtonWithPopover/PopoverOfButton";
import {
  addNewFieldForData,
  changeToggleAddNewPropertyType,
  changetoggleEditTypeDrawer,
} from "../../features/tableDataInfo/tableDataInfoSlice";
import TableDataStructure from "./TableDataStructure";
import CalculateButtonsDrawing from "./CalculateButtonsDrawing";

export default function TablePropertiesDrawing() {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store?.tableDataInfo);
  const showData = data.filter((item) => !item.hide && !item.deleted);

  const addProperty = () => {
    dispatch(changeShowCreateTabPopover(true));
    dispatch(changeSelectedValueInView(PROPERTIES));
    dispatch(changeShowView(true));
    dispatch(changeToggleAddPropertyPopover(true));
    dispatch(changetoggleEditTypeDrawer(true));
    dispatch(changeToggleAddNewPropertyType(true));
  };

  const openPropertiesField = () => {
    dispatch(changeShowCreateTabPopover(true));
    dispatch(changeSelectedValueInView(PROPERTIES));
    dispatch(changeShowView(true));
  };

  return (
    <div className={style.table_container}>
      <div className={style.property_container}>
        {showData.map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <PopoverOfButton item={item} key={i} index={i} />
        ))}
        <button
          type="submit"
          className={style.add_property_btn}
          onClick={addProperty}
        >
          <AddIcon />
        </button>
        <button
          type="submit"
          className={style.more_property_btn}
          onClick={openPropertiesField}
        >
          <MoreHorizIcon />
        </button>
      </div>
      {showData[0].data.length ? (
        <TableDataStructure />
      ) : (
        <button
          type="submit"
          className={style.add_new_item_btn}
          onClick={() => dispatch(addNewFieldForData())}
        >
          Empty table.
        </button>
      )}
      <button
        type="submit"
        className={style.add_new_item_btn}
        onClick={() => dispatch(addNewFieldForData())}
      >
        <AddIcon />
        <p>New</p>
      </button>
      <CalculateButtonsDrawing />
    </div>
  );
}

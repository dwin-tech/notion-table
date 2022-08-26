import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// eslint-disable-next-line no-unused-vars
import { v4 as uuidv4 } from "uuid";
import style from "./tableDrawing.module.scss";
// eslint-disable-next-line no-unused-vars
import { addPropertyInToData } from "../../features/tableDataInfo/tableDataInfoSlice";
import { getDatainToStorage } from "../../utils/callLocalStorage";
import {
  changeSelectedValueInView,
  changeShowCreateTabPopover,
  changeShowView,
  changeToggleAddPropertyPopover,
  // eslint-disable-next-line no-unused-vars
  // changeTogglePropertyPopover,
} from "../../features/showPopoversInfo/showPopoverInfoSlice";
import { PROPERTIES } from "../../constants/headerContantes/headerConstantes";
import PopoverOfButton from "../tablePropertyButtonWithPopover/PopoverOfButton";

function TableDrawing() {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [propertyCounter, setPropertyCounter] = useState(1);
  const tableData = useSelector((store) => store?.tableDataInfo?.data);
  const showData = tableData.filter((e) => !e.hide);

  const addProperty = () => {
    dispatch(changeShowCreateTabPopover(true));
    dispatch(changeSelectedValueInView(PROPERTIES));
    dispatch(changeShowView(true));
    dispatch(changeToggleAddPropertyPopover(true));
  };

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const counter = getDatainToStorage("property-counter");
  }, []);
  return (
    <div className={style.table_container}>
      <div className={style.property_container}>
        {showData.map((e, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <PopoverOfButton title={e?.title} key={e.title + i} type={e?.type} />
        ))}
        <button
          type="submit"
          className={style.add_property_btn}
          onClick={addProperty}
        >
          <AddIcon />
        </button>
        <button type="submit" className={style.more_property_btn}>
          <MoreHorizIcon />
        </button>
      </div>
    </div>
  );
}

export default TableDrawing;

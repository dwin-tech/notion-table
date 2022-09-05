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
  changeToggleAddNewPropertyType,
  changetoggleEditTypeDrawer,
} from "../../features/tableDataInfo/tableDataInfoSlice";

export default function TableDrawing() {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store?.tableDataInfo);
  const showData = data.filter((e) => !e.hide);
  showData.filter((e) => !e.deleted);

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
        {showData
          .filter((e) => !e.deleted)
          .map((e, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <PopoverOfButton title={e?.title} key={i} type={e?.type} />
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
    </div>
  );
}

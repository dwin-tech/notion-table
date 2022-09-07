import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import style from "./tableDrawing.module.scss";
import PopoverOfButton from "../tablePropertyButtonWithPopover/PopoverOfButton";
import { addNewFieldForData } from "../../features/tableDataInfo/tableDataInfoSlice";
import TableDataStructure from "./TableDataStructure";
import CalculateButtonsDrawing from "./CalculateButtonsDrawing";
import addProperty, {
  openPropertiesField,
} from "./tablePropertiesDrawingFunctions";

export default function TablePropertiesDrawing() {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store?.tableDataInfo);
  const showData = data.filter((item) => !item.hide && !item.deleted);

  return (
    <div className={style.table_container}>
      <div className={style.property_container}>
        {showData.map((item, i) => (
          <PopoverOfButton item={item} key={item.id} index={i} />
        ))}
        <button
          type="submit"
          className={style.add_property_btn}
          onClick={() => addProperty(dispatch)}
        >
          <AddIcon />
        </button>
        <button
          type="submit"
          className={style.more_property_btn}
          onClick={() => openPropertiesField(dispatch)}
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

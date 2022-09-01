import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import style from "./properties.module.scss";
import { changeToggleDeletedProperties } from "../../../../../features/tableDataInfo/tableDataInfoSlice";

export default function PropertiesButtons() {
  const dispatch = useDispatch();
  const tableData = useSelector((store) => store.tableDataInfo.data);

  const countOfDeletedProperties = tableData.filter((e) => e.deleted).length;

  return (
    <div>
      {countOfDeletedProperties ? (
        <button
          type="submit"
          className={style.property_btns_second_part}
          onClick={() => dispatch(changeToggleDeletedProperties())}
        >
          <div>
            <DeleteIcon />
            <p>Deleted properties</p>
          </div>
          <div>
            <p>{countOfDeletedProperties}</p>
            <KeyboardArrowRightIcon />
          </div>
        </button>
      ) : null}
      <button type="submit" className={style.property_btns_second_part}>
        <div>
          <AddIcon />
          <p>New property</p>
        </div>
      </button>
      <button type="submit" className={style.property_btns_second_part}>
        <div>
          {" "}
          <HelpOutlineIcon />
          <p>Learn about properties</p>
        </div>
      </button>
      <div className={style.btn_under_border} />
    </div>
  );
}

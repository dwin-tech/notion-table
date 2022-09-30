import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   updatePropertyNames,
//   updateTableData,
// } from "../../features/tableDataInfo/tableDataInfoSlice";
// import setDataIntoStorage, {
//   getDatainToStorage,
// } from "../../utils/callLocalStorage";
import TablePropertiesDrawing from "../tableDrawing/TablePropertiesDrawing";
import style from "./table.module.scss";

function Table() {
  return (
    <div className={style.table_section}>
      <TablePropertiesDrawing />
    </div>
  );
}

export default Table;

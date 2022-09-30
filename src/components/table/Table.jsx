import React from "react";
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

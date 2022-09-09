import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import style from "./tableDrawing.module.scss";

export default function DrawingTableEmptyRows({ setEvnetIndex }) {
  const { data } = useSelector((store) => store.tableDataInfo);

  return (
    <>
      {Array.from({ length: data[0].data.length }, (_, i) => i).map((index) => (
        <div
          className={style.table_data_rows}
          key={index}
          onMouseEnter={() => setEvnetIndex(index)}
        />
      ))}
    </>
  );
}

DrawingTableEmptyRows.propTypes = {
  setEvnetIndex: PropTypes.func.isRequired,
};

import React from "react";
import { useSelector } from "react-redux";
import CalculatePopover from "./CalculatePopover";
import style from "./tableDrawing.module.scss";

function CalculateButtonsDrawing() {
  const { data } = useSelector((store) => store.tableDataInfo);
  const showData = data.filter((el) => !el.hide && !el.deleted);

  return (
    <div className={style.calculate_btns_container}>
      {showData.map((item) => (
        <CalculatePopover key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CalculateButtonsDrawing;

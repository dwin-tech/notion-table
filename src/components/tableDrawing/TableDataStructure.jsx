/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import style from "./tableDrawing.module.scss";
import ItemInfoPopover from "./ItemInfoPopover";
import { addNewFieldForData } from "../../features/tableDataInfo/tableDataInfoSlice";

function TableDataStructure() {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.tableDataInfo);
  let showData = data.filter((el) => !el.hide);
  showData = showData.filter((el) => !el.deleted);
  const [eventIndex, setEvnetIndex] = useState(false);

  return (
    <div>
      <div
        className={style.table_data_container}
        style={{ position: "relative" }}
      >
        {showData.map((el) => (
          <React.Fragment key={el.id}>
            <div className={style.add_drag_icon_container}>
              {data[0].data.map((item, i) => (
                <div onMouseEnter={() => setEvnetIndex(i)} key={i}>
                  {i === eventIndex && (
                    <AddIcon onClick={() => dispatch(addNewFieldForData())} />
                  )}
                  {i === eventIndex && <ItemInfoPopover />}
                </div>
              ))}
            </div>
            <div>
              {el.data.map((item, i) => (
                <input
                  type="text"
                  key={item.value + i}
                  defaultValue={item.value}
                  onMouseEnter={() => setEvnetIndex(i)}
                />
              ))}
            </div>
          </React.Fragment>
        ))}
        <div style={{ width: "100%" }}>
          {data[0].data.map((el, i) => (
            <div
              className={style.table_data_rows}
              key={i}
              onMouseEnter={() => setEvnetIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TableDataStructure;

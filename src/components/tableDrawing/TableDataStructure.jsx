import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import style from "./tableDrawing.module.scss";
import ItemInfoPopover from "./ItemInfoPopover";
import {
  addNewFieldUnderSelectedRow,
  changeValueinPropertyData,
} from "../../features/tableDataInfo/tableDataInfoSlice";

function TableDataStructure() {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.tableDataInfo);
  const showData = data.filter((el) => !el.hide && !el.deleted);

  const [eventIndex, setEvnetIndex] = useState(false);

  return (
    <div>
      <div
        className={style.table_data_container}
        style={{ position: "relative" }}
      >
        {showData.map((elem) => (
          <React.Fragment key={elem.id}>
            <div className={style.add_drag_icon_container}>
              {Array.from(Array(data[0].data.length).keys()).map((_, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <div onMouseEnter={() => setEvnetIndex(index)} key={index}>
                  {index === eventIndex && (
                    <AddIcon
                      onClick={() =>
                        dispatch(addNewFieldUnderSelectedRow(index))
                      }
                    />
                  )}
                  {index === eventIndex && <ItemInfoPopover index={index} />}
                </div>
              ))}
            </div>
            <div>
              {elem.data.map((item, i) => (
                <input
                  type="text"
                  // eslint-disable-next-line react/no-array-index-key
                  key={i}
                  defaultValue={item.value}
                  onBlur={(evt) =>
                    dispatch(
                      changeValueinPropertyData({
                        id: elem.id,
                        index: i,
                        value: evt.target.value,
                      })
                    )
                  }
                  onMouseEnter={() => setEvnetIndex(i)}
                />
              ))}
            </div>
          </React.Fragment>
        ))}
        <div style={{ width: "100%" }}>
          {Array.from(Array(data[0].data.length).keys()).map((index) => (
            <div
              className={style.table_data_rows}
              key={index}
              onMouseEnter={() => setEvnetIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TableDataStructure;

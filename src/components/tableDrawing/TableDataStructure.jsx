/* eslint-disable no-unused-expressions */
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import { v4 as uuidv4 } from "uuid";
import { addNewFieldUnderSelectedRow } from "../../features/tableDataInfo/tableDataInfoSlice";
import AppropriateElementSelector from "./AppropriateElementSelector";
import ItemInfoPopover from "./ItemInfoPopover";
import style from "./tableDrawing.module.scss";

export default function TableDataStructure() {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.tableDataInfo);

  const showData = data.filter((el) => !el.hide && !el.deleted);

  const changeStructureData = () => {
    return showData?.reduce((acc, el) => {
      el.data.forEach((item, i) => {
        const changedData = {
          ...item,
          type: el.type,
          index: i,
          parrentId: el.id,
        };
        !acc[i] ? (acc[i] = [changedData]) : acc[i].push(changedData);
      });
      return acc;
    }, []);
  };

  const neweData = useMemo(() => {
    return changeStructureData();
  }, [data]);

  return (
    <div className={style.data_input_container}>
      {neweData.map((el) => (
        <div key={uuidv4()} className={style.data_rows} draggable>
          {el.map((item, index) => (
            <React.Fragment key={item.parrentId}>
              {index === 0 && (
                <div className={style.icons_section}>
                  <div className={style.icons_container}>
                    <AddIcon
                      onClick={() =>
                        dispatch(addNewFieldUnderSelectedRow(item.index))
                      }
                    />
                    <ItemInfoPopover index={item.index} />
                  </div>
                </div>
              )}
              <AppropriateElementSelector item={item} />
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
}

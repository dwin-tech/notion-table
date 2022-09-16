import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
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
        if (acc[i]) {
          acc[i].push({
            ...item,
            type: el.type,
            index: i,
            parrentId: el.id,
          });
        } else {
          acc[i] = [
            {
              ...item,
              type: el.type,
              index: i,
              parrentId: el.id,
            },
          ];
        }
      });
      return acc;
    }, []);
  };

  const neweData = useMemo(() => {
    return changeStructureData();
  }, [data]);

  return (
    <div className={style.data_input_container}>
      {neweData.map((el, i) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          className={style.data_rows}
          draggable
        >
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

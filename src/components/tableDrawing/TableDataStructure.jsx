/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-expressions */
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import {
  addNewFieldUnderSelectedRow,
  dragAndDropRows,
} from "../../features/tableDataInfo/tableDataInfoSlice";
import AppropriateElementSelector from "./AppropriateElementSelector";
import style from "./tableDrawing.module.scss";
import ItemInfoPopover from "./ItemInfoPopover";

export default function TableDataStructure() {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.tableDataInfo);
  const searchDataInputValue = useSelector(
    (store) => store.tableDataInfo.searchDataInputValue
  );
  const showData = data.filter((el) => !el.hide && !el.deleted);
  const showDataWithSearchValueIndex = () => {
    return showData.reduce((acc, el) => {
      el.data.forEach((item, i) =>
        item.value.includes(searchDataInputValue) && !acc.includes(i)
          ? acc.push(i)
          : acc
      );
      return acc;
    }, []);
  };

  const changeStructureData = () => {
    const indexsArr = showDataWithSearchValueIndex();
    return showData?.reduce((acc, el) => {
      el.data.forEach((item, i) => {
        if (indexsArr.includes(i)) {
          const changedData = {
            ...item,
            type: el.type,
            index: i,
            parrentId: el.id,
          };
          !acc[i] ? (acc[i] = [changedData]) : acc[i].push(changedData);
        }
      });
      return acc;
    }, []);
  };

  const newData = useMemo(() => {
    return changeStructureData();
  }, [data, searchDataInputValue]);

  const handleOnDragEnd = (result) => {
    if (result.destination) {
      dispatch(
        dragAndDropRows({
          sourceIndex: result.source.index,
          destinationIndex: result.destination.index,
        })
      );
    }
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="rowDropps">
        {(provided) => (
          <div
            className={style.data_input_container}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {newData.map((el, i) => (
              <Draggable key={uuidv4()} draggableId={`${i}`} index={i}>
                {(provide, snapshot) => (
                  <div
                    className={
                      snapshot.isDragging
                        ? style.ondrag_data_rows
                        : style.data_rows
                    }
                    ref={provide.innerRef}
                    {...provide.draggableProps}
                    {...provide.dragHandleProps}
                  >
                    {el.map((item, index) => (
                      <React.Fragment key={item.parrentId}>
                        {index === 0 && (
                          <div className={style.icons_section}>
                            <div className={style.icons_container}>
                              <AddIcon
                                onClick={() =>
                                  dispatch(
                                    addNewFieldUnderSelectedRow(item.index)
                                  )
                                }
                              />
                              <ItemInfoPopover index={item.index} />
                            </div>
                          </div>
                        )}
                        <AppropriateElementSelector key={item.id} item={item} />
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

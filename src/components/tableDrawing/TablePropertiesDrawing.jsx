import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import style from "./tableDrawing.module.scss";
import {
  addNewFieldForData,
  DragAndDropToProperty,
} from "../../features/tableDataInfo/tableDataInfoSlice";
import CalculateButtonsDrawing from "./CalculateButtonsDrawing";
import addProperty, {
  openPropertiesField,
} from "./tablePropertiesDrawingFunctions";
import PropertyButtonAndPopover from "../tablePropertyButtonWithPopover/PropertyButtonAndPopover";
import TableDataStructure from "./TableDataStructure";

export default function TablePropertiesDrawing() {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store?.tableDataInfo);
  const showData = data.filter((item) => !item.hide && !item.deleted);

  const handleDrag = (result) => {
    if (result.destination) {
      dispatch(
        DragAndDropToProperty({
          sourceIndex: result.source.index,
          destinationIndex: result.destination.index,
        })
      );
    }
  };

  return (
    <div className={style.table_container}>
      <div className={style.property_container}>
        <DragDropContext onDragEnd={(result) => handleDrag(result)}>
          <Droppable droppableId="droppable" direction="horizontal">
            {(provided) => (
              <div
                style={{
                  display: "flex",
                }}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {showData.map((item, i) => (
                  <PropertyButtonAndPopover
                    item={item}
                    key={item.id}
                    index={i}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <button
          type="submit"
          className={style.add_property_btn}
          onClick={() => addProperty(dispatch)}
        >
          <AddIcon />
        </button>
        <button
          type="submit"
          className={style.more_property_btn}
          onClick={() => openPropertiesField(dispatch)}
        >
          <MoreHorizIcon />
        </button>
      </div>
      {showData[0].data.length ? (
        <TableDataStructure />
      ) : (
        <button
          type="submit"
          className={style.add_new_item_btn}
          onClick={() => dispatch(addNewFieldForData())}
        >
          Empty table.
        </button>
      )}
      <button
        type="submit"
        className={style.add_new_item_btn}
        onClick={() => dispatch(addNewFieldForData())}
      >
        <AddIcon />
        <p>New</p>
      </button>
      <CalculateButtonsDrawing />
    </div>
  );
}

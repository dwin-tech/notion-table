/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import PROPERTY_ICONS from "../../../../propertyIcons/propertyIcons";
import style from "./properties.module.scss";
import { DragAndDropToProperty } from "../../../../../features/tableDataInfo/tableDataInfoSlice";

function HideDataContent({
  type,
  handleMoveToEditFieldBtnClick,
  handleChangeShowPropertyData,
  searchPropertyInput,
}) {
  const dispatch = useDispatch();
  const tableData = useSelector((store) => store.tableDataInfo.data);
  const handleOnDragEnd = (result) => {
    if (result.destination) {
      dispatch(
        DragAndDropToProperty({
          sourceIndex: result.source.index,
          destinationIndex: result.destination.index,
        })
      );
    }
  };

  const checkItemValue = (item) => {
    return (
      item.hide &&
      !item.deleted &&
      item.title
        .toLowerCase()
        .includes(searchPropertyInput.trim().toLowerCase())
    );
  };
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="hideDragAndDrop">
        {(provided) => (
          <div
            className={style.hide_show_btn_container}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {type !== "show" &&
              tableData.map(
                (item, i) =>
                  checkItemValue(item) && (
                    <Draggable key={item.id} draggableId={item.id} index={i}>
                      {(provide, snapshot) => (
                        <div
                          ref={provide.innerRef}
                          {...provide.dragHandleProps}
                          {...provide.draggableProps}
                        >
                          <button
                            type="submit"
                            className={
                              snapshot.isDragging
                                ? style.onDrag_property_btns
                                : style.property_btns
                            }
                            onClick={() =>
                              handleMoveToEditFieldBtnClick(item.id)
                            }
                          >
                            <div>
                              <div>
                                <DragIndicatorIcon
                                  className={style.drag_icon}
                                />
                                {PROPERTY_ICONS[item.type]}
                              </div>
                              <p className={style.btn_title}>{item.title}</p>
                            </div>
                            <div>
                              <VisibilityOffIcon
                                className={style.viewed_icon}
                                onClick={(event) =>
                                  handleChangeShowPropertyData(
                                    event,
                                    item.id,
                                    false
                                  )
                                }
                              />
                              <KeyboardArrowRightIcon />
                            </div>
                          </button>
                        </div>
                      )}
                    </Draggable>
                  )
              )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

HideDataContent.propTypes = {
  type: PropTypes.string.isRequired,
  searchPropertyInput: PropTypes.string.isRequired,
  handleMoveToEditFieldBtnClick: PropTypes.func.isRequired,
  handleChangeShowPropertyData: PropTypes.func.isRequired,
};

export default HideDataContent;

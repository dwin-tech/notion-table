import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PROPERTY_ICONS from "../../../../propertyIcons/propertyIcons";
import {
  changeSelectedPropertyForEdit,
  toggleHideAItemProperty,
  toggleHidePropertyInToData,
} from "../../../../../features/tableDataInfo/tableDataInfoSlice";
import style from "./properties.module.scss";
import { changeToggleAddPropertyPopover } from "../../../../../features/showPopoversInfo/showPopoverInfoSlice";

function ShowOrHidePropertyElements({ type, text, buttonName }) {
  const dispatch = useDispatch();
  const tableData = useSelector((store) => store.tableDataInfo.data);
  const hideData = tableData.filter((data) => data.hide && !data.deleted);
  const showData = tableData.filter((data) => !data.hide && !data.deleted);

  const moveFoeChange = (id) => {
    dispatch(changeSelectedPropertyForEdit(id));
    dispatch(changeToggleAddPropertyPopover(true));
  };

  const changeHide = (event, id, value) => {
    event.stopPropagation();
    dispatch(toggleHideAItemProperty({ id, value }));
  };

  return (
    <div className={style.show_hide_properties}>
      {type === "hide" && !hideData.length ? null : (
        <div className={style.shown_hidden_container}>
          <p>{text} in table</p>
          <button
            type="submit"
            className={style.hide_show_btn}
            onClick={() =>
              dispatch(toggleHidePropertyInToData(type === "show"))
            }
          >
            {buttonName} all
          </button>
        </div>
      )}
      {type === "show"
        ? showData.map((item) => (
            <button
              key={item.id}
              type="submit"
              className={style.property_btns}
              onClick={() => moveFoeChange(item.id)}
            >
              <div>
                <div>
                  <DragIndicatorIcon />
                  {PROPERTY_ICONS[item.type]}
                </div>
                <p className={style.btn_title}>{item.title}</p>
              </div>
              <div>
                {item.type === "title" ? (
                  <VisibilityOffIcon className={style.viewed_icon} />
                ) : (
                  <RemoveRedEyeIcon
                    className={style.viewed_black_icon}
                    onClick={(event) => changeHide(event, item.id, true)}
                  />
                )}
                <KeyboardArrowRightIcon />
              </div>
            </button>
          ))
        : hideData.map((item) => (
            <button
              key={item.id}
              type="submit"
              className={style.property_btns}
              onClick={() => moveFoeChange(item.id)}
            >
              <div>
                <DragIndicatorIcon />
                {PROPERTY_ICONS[item.type]}
              </div>
              <p className={style.btn_title}>{item.title}</p>
              <div>
                <VisibilityOffIcon
                  className={style.viewed_icon}
                  onClick={(evt) => {
                    evt.stopPropagation();
                    dispatch(
                      toggleHideAItemProperty({ id: item.id, value: false })
                    );
                  }}
                />
                <KeyboardArrowRightIcon />
              </div>
            </button>
          ))}
    </div>
  );
}

ShowOrHidePropertyElements.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
};

export default ShowOrHidePropertyElements;

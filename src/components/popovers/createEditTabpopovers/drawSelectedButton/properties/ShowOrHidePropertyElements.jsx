import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import propertyIcons from "../../../../propertyIcons/propertyIcons";
import {
  toggleHideAItemProperty,
  toggleHidePropertyInToData,
} from "../../../../../features/tableDataInfo/tableDataInfoSlice";
import style from "./properties.module.scss";

function ShowOrHidePropertyElements({ type, text, buttonName }) {
  const dispatch = useDispatch();
  const tableData = useSelector((store) => store.tableDataInfo.data);
  const hideData = tableData.filter((e) => e.hide);
  const showData = tableData.filter((e) => !e.hide);

  return (
    <div className={style.show_hide_properties}>
      <div className={style.shown_hidden_container}>
        <p>{text} in table</p>
        <button
          type="submit"
          className={style.hide_show_btn}
          onClick={() => dispatch(toggleHidePropertyInToData(type === "show"))}
        >
          {buttonName} all
        </button>
      </div>
      {type === "show"
        ? showData.map((e, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <button key={i} type="submit" className={style.property_btns}>
              <div>
                <div>
                  <DragIndicatorIcon />
                  {propertyIcons[e.type]}
                </div>
                <p className={style.btn_title}>{e.title}</p>
              </div>
              <div>
                {e.type === "title" ? (
                  <VisibilityOffIcon className={style.viewed_icon} />
                ) : (
                  <RemoveRedEyeIcon
                    className={style.viewed_black_icon}
                    onClick={() =>
                      dispatch(
                        toggleHideAItemProperty({ id: e.id, value: true })
                      )
                    }
                  />
                )}
                <KeyboardArrowRightIcon />
              </div>
            </button>
          ))
        : hideData.map((e, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <button key={i} type="submit" className={style.property_btns}>
              <div>
                <div>
                  <DragIndicatorIcon />
                  {propertyIcons[e.type]}
                </div>
                <p className={style.btn_title}>{e.title}</p>
              </div>
              <div>
                <VisibilityOffIcon
                  className={style.viewed_icon}
                  onClick={() =>
                    dispatch(
                      toggleHideAItemProperty({ id: e.id, value: false })
                    )
                  }
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

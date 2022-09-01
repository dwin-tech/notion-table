import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import style from "./goback.module.scss";
// import { changeShowView } from "../../features/showPopoversInfo/showPopoverInfoSlice";

// eslint-disable-next-line no-unused-vars
function GoBackComponent({ text, onChange }) {
  const dispatch = useDispatch();
  const { toggleAddNewPropertyType } = useSelector(
    (store) => store.tableDataInfo
  );
  return (
    <div className={style.go_back_container}>
      {!toggleAddNewPropertyType ? (
        <button
          className={style.go_back_btn}
          type="submit"
          onClick={() => dispatch(onChange(false))}
        >
          <ArrowBackIcon />
        </button>
      ) : null}
      <p>{text}</p>
    </div>
  );
}

GoBackComponent.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default GoBackComponent;

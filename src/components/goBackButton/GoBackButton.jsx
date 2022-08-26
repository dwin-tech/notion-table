import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import style from "./goback.module.scss";
// import { changeShowView } from "../../features/showPopoversInfo/showPopoverInfoSlice";

// eslint-disable-next-line no-unused-vars
function GoBackComponent({ text, onChange }) {
  const dispatch = useDispatch();
  return (
    <div className={style.go_back_container}>
      <button
        className={style.go_back_btn}
        type="submit"
        onClick={() => dispatch(onChange(false))}
      >
        <ArrowBackIcon />
      </button>
      <p>{text}</p>
    </div>
  );
}

GoBackComponent.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default GoBackComponent;

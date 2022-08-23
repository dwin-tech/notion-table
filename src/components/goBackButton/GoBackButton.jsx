import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { changeShowView } from "../../features/showPopoversInfo/showPopoverInfoSlice";
import style from "./goback.module.scss";

// eslint-disable-next-line no-unused-vars
function GoBackComponent({ text }) {
  const dispatch = useDispatch();
  return (
    <button
      className={style.go_back_btn}
      type="submit"
      onClick={() => dispatch(changeShowView(false))}
    >
      <ArrowBackIcon /> <p>{text}</p>
    </button>
  );
}

GoBackComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default GoBackComponent;

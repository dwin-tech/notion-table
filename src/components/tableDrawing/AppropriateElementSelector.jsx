import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { changeValueinPropertyData } from "../../features/tableDataInfo/tableDataInfoSlice";
import style from "./tableDrawing.module.scss";

function AppropriateElementSelector({ item }) {
  const dispatch = useDispatch();
  const [inputChange, setInputChange] = useState(false);

  const handlePropertyDataChange = (value) => {
    dispatch(
      changeValueinPropertyData({
        id: item.parrentId,
        index: item.index,
        value,
      })
    );
  };

  return (
    <input
      className={style.input_for_data}
      type={item.type}
      defaultValue={item.value}
      onBlur={(event) => {
        if (inputChange) {
          handlePropertyDataChange(event.target.value);
        }
        setInputChange(false);
      }}
      onChange={(event) => {
        if (item.value !== event.target.value) {
          setInputChange(true);
        }
        if (item.type === "date") {
          handlePropertyDataChange(event.target.value);
        }
      }}
    />
  );
}

AppropriateElementSelector.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  item: PropTypes.object.isRequired,
};

export default AppropriateElementSelector;

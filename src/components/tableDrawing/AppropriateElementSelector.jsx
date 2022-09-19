import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { changeValueinPropertyData } from "../../features/tableDataInfo/tableDataInfoSlice";
import style from "./tableDrawing.module.scss";

function AppropriateElementSelector({ item }) {
  const dispatch = useDispatch();

  const handleChangeValueInPropertyData = (value) => {
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
      key={item.id}
      defaultValue={item.value}
      onBlur={(event) => handleChangeValueInPropertyData(event.target.value)}
      onChange={(event) =>
        item.type === "date" &&
        handleChangeValueInPropertyData(event.target.value)
      }
    />
  );
}

AppropriateElementSelector.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  item: PropTypes.object.isRequired,
};

export default AppropriateElementSelector;

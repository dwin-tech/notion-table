/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { changeValueinPropertyData } from "../../features/tableDataInfo/tableDataInfoSlice";

function AppropriateElementSelector({ item, data, setEvnetIndex, id, i }) {
  const dispatch = useDispatch();

  const handleChangeValueInPropertyData = (value, dataId, index) => {
    dispatch(
      changeValueinPropertyData({
        id: dataId,
        index,
        value,
      })
    );
  };

  const inputTypeSelector = () => {
    if (data.type === "number") return "number";
    if (data.type === "date") return "date";
    return "text";
  };

  return (
    <input
      type={inputTypeSelector()}
      key={item.id}
      defaultValue={item.value}
      onBlur={(event) =>
        handleChangeValueInPropertyData(event.target.value, id, i)
      }
      onChange={(e) =>
        data.type === "date" &&
        handleChangeValueInPropertyData(e.target.value, id, i)
      }
      onMouseEnter={() => setEvnetIndex(i)}
    />
  );
}

AppropriateElementSelector.propTypes = {
  item: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  setEvnetIndex: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
};

export default AppropriateElementSelector;

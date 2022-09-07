import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { changeValueinPropertyData } from "../../features/tableDataInfo/tableDataInfoSlice";

function AppropriateElementSelector({ item, setEvnetIndex, id, i }) {
  const dispatch = useDispatch();

  const handleChangeValuePropertyData = (value, dataId, index) => {
    dispatch(
      changeValueinPropertyData({
        dataId,
        index,
        value,
      })
    );
  };

  return (
    <input
      type="text"
      key={item.id}
      defaultValue={item.id}
      onBlur={(event) =>
        handleChangeValuePropertyData(event.target.value, id, i)
      }
      onMouseEnter={() => setEvnetIndex(i)}
    />
  );
}

AppropriateElementSelector.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
  setEvnetIndex: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
};

export default AppropriateElementSelector;

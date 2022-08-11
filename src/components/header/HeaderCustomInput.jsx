import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

function HeaderCustomInputs({ value, changeFunction, placeholder }) {
  const dispatch = useDispatch();
  return (
    <input
      type="text"
      defaultValue={value}
      onBlur={(e) => dispatch(changeFunction(e.target.value))}
      placeholder={placeholder}
    />
  );
}

HeaderCustomInputs.propTypes = {
  value: PropTypes.string.isRequired,
  changeFunction: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default HeaderCustomInputs;

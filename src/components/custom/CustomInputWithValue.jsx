import React from "react";
import PropTypes from "prop-types";
import style from "./custom.module.scss";

function CustomInputWithValue({ placeholder, onChange, value, onBlur }) {
  return (
    <input
      type="text"
      defaultValue={value}
      onBlur={(e) => onBlur(e.target.value)}
      placeholder={placeholder}
      className={style.custom_input}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

CustomInputWithValue.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default CustomInputWithValue;

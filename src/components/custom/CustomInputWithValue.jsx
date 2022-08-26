import React from "react";
import PropTypes from "prop-types";
import style from "./custom.module.scss";

function CustomInputWithValue({ placeholder, onChange, value }) {
  return (
    <input
      type="text"
      defaultValue={value}
      onBlur={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={style.custom_input}
    />
  );
}

CustomInputWithValue.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default CustomInputWithValue;

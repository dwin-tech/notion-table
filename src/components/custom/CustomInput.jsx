import React from "react";
import PropTypes from "prop-types";
import style from "./custom.module.scss";

function CustomInput({ onChange, placeholder }) {
  return (
    <input
      type="text"
      onBlur={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={style.custom_input}
    />
  );
}

CustomInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default CustomInput;

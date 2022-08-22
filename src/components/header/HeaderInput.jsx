import React from "react";
import PropTypes from "prop-types";

export default function HeaderCustomInput({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      defaultValue={value}
      onBlur={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}

HeaderCustomInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

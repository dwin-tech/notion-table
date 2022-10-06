import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import style from "./board.module.scss";

function ContentOfBoardHeaderTitlePopover({
  placeholder,
  value,
  onChange,
  onClick,
}) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.select();
  }, []);

  return (
    <div className={style.group_popover_content_ontainer}>
      <input
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        checked
        type="text"
        defaultValue={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        ref={inputRef}
      />
      <button type="submit" onClick={() => onClick()}>
        <p>Done</p>
        <KeyboardReturnIcon />
      </button>
    </div>
  );
}

ContentOfBoardHeaderTitlePopover.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContentOfBoardHeaderTitlePopover;

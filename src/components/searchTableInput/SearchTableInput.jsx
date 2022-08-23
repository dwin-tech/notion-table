import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import style from "./searchTableInput.module.scss";

function SearchTableInput() {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  return (
    <div className={style.search_container}>
      <button
        className={style.tableSearch_btn}
        type="submit"
        onClick={() => setShowInput(!showInput)}
      >
        <SearchIcon />
      </button>
      {showInput && (
        <input
          onFocus={showInput}
          type="text"
          value={inputValue}
          className={style.search_input}
          placeholder="Type to search..."
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={() => setShowInput(false)}
        />
      )}
    </div>
  );
}

export default SearchTableInput;

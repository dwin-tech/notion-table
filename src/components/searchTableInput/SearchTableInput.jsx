import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import style from "./searchTableInput.module.scss";
import { changeSearchDataInputValue } from "../../features/tableDataInfo/tableDataInfoSlice";

function SearchTableInput() {
  const dispatch = useDispatch();
  const inputValue = useSelector(
    (store) => store.tableDataInfo.searchDataInputValue
  );
  const [showInput, setShowInput] = useState(false);
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
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          type="text"
          value={inputValue}
          className={style.search_input}
          placeholder="Type to search..."
          onChange={(e) => dispatch(changeSearchDataInputValue(e.target.value))}
          onBlur={() => !inputValue && setShowInput(false)}
        />
      )}
    </div>
  );
}

export default SearchTableInput;

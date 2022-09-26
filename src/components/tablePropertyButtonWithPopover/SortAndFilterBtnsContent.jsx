/* eslint-disable no-debugger */
import React from "react";
import PropTypes from "prop-types";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useDispatch } from "react-redux";
import style from "./popoverOfButton.module.scss";
import { sortDataToAscendingOrDescending } from "../../features/tableDataInfo/tableDataInfoSlice";
import sortedPositions from "./sortAndFilterFeatures";

function SortAndFilterBtnsContent({ item, setAnchorElement }) {
  const dispatch = useDispatch();

  const handleSortToAscending = () => {
    dispatch(
      sortDataToAscendingOrDescending({
        positions: sortedPositions(item, "ascending"),
      })
    );
    setAnchorElement(false);
  };

  const handleSortToDescending = () => {
    dispatch(
      sortDataToAscendingOrDescending({
        positions: sortedPositions(item, "descending"),
      })
    );
    setAnchorElement(false);
  };

  return (
    <div>
      <button
        type="submit"
        className={style.property_popover_btns}
        onClick={handleSortToAscending}
      >
        <div>
          <NorthIcon />
          <p>Sort ascending</p>
        </div>
      </button>
      <button
        type="submit"
        className={style.property_popover_btns}
        onClick={handleSortToDescending}
      >
        <div>
          <SouthIcon />
          <p>Sort descending</p>
        </div>
      </button>
      <button type="submit" className={style.property_popover_btns}>
        <div>
          <FilterListIcon />
          <p>Filter</p>
        </div>
      </button>
    </div>
  );
}

SortAndFilterBtnsContent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
  setAnchorElement: PropTypes.func.isRequired,
};

export default SortAndFilterBtnsContent;

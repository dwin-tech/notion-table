import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import calculateButtonNamesAndFeatures from "./calculateButtonNamesAndFeatures";
import style from "./calculateContent.module.scss";
import { changeCurrentCalculateBtnValue } from "../../features/tableDataInfo/tableDataInfoSlice";

function DateButtonsCalculatePopover({ item, onCloseCalculatePopover }) {
  const dispatch = useDispatch();
  const dateButtonsInfo = calculateButtonNamesAndFeatures.date;
  return (
    <div>
      {Object.keys(dateButtonsInfo).map((el) => (
        <button
          key={el}
          className={style.calculate_btns}
          type="submit"
          onClick={() => {
            dispatch(
              changeCurrentCalculateBtnValue({
                id: item.id,
                value: el,
              })
            );
            onCloseCalculatePopover(null);
          }}
        >
          {el}
        </button>
      ))}
    </div>
  );
}

DateButtonsCalculatePopover.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
  onCloseCalculatePopover: PropTypes.func.isRequired,
};

export default DateButtonsCalculatePopover;

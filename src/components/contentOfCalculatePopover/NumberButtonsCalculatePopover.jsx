import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import calculateButtonNamesAndFeatures from "./calculateButtonNamesAndFeatures";
import style from "./calculateContent.module.scss";
import { changeCurrentCalculateBtnValue } from "../../features/tableDataInfo/tableDataInfoSlice";

function NumberButtonsCalculatePopover({ item, onCloseCalculatePopover }) {
  const dispatch = useDispatch();
  const numberButton = calculateButtonNamesAndFeatures.number;
  return (
    <div>
      {Object.keys(numberButton).map((el) => (
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

NumberButtonsCalculatePopover.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
  onCloseCalculatePopover: PropTypes.func.isRequired,
};

export default NumberButtonsCalculatePopover;

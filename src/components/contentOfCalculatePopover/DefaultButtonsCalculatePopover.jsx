import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import style from "./calculateContent.module.scss";
import calculateButtonNamesAndFeatures from "./calculateButtonNamesAndFeatures";
import { changeCurrentCalculateBtnValue } from "../../features/tableDataInfo/tableDataInfoSlice";

function DefaultButtonsCalculatePopover({ item, onCloseCalculatePopover }) {
  const dispatch = useDispatch();
  const defaultButton = calculateButtonNamesAndFeatures.default;

  return (
    <div>
      {Object.keys(defaultButton).map((el, i) => (
        <button
          // eslint-disable-next-line react/no-array-index-key
          key={i}
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

DefaultButtonsCalculatePopover.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
  onCloseCalculatePopover: PropTypes.func.isRequired,
};

export default DefaultButtonsCalculatePopover;

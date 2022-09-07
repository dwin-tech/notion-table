/* eslint-disable react/no-array-index-key */
import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import itemInfoPopoverDataButtons from "./itemInfoPopoverData";
import style from "./tableDrawing.module.scss";

function ItemInfoPopoverButtons({ onClose, index }) {
  const dispatch = useDispatch();
  return (
    <div className={style.popover_btns}>
      {itemInfoPopoverDataButtons.map((el, i) => (
        <React.Fragment key={i}>
          <button
            type="submit"
            onClick={() => {
              dispatch(el[3](index));
              onClose(null);
            }}
          >
            <div>
              {el[0]}
              <p>{el[1]}</p>
            </div>
            <div>{el[2]}</div>
          </button>
          {i === 3 ? <div className={style.border_bottom_popover} /> : null}
        </React.Fragment>
      ))}
      <div className={style.border_bottom_popover} />
      <div className={style.edited_by_text}>
        <p>Last edited by marat sahakyan</p>
        <p>Today at 7:47 PM</p>
      </div>
    </div>
  );
}

ItemInfoPopoverButtons.propTypes = {
  onClose: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default ItemInfoPopoverButtons;

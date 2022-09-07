import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import style from "./tableDrawing.module.scss";
import AppropriateElementSelector from "./AppropriateElementSelector";
import RowAdditionAndFunctionField from "./RowAdditionAndFunctionField";

export default function DrawingTableRows({ eventIndex, setEvnetIndex }) {
  const { data } = useSelector((store) => store.tableDataInfo);
  const showData = data.filter((el) => !el.hide && !el.deleted);

  return (
    <>
      {showData.map((elem) => (
        <React.Fragment key={elem.id}>
          <div className={style.add_drag_icon_container}>
            <RowAdditionAndFunctionField
              eventIndex={eventIndex}
              setEvnetIndex={setEvnetIndex}
            />
          </div>
          <div>
            {elem.data.map((item, i) => (
              <AppropriateElementSelector
                item={item}
                setEvnetIndex={setEvnetIndex}
                id={elem.id}
                i={i}
              />
            ))}
          </div>
        </React.Fragment>
      ))}
    </>
  );
}

DrawingTableRows.propTypes = {
  eventIndex: PropTypes.number.isRequired,
  setEvnetIndex: PropTypes.func.isRequired,
};

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import PropTypes from "prop-types";
import ItemInfoPopover from "./ItemInfoPopover";
import { addNewFieldUnderSelectedRow } from "../../features/tableDataInfo/tableDataInfoSlice";

export default function RowAdditionAndFunctionField({
  eventIndex,
  setEvnetIndex,
}) {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.tableDataInfo);

  return (
    <>
      {Array.from(Array(data[0].data.length).keys()).map((index) => (
        <div onMouseEnter={() => setEvnetIndex(index)} key={index}>
          {index === eventIndex && (
            <>
              <AddIcon
                onClick={() => dispatch(addNewFieldUnderSelectedRow(index))}
              />
              <ItemInfoPopover index={index} />
            </>
          )}
        </div>
      ))}
    </>
  );
}

RowAdditionAndFunctionField.propTypes = {
  eventIndex: PropTypes.number.isRequired,
  setEvnetIndex: PropTypes.func.isRequired,
};

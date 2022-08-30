import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTableData } from "../../features/tableDataInfo/tableDataInfoSlice";
import setDataIntoStorage, {
  getDatainToStorage,
} from "../../utils/callLocalStorage";
import TableDrawing from "../tableDrawing/TableDrawing";

function Table() {
  const dispatch = useDispatch();
  const tableData = useSelector((store) => store.tableDataInfo.data);

  useEffect(() => {
    const newTableData = getDatainToStorage("tableData");
    if (newTableData) {
      dispatch(updateTableData(newTableData));
    }
  }, []);

  useEffect(() => {
    setDataIntoStorage("tableData", tableData);
  }, [tableData]);

  return (
    <div>
      <TableDrawing />
    </div>
  );
}

export default Table;

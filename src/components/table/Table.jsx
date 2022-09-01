import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updatePropertyNames,
  updateTableData,
} from "../../features/tableDataInfo/tableDataInfoSlice";
import setDataIntoStorage, {
  getDatainToStorage,
} from "../../utils/callLocalStorage";
import TableDrawing from "../tableDrawing/TableDrawing";

function Table() {
  const dispatch = useDispatch();
  const { data, propertyNames } = useSelector((store) => store.tableDataInfo);

  useEffect(() => {
    const newTableData = getDatainToStorage("tableData");
    const getPropertyNames = getDatainToStorage("propertyNames");
    if (newTableData) {
      dispatch(updateTableData(newTableData));
    }
    if (getPropertyNames) {
      dispatch(updatePropertyNames(getPropertyNames));
    }
  }, []);

  useEffect(() => {
    setDataIntoStorage("tableData", data);
  }, [data]);

  useEffect(() => {
    setDataIntoStorage("propertyNames", propertyNames);
  }, [propertyNames]);

  return (
    <div>
      <TableDrawing />
    </div>
  );
}

export default Table;

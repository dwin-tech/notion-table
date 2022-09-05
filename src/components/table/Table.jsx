import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
// import AddIcon from "@mui/icons-material/Add";
import {
  updatePropertyNames,
  updateTableData,
} from "../../features/tableDataInfo/tableDataInfoSlice";
import setDataIntoStorage, {
  getDatainToStorage,
} from "../../utils/callLocalStorage";
import TablePropertiesDrawing from "../tableDrawing/TablePropertiesDrawing";
import style from "./table.module.scss";

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
    <div className={style.table_section}>
      <TablePropertiesDrawing />
    </div>
  );
}

export default Table;

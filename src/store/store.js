import { configureStore } from "@reduxjs/toolkit";
import tableTypeInfoSlice from "../features/tableTypeInfo/tableTypeInfoSlice";
import showPopoverInfoSlice from "../features/showPopoversInfo/showPopoverInfoSlice";
import tableTabsInfoSlice from "../features/tableTabsInfo/tableTabsInfoSlice";
import tableDataInfoSlice from "../features/tableDataInfo/tableDataInfoSlice";

const store = configureStore({
  reducer: {
    tableTabsInfo: tableTabsInfoSlice,
    tableTypeInfo: tableTypeInfoSlice,
    showPopoverInfo: showPopoverInfoSlice,
    tableDataInfo: tableDataInfoSlice,
  },
});

export default store;

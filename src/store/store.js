import { configureStore } from "@reduxjs/toolkit";
import tableTypeInfoSlice from "../features/tableTypeInfo/tableTypeInfoSlice";
import showPopoverInfoSlice from "../features/showPopoversInfo/showPopoverInfoSlice";
import tableTabsInfoSlice from "../features/tableTabsInfo/tableTabsInfoSlice";

const store = configureStore({
  reducer: {
    tableTabsInfo: tableTabsInfoSlice,
    tableTypeInfo: tableTypeInfoSlice,
    showPopoverInfo: showPopoverInfoSlice,
  },
});

export default store;

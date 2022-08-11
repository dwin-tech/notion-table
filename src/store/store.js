import { configureStore } from "@reduxjs/toolkit";
import headerInfoReducer from "../features/headerInfo/headerInfoSlice";

const store = configureStore({
  reducer: {
    headerInfo: headerInfoReducer,
  },
});

export default store;

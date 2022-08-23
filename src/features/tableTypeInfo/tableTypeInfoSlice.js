import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  table: false,
  board: false,
  timeLine: false,
  calendar: false,
  list: false,
  gallery: false,
};

const tableTypeInfoSlice = createSlice({
  name: "tableTypeInfoSlice",
  initialState,
  reducers: {
    changeSelectedType: (state, action) =>
      Object.keys(state).reduce((acc, e) => {
        acc[e] = e === action.payload;
        return acc;
      }, {}),

    updateTableTypeState: (state, action) => {
      return { ...action.payload };
    },
  },
});

export const { changeSelectedType, updateTableTypeState } =
  tableTypeInfoSlice.actions;

export default tableTypeInfoSlice.reducer;

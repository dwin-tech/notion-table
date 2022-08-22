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
    changeSelectedType: (state, action) => {
      return Object.keys(state).reduce((acc, e) => {
        if (e === action.payload) {
          acc[e] = true;
        } else {
          acc[e] = false;
        }
        return acc;
      }, {});
    },
    updateTableTypeState: (state, action) => {
      return { ...action.payload };
    },
  },
});

export const { changeSelectedType, updateTableTypeState } =
  tableTypeInfoSlice.actions;

export default tableTypeInfoSlice.reducer;

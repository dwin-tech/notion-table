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
      // eslint-disable-next-line no-return-assign, no-param-reassign
      Object.keys(state).forEach((e) => (state[e] = e === action.payload));
    },
    updateTableTypeState: (state, action) => {
      return { ...action.payload };
    },
  },
});

export const { changeSelectedType, updateTableTypeState } =
  tableTypeInfoSlice.actions;

export default tableTypeInfoSlice.reducer;

/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCreateTabPopover: false,
  showView: false,
  selectedValueInView: "",
  showNewTabPopover: false,
  toggleAddPropertyPopover: false,
};

const showPopoverInfoSlice = createSlice({
  name: "showPopoverInfoSlice",
  initialState,
  reducers: {
    changeShowCreateTabPopover: (state, action) => {
      state.showCreateTabPopover = action.payload;
    },
    changeShowView: (state, action) => {
      state.showView = action.payload;
    },
    changeSelectedValueInView: (state, action) => {
      state.selectedValueInView = action.payload;
    },
    changeShowNewTabPopover: (state, action) => {
      state.showView = false;
      state.showNewTabPopover = action.payload;
    },
    changeToggleAddPropertyPopover: (state, action) => {
      state.toggleAddPropertyPopover = action.payload;
    },
  },
});

export const {
  changeShowCreateTabPopover,
  changeShowView,
  changeSelectedValueInView,
  changeShowNewTabPopover,
  changeToggleAddPropertyPopover,
} = showPopoverInfoSlice.actions;

export default showPopoverInfoSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCreateTabPopover: false,
  showView: false,
  selectedValueInView: "",
  showNewTabPopover: false,
};

const showPopoverInfoSlice = createSlice({
  name: "showPopoverInfoSlice",
  initialState,
  reducers: {
    changeShowCreateTabPopover: (state, action) => {
      return {
        ...state,
        showCreateTabPopover: action.payload,
      };
    },
    changeShowView: (state, action) => {
      return {
        ...state,
        showView: action.payload,
      };
    },
    changeSelectedValueInView: (state, action) => {
      return {
        ...state,
        selectedValueInView: action.payload,
      };
    },
    changeShowNewTabPopover: (state, action) => {
      return {
        ...state,
        showView: false,
        showNewTabPopover: action.payload,
      };
    },
  },
});

export const {
  changeShowCreateTabPopover,
  changeShowView,
  changeSelectedValueInView,
  changeShowNewTabPopover,
} = showPopoverInfoSlice.actions;

export default showPopoverInfoSlice.reducer;

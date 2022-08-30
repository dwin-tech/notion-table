import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCreateTabPopover: false,
  showView: false,
  selectedValueInView: "",
  showNewTabPopover: false,
  toggleAddPropertyPopover: false,
  // popoverEventCurrentTarget: [],
};

const showPopoverInfoSlice = createSlice({
  name: "showPopoverInfoSlice",
  initialState,
  reducers: {
    changeShowCreateTabPopover: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.showCreateTabPopover = action.payload;
    },
    changeShowView: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.showView = action.payload;
    },
    changeSelectedValueInView: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.selectedValueInView = action.payload;
    },
    changeShowNewTabPopover: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.showView = false;
      // eslint-disable-next-line no-param-reassign
      state.showNewTabPopover = action.payload;
    },
    changeToggleAddPropertyPopover: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.toggleAddPropertyPopover = action.payload;
    },
    // chengePopoverEventCurrentTarget: (state, action) => {
    //   // eslint-disable-next-line no-param-reassign
    //   state.popoverEventCurrentTarget = action.payload;
    // },
  },
});

export const {
  changeShowCreateTabPopover,
  changeShowView,
  changeSelectedValueInView,
  changeShowNewTabPopover,
  changeToggleAddPropertyPopover,
  // chengePopoverEventCurrentTarget,
} = showPopoverInfoSlice.actions;

export default showPopoverInfoSlice.reducer;

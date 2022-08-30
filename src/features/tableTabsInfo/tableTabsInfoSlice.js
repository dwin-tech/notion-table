/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabsArray: [{ type: "table", name: "table", id: "12345" }],
  selectedTabId: "12345",
  createdTabName: "",
};

const tableTabsInfoSlice = createSlice({
  name: "tableTabsInfo",
  initialState,
  reducers: {
    addNewTab: (state, action) => {
      state.tabsArray.push(action.payload);
    },
    updateTabArray: (state, action) => {
      state.tabsArray = action.payload;
    },
    changeSelectedTabId: (state, action) => {
      state.selectedTabId = action.payload;
    },
    addNewEditTab: (state, action) => {
      const index = state.tabsArray.findIndex(
        (e) => e.id === action.payload.id
      );
      state.tabsArray[index] = action.payload;
    },
    changeNameNewTab: (state, action) => {
      const index = state.tabsArray.findIndex(
        (e) => e.id === action.payload.id
      );

      if (action.payload.name) {
        state.tabsArray[index].name = action.payload.name;
      } else {
        state.tabsArray[index].name = state.tabsArray[index]?.type;
      }
    },
    changeCreatedTabName: (state, action) => {
      state.createdTabName = action.payload;
    },
  },
});

export const {
  addNewTab,
  updateTabArray,
  changeSelectedTabId,
  addNewEditTab,
  changeNameNewTab,
  changeCreatedTabName,
} = tableTabsInfoSlice.actions;

export default tableTabsInfoSlice.reducer;

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
      // eslint-disable-next-line no-param-reassign
      state.tabsArray = action.payload;
    },
    changeSelectedTabId: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.selectedTabId = action.payload;
    },
    addNewEditTab: (state, action) => {
      const index = state.tabsArray.findIndex(
        (e) => e.id === action.payload.id
      );
      // eslint-disable-next-line no-param-reassign
      state.tabsArray[index] = action.payload;
    },
    changeNameNewTab: (state, action) => {
      const index = state.tabsArray.findIndex(
        (e) => e.id === action.payload.id
      );

      if (action.payload.name) {
        // eslint-disable-next-line no-param-reassign
        state.tabsArray[index].name = action.payload.name;
      } else {
        state.tabsArray[index].name = state.tabsArray[index]?.type;
      }
    },
    changeCreatedTabName: (state, action) => {
      // eslint-disable-next-line no-param-reassign
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

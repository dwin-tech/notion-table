/* eslint-disable no-param-reassign */
/* eslint-disable no-empty-pattern */
import { v4 as uuidv4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabsArray: [{ type: "table", name: "table", id: uuidv4() }],
  selectedTabId: this?.tabsArray[0]?.id,
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
        state.tabsArray[index].name = state.tabsArray[index].type;
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

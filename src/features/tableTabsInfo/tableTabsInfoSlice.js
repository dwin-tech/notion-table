/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import TAB_ID from "../../constants/reduxConstantes";

const initialState = {
  tabsArray: [{ type: "table", name: "table", id: TAB_ID }],
  selectedTabId: TAB_ID,
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
    dragAndDropTabsArray: (state, action) => {
      const reorderedItem = state.tabsArray.find(
        (e) => e.id === state.tabsArray[action.payload.sourceIndex].id
      );
      state.tabsArray.splice(action.payload.sourceIndex, 1);
      state.tabsArray.splice(action.payload.destinationIndex, 0, reorderedItem);
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
  dragAndDropTabsArray,
} = tableTabsInfoSlice.actions;

export default tableTabsInfoSlice.reducer;

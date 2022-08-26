import { v4 as uuidv4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const uuidV4 = uuidv4();

const initialState = {
  tabsArray: [{ type: "table", name: "table", id: uuidV4 }],
  selectedTabId: uuidV4,
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
        // eslint-disable-next-line no-param-reassign
        state.tabsArray[index].name = state.tabsArray[index].type;
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

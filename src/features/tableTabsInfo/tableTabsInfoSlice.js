/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import TAB_ID from "../../constants/reduxConstantes";

const initialState = {
  tabsArray: [{ type: "table", name: "table", id: TAB_ID }],
  selectedTabId: TAB_ID,
  createdTabName: "",
  goEditPropertyFromPopover: false,
  toggleShowModal: false,
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
      const [reorderedItem] = state.tabsArray.splice(
        action.payload.sourceIndex,
        1
      );
      state.tabsArray.splice(action.payload.destinationIndex, 0, reorderedItem);
    },
    duplicateTab: (state, action) => {
      const findIndex = state.tabsArray.findIndex(
        (el) => el.id === state.selectedTabId
      );
      state.goEditPropertyFromPopover = !state.goEditPropertyFromPopover;
      const id = uuidv4();
      state.selectedTabId = id;
      state.tabsArray.splice(findIndex + 1, 0, {
        ...state.tabsArray[findIndex],
        name: action.payload,
        id,
      });
    },
    deleteTab: (state, action) => {
      if (state.tabsArray.length > 1) {
        const findIndex = state.tabsArray.findIndex(
          (el) => el.id === action.payload
        );
        state.tabsArray.splice(findIndex, 1);
        state.selectedTabId = state.tabsArray[findIndex - 1]
          ? state.tabsArray[findIndex - 1].id
          : state.tabsArray[0].id;
      }
    },
    changeGoEditPropertyFromPopover: (state, action) => {
      state.goEditPropertyFromPopover = action.payload;
    },
    addNewBoardGroup: (state, action) => {
      const index = state.tabsArray.findIndex(
        (el) => el.id === state.selectedTabId
      );
      if (!action.payload.oldName) {
        state.tabsArray[index].boardGroup.push(action.payload.name);
      } else {
        state.tabsArray[index].boardGroup[action.payload.index] =
          action.payload.name;
      }
    },
    changeToggleShowModal: (state, action) => {
      state.toggleShowModal = action.payload;
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
  duplicateTab,
  deleteTab,
  changeGoEditPropertyFromPopover,
  addNewBoardGroup,
  changeToggleShowModal,
} = tableTabsInfoSlice.actions;

export default tableTabsInfoSlice.reducer;

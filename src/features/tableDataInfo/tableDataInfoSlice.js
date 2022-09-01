/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      type: "title",
      title: "Name",
      hide: false,
      deleted: false,
      data: [],
      id: "11111",
    },
  ],
  propertyNames: {},
  toggleDeletedProperties: false,
  selectedPropertyForEdit: null,
  toggleDeletedDialog: false,
  toggleEditTypeJsx: false,
  toggleAddNewPropertyType: false,
};

const tableDataInfoSlice = createSlice({
  name: "tableTabsInfo",
  initialState,
  reducers: {
    addPropertyInToData: (state, action) => {
      state.data.push(action.payload);
    },
    addNewPropertyNames: (state, action) => {
      state.propertyNames[action.payload.value] = action.payload.id;
    },
    updatePropertyNames: (state, action) => {
      state.propertyNames = action.payload;
    },
    toggleHidePropertyInToData: (state, action) => {
      state.data.forEach((e) => {
        if (e.type !== "title") {
          e.hide = action.payload;
        }
      });
    },
    toggleHideAItemProperty: (state, action) => {
      const findItemIndex = state.data.findIndex(
        (e) => e.id === action.payload.id
      );
      if (state.data[findItemIndex].type !== "title") {
        state.data[findItemIndex].hide = action.payload.value;
      }
    },
    updateTableData: (state, action) => {
      state.data = action.payload;
    },
    changeToggleDeletedProperties: (state) => {
      state.toggleDeletedProperties = !state.toggleDeletedProperties;
    },
    changeDeleteKeyFromDataItem: (state, action) => {
      const findIndex = state.data.findIndex((e) => e.id === action.payload.id);
      state.data[findIndex].deleted = action.payload.bool;
    },
    deleteProperty: (state, action) => {
      state.data = state.data.filter((e) => e.id !== action.payload);
    },
    changeSelectedPropertyForEdit: (state, action) => {
      const item = state.data.find((e) => e.id === action.payload);
      item.deleted = false;
      state.selectedPropertyForEdit = item;
    },
    changeSelectedPropertyTitle: (state, action) => {
      const findIndex = state.data.findIndex((e) => e.id === action.payload.id);
      state.data[findIndex].title = action.payload.value;
      state.propertyNames[action.payload.id] = action.payload.value;
    },
    changeSelectedPropertyType: (state, action) => {
      const findIndex = state.data.findIndex((e) => e.id === action.payload.id);
      state.data[findIndex].type = action.payload?.type;
      state.selectedPropertyForEdit = state.data[findIndex];
    },
    changeSelectedPropertyHide: (state, action) => {
      const findIndex = state.data.findIndex((e) => e.id === action.payload);
      state.data[findIndex].hide = !state.data[findIndex].hide;
      state.selectedPropertyForEdit = state.data[findIndex];
    },
    changeToggleDeletedDialog: (state, action) => {
      state.toggleDeletedDialog = action.payload;
    },
    changeToggleEditTypeJsx: (state, action) => {
      state.toggleEditTypeJsx = action.payload;
    },
    changeToggleAddNewPropertyType: (state, action) => {
      state.toggleAddNewPropertyType = action.payload;
    },
  },
});

export const {
  addPropertyInToData,
  toggleHidePropertyInToData,
  toggleHideAItemProperty,
  updateTableData,
  changeToggleDeletedProperties,
  changeDeleteKeyFromDataItem,
  deleteProperty,
  changeSelectedPropertyForEdit,
  changeSelectedPropertyTitle,
  changeSelectedPropertyType,
  changeToggleDeletedDialog,
  changeToggleEditTypeJsx,
  changeSelectedPropertyHide,
  changeToggleAddNewPropertyType,
  addNewPropertyNames,
  updatePropertyNames,
} = tableDataInfoSlice.actions;

export default tableDataInfoSlice.reducer;

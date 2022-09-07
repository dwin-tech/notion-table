/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { PROPERTY_ID } from "../../constants/reduxConstantes";

const initialState = {
  data: [
    {
      type: "title",
      title: "Name",
      hide: false,
      deleted: false,
      data: [],
      id: PROPERTY_ID,
    },
  ],
  propertyNames: {},
  toggleDeletedProperties: false,
  selectedPropertyForEdit: null,
  toggleDeletedDialog: false,
  toggleEditTypeDrawer: false,
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
    changetoggleEditTypeDrawer: (state, action) => {
      state.toggleEditTypeDrawer = action.payload;
    },
    changeToggleAddNewPropertyType: (state, action) => {
      state.toggleAddNewPropertyType = action.payload;
    },
    changeDeletePropertyInItem: (state, action) => {
      const index = state.data.findIndex((e) => e.id === action.payload.id);
      state.data[index].deleted = action.payload.value;
    },
    addNewFieldForData: (state) => {
      state.data.forEach((el) => el.data.push({ value: "" }));
    },
    addNewFieldUnderSelectedRow: (state, action) => {
      state.data.map((el) =>
        el.data.splice(action.payload + 1, 0, { value: "" })
      );
    },
    deleteSelectedRow: (state, action) => {
      console.log(action.payload);
      state.data.forEach((elem) => elem.data.splice(action.payload, 1));
    },
    duplicateRow: (state, action) => {
      state.data.forEach((el) =>
        el.data.splice(action.payload + 1, 0, el.data[action.payload])
      );
    },
    changeValueinPropertyData: (state, action) => {
      const findIndex = state.data.findIndex((e) => e.id === action.payload.id);
      state.data[findIndex].data[action.payload.index].value =
        action.payload.value;
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
  changetoggleEditTypeDrawer,
  changeSelectedPropertyHide,
  changeToggleAddNewPropertyType,
  addNewPropertyNames,
  updatePropertyNames,
  changeDeletePropertyInItem,
  addNewFieldForData,
  addNewFieldUnderSelectedRow,
  deleteSelectedRow,
  duplicateRow,
  changeValueinPropertyData,
} = tableDataInfoSlice.actions;

export default tableDataInfoSlice.reducer;

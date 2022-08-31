/* eslint-disable no-param-reassign */
/* eslint-disable no-empty-pattern */
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
    {
      type: "status",
      title: "status",
      hide: true,
      deleted: false,
      data: [],
      id: "45632",
    },
    {
      type: "date",
      title: "date",
      hide: false,
      deleted: false,
      data: [],
      id: "775544",
    },
    {
      type: "person",
      title: "person",
      hide: true,
      deleted: false,
      data: [],
      id: "996633",
    },
    {
      type: "filesMedia",
      title: "filesMedia",
      hide: false,
      deleted: false,
      data: [],
      id: "44557",
    },
  ],
  propertyNames: {
    775544: "date",
    45632: "status",
    996633: "person",
    11111: "Name",
  },
  toggleDeletedProperties: false,
  selectedPropertyForEdit: null,
};

const tableDataInfoSlice = createSlice({
  name: "tableTabsInfo",
  initialState,
  reducers: {
    addPropertyInToData: (state, action) => {
      state.push(action.payload);
    },
    // changePropertyNames: (state, action) => {
    //   if (action.payload.type === "delete") {
    //     const index = state.propertyNames.findIndex(
    //       (e) => e === action.payload.value
    //     );
    //     state.propertyNames.splice(index, 1);
    //   } else {
    //     state.propertyNames.push(action.payload.value);
    //   }
    // },
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
      state.selectedPropertyForEdit = state.data.find(
        (e) => e.id === action.payload
      );
    },
    changeSelectedPropertyTitle: (state, action) => {
      const findIndex = state.data.findIndex((e) => e.id === action.payload.id);
      state.data[findIndex].title = action.payload.value;
      state.propertyNames[action.payload.id] = action.payload.value;
    },
    changeSelectedPropertyType: (state, action) => {
      const findIndex = state.data.findIndex((e) => e.id === action.payload.id);
      state.data[findIndex].type = action.payload.type;
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
} = tableDataInfoSlice.actions;

export default tableDataInfoSlice.reducer;

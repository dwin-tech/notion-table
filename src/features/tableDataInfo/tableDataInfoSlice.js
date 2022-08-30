/* eslint-disable no-param-reassign */
/* eslint-disable no-empty-pattern */
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  data: [
    { type: "title", title: "Name", hide: false, data: [], id: uuidv4() },
    { type: "text", title: "text", hide: false, data: [], id: uuidv4() },
    { type: "number", title: "number", hide: true, data: [], id: uuidv4() },
    { type: "select", title: "select", hide: false, data: [], id: uuidv4() },
    {
      type: "multiSelect",
      title: "multiSelect",
      hide: false,
      data: [],
      id: uuidv4(),
    },
    { type: "status", title: "status", hide: true, data: [], id: uuidv4() },
    { type: "date", title: "date", hide: false, data: [], id: uuidv4() },
    { type: "person", title: "person", hide: true, data: [], id: uuidv4() },
    {
      type: "filesMedia",
      title: "filesMedia",
      hide: false,
      data: [],
      id: uuidv4(),
    },
    {
      type: "checkBox",
      title: "checkBox",
      hide: false,
      data: [],
      id: uuidv4(),
    },
    { type: "url", title: "url", hide: false, data: [], id: uuidv4() },
    { type: "mail", title: "mail", hide: true, data: [], id: uuidv4() },
    { type: "phone", title: "phone", hide: false, data: [], id: uuidv4() },
    { type: "formula", title: "formula", hide: false, data: [], id: uuidv4() },
    { type: "relation", title: "relation", hide: true, data: [], id: uuidv4() },
    { type: "rollup", title: "rollup", hide: false, data: [], id: uuidv4() },
    {
      type: "createdTime",
      title: "createdTime",
      hide: true,
      data: [],
      id: uuidv4(),
    },
    {
      type: "createdBy",
      title: "createdBy",
      hide: false,
      data: [],
      id: uuidv4(),
    },
    {
      type: "lastEditedTime",
      title: "lastEditedTime",
      hide: true,
      data: [],
      id: uuidv4(),
    },
    {
      type: "lastEditedBy",
      title: "lastEditedBy",
      hide: false,
      data: [],
      id: uuidv4(),
    },
  ],
  propertyNames: [],
};

// title
// text
// number
// select
// multiSelect
// status
// date
// person
// filesMedia
// checkBox
// url
// mail
// phone
// formula
// relation
// rollup
// createdTime
// createdBy
// lastEditedTime
// lastEditedBy

const tableDataInfoSlice = createSlice({
  name: "tableTabsInfo",
  initialState,
  reducers: {
    addPropertyInToData: (state, action) => {
      state.push(action.payload);
    },
    changePropertyNames: (state, action) => {
      if (action.payload.type === "delete") {
        const index = state.propertyNames.findIndex(
          (e) => e === action.payload.value
        );
        state.propertyNames.splice(index, 1);
      } else {
        state.propertyNames.push(action.payload.value);
      }
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
  },
});

export const {
  addPropertyInToData,
  changePropertyNames,
  toggleHidePropertyInToData,
  toggleHideAItemProperty,
} = tableDataInfoSlice.actions;

export default tableDataInfoSlice.reducer;

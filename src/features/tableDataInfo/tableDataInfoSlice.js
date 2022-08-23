/* eslint-disable no-param-reassign */
/* eslint-disable no-empty-pattern */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    { type: "title", title: "Name", hide: false, data: [] },
    { type: "text", title: "text", hide: false, data: [] },
    { type: "number", title: "number", hide: false, data: [] },
    { type: "@", title: "mail", hide: false, data: [] },
    { type: "phone", title: "phone", hide: false, data: [] },
    { type: "address", title: "address", hide: false, data: [] },
    { type: "title", title: "Name", hide: false, data: [] },
    { type: "text", title: "text", hide: false, data: [] },
    { type: "number", title: "number", hide: false, data: [] },
    { type: "@", title: "mail", hide: false, data: [] },
    { type: "phone", title: "phone", hide: false, data: [] },
    { type: "address", title: "address", hide: false, data: [] },
    { type: "title", title: "Name", hide: false, data: [] },
    { type: "text", title: "text", hide: false, data: [] },
    { type: "number", title: "number", hide: false, data: [] },
    { type: "@", title: "mail", hide: false, data: [] },
    { type: "phone", title: "phone", hide: false, data: [] },
    { type: "address", title: "address", hide: false, data: [] },
    { type: "title", title: "Name", hide: false, data: [] },
    { type: "text", title: "text", hide: false, data: [] },
    { type: "number", title: "number", hide: false, data: [] },
    { type: "@", title: "mail", hide: false, data: [] },
    { type: "phone", title: "phone", hide: false, data: [] },
    { type: "address", title: "address", hide: false, data: [] },
  ],
};

const tableDataInfoSlice = createSlice({
  name: "tableTabsInfo",
  initialState,
  reducers: {},
});

export const {} = tableDataInfoSlice.actions;

export default tableDataInfoSlice.reducer;

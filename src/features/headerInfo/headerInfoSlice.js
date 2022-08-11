import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  description: "",
  emoji: "",
  showDescription: false,
  showEmojiPickerPopover: false,
};

const headerInfoSlice = createSlice({
  name: "headerInfo",
  initialState,
  reducers: {
    changeTitle: (state, action) => {
      return {
        ...state,
        title: action.payload,
      };
    },
    changeDescription: (state, action) => {
      return {
        ...state,
        description: action.payload,
      };
    },
    changeEmoji: (state, action) => {
      return {
        ...state,
        emoji: action.payload,
      };
    },
    changeShowDescription: (state) => {
      return {
        ...state,
        showDescription: !state.showDescription,
      };
    },
    changeShowEmojiPickerPopover: (state) => {
      return {
        ...state,
        showEmojiPickerPopover: !state.showEmojiPickerPopover,
      };
    },
    updateInitialState: (state, action) => {
      return action.payload;
    },
  },
});

export const {
  changeTitle,
  changeDescription,
  changeEmoji,
  changeShowDescription,
  changeShowEmojiPickerPopover,
  updateInitialState,
} = headerInfoSlice.actions;

export default headerInfoSlice.reducer;

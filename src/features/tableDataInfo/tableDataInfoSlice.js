/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { PROPERTY_ID } from "../../constants/reduxConstantes";

const initialState = {
  data: [
    {
      type: "title",
      title: "Name",
      hide: false,
      deleted: false,
      currentCalculateBtnValue: "None",
      data: [],
      id: PROPERTY_ID,
    },
  ],
  propertyNames: {},
  toggleDeletedProperties: false,
  selectedPropertyForEdit: null,
  toggleDeleteDialog: false,
  toggleEditTypeDrawer: false,
  toggleAddNewPropertyType: false,
  toggleSaveNewPropertyField: false,
  searchDataInputValue: "",
  toggleNewDrawer: false,
  currentRowForDrawer: [],
};

const tableDataInfoSlice = createSlice({
  name: "tableDataInfo",
  initialState,
  reducers: {
    addPropertyInToData: (state, action) => {
      state.data.push(action.payload);
    },
    addNewPropertyNames: (state, action) => {
      state.propertyNames[action.payload.id] = action.payload.value;
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
      delete state.propertyNames[action.payload];
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
    changeToggleDeleteDialog: (state, action) => {
      state.toggleDeleteDialog = action.payload;
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
      const id = uuidv4();
      state.data.forEach((el) =>
        el.data.push({
          id,
          position: el.data.length + 1,
          value: "",
        })
      );
      const index = state.data.findIndex((el) => el.type === "title");
      const newFieldIndex = state.data[index].data.findIndex(
        (el) => el.id === id
      );
      state.data[index].data[newFieldIndex].boardType = "";
      state.data[index].data[newFieldIndex].toggleInput = false;
    },
    addNewFieldUnderSelectedRow: (state, action) => {
      const id = uuidv4();
      state.data.forEach((el) =>
        el.data.splice(action.payload + 1, 0, {
          id,
          value: "",
          position: el.data.length + 1,
        })
      );
      const index = state.data.findIndex((el) => el.type === "title");
      const newFieldIndex = state.data[index].data.findIndex(
        (el) => el.id === id
      );
      state.data[index].data[newFieldIndex].boardType = "";
      state.data[index].data[newFieldIndex].toggleInput = false;
    },
    deleteSelectedRow: (state, action) => {
      state.data.forEach((elem) => elem.data.splice(action.payload, 1));
    },
    duplicateRow: (state, action) => {
      const id = uuidv4();
      state.data.forEach((el) =>
        el.data.splice(action.payload + 1, 0, {
          id,
          value: el.data[action.payload].value,
          position: el.data.length + 1,
        })
      );
      const index = state.data.findIndex((el) => el.type === "title");
      const newFieldIndex = state.data[index].data.findIndex(
        (el) => el.id === id
      );
      state.data[index].data[newFieldIndex].boardType = "";
      state.data[index].data[newFieldIndex].toggleInput = false;
    },
    changeValueinPropertyData: (state, action) => {
      const index = state.data.findIndex((el) => el.id === action.payload.id);
      state.data[index].data[action.payload.index].value = action.payload.value;
    },
    changeToggleSaveNewPropertyField: (state, action) => {
      state.toggleSaveNewPropertyField = action.payload;
    },
    changeCurrentCalculateBtnValue: (state, action) => {
      const index = state.data.findIndex((e) => e.id === action.payload.id);
      state.data[index].currentCalculateBtnValue = action.payload.value;
    },
    DragAndDropToProperty: (state, action) => {
      const [reorderItem] = state.data.splice(action.payload.sourceIndex, 1);
      state.data.splice(action.payload.destinationIndex, 0, reorderItem);
    },
    dragAndDropRows: (state, action) => {
      state.data.forEach((el) => {
        const [reorderItem] = el.data.splice(action.payload.sourceIndex, 1);
        el.data.splice(action.payload.destinationIndex, 0, reorderItem);
      });
    },
    changeSearchDataInputValue: (state, action) => {
      state.searchDataInputValue = action.payload;
    },
    sortDataToAscendingOrDescending: (state, action) => {
      action.payload.positions.forEach((position) => {
        state.data.forEach((item) => {
          const [reorderItem] = item.data.splice(
            item.data.findIndex((el) => el.position === position),
            1
          );
          item.data.push(reorderItem);
        });
      });
    },
    changeToggleNewDrawer: (state, action) => {
      state.toggleNewDrawer = action.payload;
    },
    changeCurrentRowForDrawer: (state, action) => {
      state.currentRowForDrawer = action.payload;
    },
    addRowFromBoardOnTop: (state, action) => {
      state.data.forEach((el) =>
        el.data.unshift({
          id: uuidv4(),
          position: el.data.length + 1,
          value: "",
        })
      );
      const index = state.data.findIndex((el) => el.type === "title");
      state.data[index].data[0].boardType = action.payload.groupName;
      state.data[index].data[0].toggleInput = true;
    },
    addRowFromBoardOnBottom: (state, action) => {
      state.data.forEach((el) =>
        el.data.push({
          id: uuidv4(),
          position: el.data.length + 1,
          value: "",
        })
      );
      const index = state.data.findIndex((el) => el.type === "title");
      state.data[index].data[state.data[index].data.length - 1].boardType =
        action.payload.groupName;
      state.data[index].data[
        state.data[index].data.length - 1
      ].toggleInput = true;
    },
    changeTitleBoardOrDelete: (state, action) => {
      const index = state.data.findIndex((el) => el.type === "title");
      const elementIndex = state.data[index].data.findIndex(
        (el) => el.id === action.payload.id
      );
      if (action.payload.value) {
        state.data[index].data[elementIndex].value = action.payload.value;
        state.data[index].data[elementIndex].toggleInput = false;
      } else {
        state.data.forEach((el) => el.data.splice(elementIndex, 1));
      }
    },
    changeToggleInputItem: (state, action) => {
      const index = state.data.findIndex((el) => el.type === "title");
      const elementIndex = state.data[index].data.findIndex(
        (el) => el.id === action.payload.id
      );
      state.data[index].data[elementIndex].toggleInput = action.payload.bool;
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
  changeToggleDeleteDialog,
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
  changeToggleSaveNewPropertyField,
  changeCurrentCalculateBtnValue,
  DragAndDropToProperty,
  dragAndDropRows,
  changeSearchDataInputValue,
  sortDataToAscendingOrDescending,
  changeToggleNewDrawer,
  changeCurrentRowForDrawer,
  addRowFromBoardOnTop,
  addRowFromBoardOnBottom,
  changeTitleBoardOrDelete,
  changeToggleInputItem,
} = tableDataInfoSlice.actions;

export default tableDataInfoSlice.reducer;

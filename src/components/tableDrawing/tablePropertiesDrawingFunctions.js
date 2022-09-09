import { PROPERTIES } from "../../constants/headerContantes/headerConstantes";
import {
  changeSelectedValueInView,
  changeShowCreateTabPopover,
  changeShowView,
  changeToggleAddPropertyPopover,
} from "../../features/showPopoversInfo/showPopoverInfoSlice";
import {
  changeToggleAddNewPropertyType,
  changetoggleEditTypeDrawer,
  changeToggleSaveNewPropertyField,
} from "../../features/tableDataInfo/tableDataInfoSlice";

const addProperty = (dispatch) => {
  dispatch(changeShowCreateTabPopover(true));
  dispatch(changeSelectedValueInView(PROPERTIES));
  dispatch(changeShowView(true));
  dispatch(changeToggleAddPropertyPopover(true));
  dispatch(changetoggleEditTypeDrawer(true));
  dispatch(changeToggleAddNewPropertyType(true));
  dispatch(changeToggleSaveNewPropertyField(true));
};

export default addProperty;

export const openPropertiesField = (dispatch) => {
  dispatch(changeShowCreateTabPopover(true));
  dispatch(changeSelectedValueInView(PROPERTIES));
  dispatch(changeShowView(true));
};

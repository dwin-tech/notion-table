import {
  changeNameNewTab,
  changeCreatedTabName,
  changeGoEditPropertyFromPopover,
} from "../../../features/tableTabsInfo/tableTabsInfoSlice";
import {
  changeShowCreateTabPopover,
  changeShowNewTabPopover,
  changeShowView,
  changeToggleAddPropertyPopover,
} from "../../../features/showPopoversInfo/showPopoverInfoSlice";
import checkName from "../../../utils/popoverFuncs";
import { changetoggleEditTypeDrawer } from "../../../features/tableDataInfo/tableDataInfoSlice";

const onClosePopover = (
  dispatch,
  createdTabName,
  showNewTabPopover,
  selectedObject,
  selectedTabId
) => {
  if (createdTabName && !showNewTabPopover) {
    if (checkName(selectedObject)) {
      dispatch(changeNameNewTab({ id: selectedTabId, name: createdTabName }));
      dispatch(changeCreatedTabName(""));
    } else {
      dispatch(
        changeNameNewTab({
          id: selectedTabId,
          name: selectedObject?.name,
        })
      );
    }
  } else if (showNewTabPopover) {
    dispatch(changeNameNewTab({ id: selectedTabId, name: "" }));
  } else {
    dispatch(
      changeNameNewTab({
        id: selectedTabId,
        name: selectedObject?.name,
      })
    );
  }
  dispatch(changeShowCreateTabPopover(false));
  dispatch(changeShowNewTabPopover(false));
  dispatch(changeShowView(false));
  dispatch(changeGoEditPropertyFromPopover(false));
  dispatch(changeToggleAddPropertyPopover(false));
  dispatch(changetoggleEditTypeDrawer(false));
};

export default onClosePopover;

export const doneAndCloseBtn = (
  dispatch,
  showNewTabPopover,
  selectedTabId,
  createdTabName,
  selectedObject
) => {
  if (!showNewTabPopover) {
    if (checkName(selectedObject)) {
      dispatch(changeNameNewTab({ id: selectedTabId, name: createdTabName }));
    } else {
      dispatch(
        changeNameNewTab({ id: selectedTabId, name: selectedObject?.name })
      );
    }
  } else if (!checkName(selectedObject) && createdTabName) {
    dispatch(changeNameNewTab({ id: selectedTabId, name: createdTabName }));
  } else if (checkName(selectedObject)) {
    dispatch(changeNameNewTab({ id: selectedTabId, name: createdTabName }));
  } else {
    dispatch(changeNameNewTab({ id: selectedTabId, name: "" }));
  }
  dispatch(changeShowCreateTabPopover(false));
  dispatch(changeToggleAddPropertyPopover(false));
  dispatch(changetoggleEditTypeDrawer(false));
  dispatch(changeGoEditPropertyFromPopover(false));
  // TODO get rid of setTimeout (popover onClose function works with a delay)
  setTimeout(() => {
    dispatch(changeShowNewTabPopover(false));
    dispatch(changeShowView(false));
  }, 500);
};

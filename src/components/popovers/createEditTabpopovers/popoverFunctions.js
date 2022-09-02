import {
  changeNameNewTab,
  changeCreatedTabName,
} from "../../../features/tableTabsInfo/tableTabsInfoSlice";
import {
  changeShowCreateTabPopover,
  changeShowNewTabPopover,
  changeShowView,
  changeToggleAddPropertyPopover,
} from "../../../features/showPopoversInfo/showPopoverInfoSlice";
import chekedName from "../../../utils/popoverFuncs";
import { changetoggleEditTypeDrawer } from "../../../features/tableDataInfo/tableDataInfoSlice";

const onClosePopover = (
  dispatch,
  createdTabName,
  showNewTabPopover,
  selectedObject,
  selectedTabId
) => {
  if (createdTabName && !showNewTabPopover) {
    if (chekedName(selectedObject)) {
      dispatch(changeNameNewTab({ id: selectedTabId, name: createdTabName }));
      dispatch(changeCreatedTabName(""));
    } else {
      dispatch(
        changeNameNewTab({
          id: selectedTabId,
          name: selectedObject.name,
        })
      );
    }
  } else if (showNewTabPopover) {
    dispatch(changeNameNewTab({ id: selectedTabId, name: "" }));
  } else {
    dispatch(
      changeNameNewTab({
        id: selectedTabId,
        type: selectedObject?.type,
        name: selectedObject?.name,
      })
    );
  }
  dispatch(changeShowCreateTabPopover(false));
  dispatch(changeShowNewTabPopover(false));
  dispatch(changeShowView(false));
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
    if (chekedName(selectedObject)) {
      dispatch(changeNameNewTab({ id: selectedTabId, name: createdTabName }));
    } else {
      dispatch(
        changeNameNewTab({ id: selectedTabId, name: selectedObject?.name })
      );
    }
  } else {
    dispatch(changeNameNewTab({ id: selectedTabId, name: "" }));
  }
  dispatch(changeShowCreateTabPopover(false));
  dispatch(changeToggleAddPropertyPopover(false));
  // TODO get rid of setTimeout (popover onClose function works with a delay)
  setTimeout(() => {
    dispatch(changeShowNewTabPopover(false));
    dispatch(changeShowView(false));
  }, 500);
};

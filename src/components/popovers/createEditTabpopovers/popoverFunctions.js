import {
  changeNameNewTab,
  changeCreatedTabName,
} from "../../../features/tableTabsInfo/tableTabsInfoSlice";
import {
  changeShowCreateTabPopover,
  changeShowNewTabPopover,
  changeShowView,
} from "../../../features/showPopoversInfo/showPopoverInfoSlice";
import chekedName from "../../../utils/popoverFuncs";

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
  dispatch(changeShowView(false));
  dispatch(changeShowNewTabPopover(false));
};

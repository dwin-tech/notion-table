import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import style from "./popovers.module.scss";
import CustomInput from "../../custom/CustomInput";
import CreateTabPopoverButtons from "./CreateTabPopoverButtons";
import CreateSelectedButtonJsx from "./CreateSelectedButtonDrawing";
import { changeShowCreateTabPopover } from "../../../features/showPopoversInfo/showPopoverInfoSlice";
import {
  changeCreatedTabName,
  changeNameNewTab,
} from "../../../features/tableTabsInfo/tableTabsInfoSlice";

function EditTabPopoverDrawing() {
  const dispatch = useDispatch();
  const { showView } = useSelector((store) => store.showPopoverInfo);
  const {
    tabsArray,
    selectedTabId,
    createdTabName,
    goEditPropertyFromPopover,
  } = useSelector((store) => store.tableTabsInfo);

  const currentTab = tabsArray.find((e) => e.id === selectedTabId);

  const [viewName, setViewName] = useState("");

  const changeViewName = (val) => {
    setViewName(val);
    if (val) {
      dispatch(changeNameNewTab({ id: selectedTabId, name: val }));
    }
  };

  useEffect(() => {
    if (!showView && createdTabName) {
      dispatch(changeNameNewTab({ id: selectedTabId, name: createdTabName }));
      dispatch(changeCreatedTabName(""));
    }
  }, [showView]);

  const closeBtn = () => {
    dispatch(changeShowCreateTabPopover(false));
    if (viewName) {
      dispatch(
        changeNameNewTab({
          id: selectedTabId,
          name: viewName,
        })
      );
    }
  };

  const onChangeDuplicateTabName = (value) => {
    dispatch(changeNameNewTab({ id: currentTab.id, name: value }));
  };

  return (
    <div className={style.layout_options_container}>
      {!showView ? (
        <div className={style.left_border}>
          <div className={style.view_container}>
            <p>View options</p>
            <button
              className={style.onclose_btn}
              type="submit"
              onClick={() => closeBtn()}
            >
              <CloseIcon />
            </button>
          </div>
          <div>
            {" "}
            {goEditPropertyFromPopover ? (
              <input
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                className={style.custom_input}
                defaultValue={currentTab.name}
                placeholder="View name"
                onBlur={(e) => onChangeDuplicateTabName(e.target.value)}
              />
            ) : (
              <CustomInput placeholder="View name" onChange={changeViewName} />
            )}
          </div>
          <CreateTabPopoverButtons />
        </div>
      ) : (
        <div className={style.left_second_border}>
          <CreateSelectedButtonJsx />
        </div>
      )}
    </div>
  );
}

export default EditTabPopoverDrawing;

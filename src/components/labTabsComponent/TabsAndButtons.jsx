import React, { useMemo, useEffect } from "react";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import style from "./tabs.module.scss";
import {
  changeSelectedValueInView,
  changeShowCreateTabPopover,
  changeShowNewTabPopover,
  changeShowView,
} from "../../features/showPopoversInfo/showPopoverInfoSlice";
import TableFunctions from "../functionsForWorkingWithTable/TableFunctions";
import { LAYOUT } from "../../constants/headerContantes/headerConstantes";
import { changeSelectedType } from "../../features/tableTypeInfo/tableTypeInfoSlice";
import {
  addNewTab,
  changeSelectedTabId,
  updateTabArray,
} from "../../features/tableTabsInfo/tableTabsInfoSlice";
import setDataIntoStorage, {
  getDatainToStorage,
} from "../../utils/callLocalStorage";
import selectTabIcon from "../../utils/tabIeIcons";

export default function TabsAndButtons() {
  const dispatch = useDispatch();
  const { tabsArray, selectedTabId } = useSelector(
    (store) => store.tableTabsInfo
  );

  const handleChange = (event, newValue) => {
    dispatch(changeSelectedTabId(tabsArray[newValue]?.id));
    setDataIntoStorage("selectedTabId", tabsArray[newValue]?.id);
  };

  const currentTab = useMemo(() => {
    return tabsArray.findIndex((e) => e.id === selectedTabId);
  }, [selectedTabId]);

  useEffect(() => {
    const tabs = getDatainToStorage("tabs");
    const getSelectedTabId = getDatainToStorage("selectedTabId");
    if (tabs) {
      dispatch(updateTabArray(tabs));
    }
    if (getSelectedTabId) {
      dispatch(changeSelectedTabId(getSelectedTabId));
    } else {
      dispatch(changeSelectedTabId(tabsArray[0]?.id));
    }
  }, []);

  useEffect(() => {
    setDataIntoStorage("tabs", tabsArray);
  }, [tabsArray]);

  const addTabBtn = () => {
    dispatch(changeShowCreateTabPopover(true));
    dispatch(changeShowNewTabPopover(true));
    dispatch(changeSelectedValueInView(LAYOUT));
    dispatch(changeShowView(true));
    dispatch(changeSelectedType("table"));
    const id = uuid();
    setDataIntoStorage("selectedTabId", id);
    dispatch(changeSelectedTabId(id));
    dispatch(
      addNewTab({
        type: "table",
        name: "table",
        id,
      })
    );
  };

  return (
    <div className={style.tabs_btns_section}>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
        }}
      >
        {tabsArray.map((e, i) => (
          <Tab
            icon={selectTabIcon[e.type]}
            iconPosition="start"
            value={i}
            key={e.id}
            label={e.name}
          />
        ))}
      </Tabs>
      <button
        className={style.add_btn}
        type="submit"
        onClick={(e) => addTabBtn(e)}
      >
        <AddIcon />
      </button>
      <TableFunctions />
    </div>
  );
}

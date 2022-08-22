import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
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
} from "../../utils/callLoacalStoraje";
import selectTabIcon from "../../utils/tabIeIcons";

export default function TabsAndButtons() {
  const dispatch = useDispatch();
  const { tabsArray } = useSelector((store) => store.tableTabsInfo);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(changeSelectedTabId(tabsArray[value]?.id));
  };

  useEffect(() => {
    const result = getDatainToStorage("tabs");
    const selectedTab = getDatainToStorage("selectedTab");
    if (result) {
      dispatch(updateTabArray(result));
    }
    if (selectedTab) {
      setValue(selectedTab);
      dispatch(changeSelectedTabId(tabsArray[selectedTab]?.id));
    }
  }, []);

  useEffect(() => {
    setDataIntoStorage("tabs", tabsArray);
  }, [tabsArray]);

  useEffect(() => {
    setDataIntoStorage("selectedTab", value);
    dispatch(changeSelectedTabId(tabsArray[value]?.id));
  }, [value]);

  const addTabBtn = (e) => {
    dispatch(changeShowCreateTabPopover(true));
    dispatch(changeShowNewTabPopover(true));
    dispatch(changeSelectedValueInView(LAYOUT));
    dispatch(changeShowView(true));
    dispatch(changeSelectedType("table"));
    dispatch(
      addNewTab({
        type: "table",
        name: "table",
        id: uuid(),
      })
    );
    handleChange(e, tabsArray.length);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: {
          sm: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },
        bgcolor: "background.paper",
      }}
    >
      <Tabs
        value={value}
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
    </Box>
  );
}

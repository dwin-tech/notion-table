import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Board from "./components/board/boardHeader/Board";
import Header from "./components/header/Header";
import TabsAndButtons from "./components/labTabsComponent/TabsAndButtons";
import Table from "./components/table/Table";
import {
  updatePropertyNames,
  updateTableData,
} from "./features/tableDataInfo/tableDataInfoSlice";
import "./style/style.scss";
import setDataIntoStorage, {
  getDatainToStorage,
} from "./utils/callLocalStorage";

export default function App() {
  const { tabsArray, selectedTabId } = useSelector(
    (store) => store.tableTabsInfo
  );

  const currentTab = tabsArray.find((e) => e.id === selectedTabId);

  const dispatch = useDispatch();
  const { data, propertyNames } = useSelector((store) => store.tableDataInfo);

  useEffect(() => {
    const newTableData = getDatainToStorage("tableData");
    const getPropertyNames = getDatainToStorage("propertyNames");
    if (newTableData) {
      dispatch(updateTableData(newTableData));
    }
    if (getPropertyNames) {
      dispatch(updatePropertyNames(getPropertyNames));
    }
  }, []);

  useEffect(() => {
    setDataIntoStorage("tableData", data);
  }, [data]);

  useEffect(() => {
    setDataIntoStorage("propertyNames", propertyNames);
  }, [propertyNames]);

  const selectViewByTypeCurrentTab = () => {
    if (currentTab.type === "table") return <Table />;
    if (currentTab.type === "board") return <Board />;
    return <div className="comming_soon">Comming soon</div>;
  };

  return (
    <div className="App">
      <div className="big_Container">
        <Header />
        <TabsAndButtons />
        {selectViewByTypeCurrentTab()}
      </div>
    </div>
  );
}

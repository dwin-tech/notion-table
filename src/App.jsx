import React from "react";
import { useSelector } from "react-redux";
import Board from "./components/board/Board";
import Header from "./components/header/Header";
import TabsAndButtons from "./components/labTabsComponent/TabsAndButtons";
import Table from "./components/table/Table";
import "./style/style.scss";

export default function App() {
  const { tabsArray, selectedTabId } = useSelector(
    (store) => store.tableTabsInfo
  );

  const currentTab = tabsArray.find((e) => e.id === selectedTabId);

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

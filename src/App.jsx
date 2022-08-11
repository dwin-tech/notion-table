import React from "react";
import Header from "./components/header/Header";
import TableTabs from "./components/tableTabs/TableTabs";
import "./style/style.scss";

export default function App() {
  return (
    <div className="App">
      <div className="big_Container">
        <Header />
        <TableTabs />
      </div>
    </div>
  );
}

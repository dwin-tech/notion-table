import React from "react";
import Header from "./components/header/Header";
import TabsAndButtons from "./components/labTabsComponent/TabsAndButtons";
import "./style/style.scss";

export default function App() {
  return (
    <div className="App">
      <div className="big_Container">
        <Header />
        <TabsAndButtons />
      </div>
    </div>
  );
}

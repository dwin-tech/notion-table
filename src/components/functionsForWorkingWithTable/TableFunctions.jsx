import React from "react";
import CreateNewDrawer from "../drawerForCreateItem/NewItemDrawer";
import CreateEditTabPopover from "../popovers/createEditTabpopovers/CreateEditTabPopover";
import FilterSortPopover from "../popovers/filterAndSortPopover/FilterSortPopover";
import SearchTableInput from "../searchTableInput/SearchTableInput";
import TaskTitleTempletePopover from "../popovers/taskTitlePopover/TaskTitleTempletePopover";
import style from "./tableFunctions.module.scss";

function TableFunctions() {
  return (
    <div className={style.tableFunction_Container}>
      <FilterSortPopover buttonName="Filter" />
      <FilterSortPopover buttonName="Sort" />
      <SearchTableInput />
      <CreateEditTabPopover />
      <div className={style.new_and_template_btn}>
        <CreateNewDrawer />
        <TaskTitleTempletePopover />
      </div>
    </div>
  );
}

export default TableFunctions;

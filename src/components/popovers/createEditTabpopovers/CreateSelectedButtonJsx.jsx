import React from "react";
import { useSelector } from "react-redux";
import {
  LAYOUT,
  PROPERTIES,
  FILTER,
  SORT,
  GROUP,
} from "../../../constants/headerContantes/headerConstantes";
import Layout from "./drawSelectedButton/layout/Layout";

function CreateSelectedButtonJsx() {
  const { selectedValueInView } = useSelector((store) => store.showPopoverInfo);
  function buildSelectedButtonJsx() {
    if (selectedValueInView === LAYOUT) {
      return <Layout />;
    }
    if (selectedValueInView === PROPERTIES) {
      return <div>Properties</div>;
    }
    if (selectedValueInView === FILTER) {
      return <div>filter</div>;
    }
    if (selectedValueInView === SORT) {
      return <div>sort</div>;
    }
    if (selectedValueInView === GROUP) {
      return <div>group</div>;
    }
    return <div>Reload</div>;
  }

  return buildSelectedButtonJsx();
}

export default CreateSelectedButtonJsx;

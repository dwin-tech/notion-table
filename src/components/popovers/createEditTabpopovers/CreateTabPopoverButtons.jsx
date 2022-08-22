/* eslint-disable no-unused-vars */
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LockIcon from "@mui/icons-material/Lock";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import {
  changeShowView,
  changeSelectedValueInView,
} from "../../../features/showPopoversInfo/showPopoverInfoSlice";
import style from "./popovers.module.scss";
import buttons from "./buttonsArray";

export default function CreateTabPopoverButtons() {
  const dispatch = useDispatch();

  const popoverBtns = (type) => {
    dispatch(changeSelectedValueInView(type));
    dispatch(changeShowView(true));
  };
  return (
    <div className={style.layout_section}>
      <div className={style.layout_buttons}>
        {" "}
        {buttons.map((e, i) => {
          return (
            <>
              <button
                key={uuid()}
                type="submit"
                className={style.layout_container}
                onClick={() => popoverBtns(e[1])}
              >
                <div>
                  {e[2]} <p>{e[0]}</p>
                </div>
                <div>
                  <p>type</p>
                  <KeyboardArrowRightIcon />
                </div>
              </button>
              {!i && <div className={style.border_bottom} />}
            </>
          );
        })}
      </div>
      <div className={style.border_bottom} />
      <div className={style.tab_popover_custom_btn}>
        <button type="submit">
          <LockIcon />
          <p>Lock database</p>
        </button>
        <button type="submit">
          <InsertLinkIcon />
          <p>Copy link to view</p>
        </button>
        <button type="submit">
          <ContentCopyIcon />
          <p>Duplicate view</p>
        </button>
        <button type="submit">
          <DeleteIcon />
          <p>Delete view</p>
        </button>
      </div>
    </div>
  );
}

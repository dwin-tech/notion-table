import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import InboxIcon from "@mui/icons-material/Inbox";
import AddIcon from "@mui/icons-material/Add";
import BoardList from "../boardList/BoardList";
import BoardHeaderTitlePopover from "./BoardHeaderTitlePopover";
import style from "./board.module.scss";
import BoardCalculatePopover from "./BoardCalculatePopover";
import HideDeleteAndColorPopover from "./HideDeleteAndColorPopover";

function Board() {
  const { tabsArray, selectedTabId } = useSelector(
    (store) => store.tableTabsInfo
  );

  const boardGroup = tabsArray.find(
    (el) => el.id === selectedTabId
  )?.boardGroup;

  return (
    <div className={style.board_header_section}>
      <div>
        {boardGroup.map((el) => (
          <div className={style.high_container} key={uuidv4()}>
            <div className={style.board_header_container}>
              <div>
                {Object.keys(el)[0] === "" ? (
                  <div className={style.board_group_name}>
                    <InboxIcon />
                    <p>No Result</p>
                  </div>
                ) : (
                  <BoardHeaderTitlePopover name={el} />
                )}
                <BoardCalculatePopover boardGroup={Object.values(el)[0]} />
              </div>
              <div className={style.more_and_add_btn_container}>
                <HideDeleteAndColorPopover />
                <button type="submit">
                  <AddIcon />
                </button>
              </div>
            </div>
            <BoardList titles={el} />
            <button type="submit" className={style.new_btn}>
              <AddIcon />
              <p>New</p>
            </button>
          </div>
        ))}
      </div>
      <div type="submit" className={style.add_new_group_btn_container}>
        <BoardHeaderTitlePopover name={<AddIcon />} />
      </div>
    </div>
  );
}

export default Board;

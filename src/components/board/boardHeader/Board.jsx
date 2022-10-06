import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import InboxIcon from "@mui/icons-material/Inbox";
import AddIcon from "@mui/icons-material/Add";
import BoardList from "../boardList/BoardList";
import BoardHeaderTitlePopover from "./BoardHeaderTitlePopover";
import style from "./board.module.scss";
import BoardCalculatePopover from "./BoardCalculatePopover";
import HideDeleteAndColorPopover from "./HideDeleteAndColorPopover";
import GroupModal from "../../modal/GroupModal";
import {
  addRowFromBoardOnBottom,
  addRowFromBoardOnTop,
  changeTitleBoardOrDelete,
  changeToggleInputItem,
} from "../../../features/tableDataInfo/tableDataInfoSlice";

function Board() {
  const dispatch = useDispatch();
  const { tabsArray, selectedTabId } = useSelector(
    (store) => store.tableTabsInfo
  );
  const { data } = useSelector((store) => store.tableDataInfo);

  const { toggleShowModal } = useSelector((store) => store.tableTabsInfo);
  const titleData = data.find((el) => el.type === "title")?.data;

  const boardGroup = tabsArray.find(
    (el) => el.id === selectedTabId
  )?.boardGroup;

  const saveOrDeleteField = (val, id) => {
    setTimeout(() => {
      dispatch(changeTitleBoardOrDelete({ value: val, id }));
      dispatch(changeToggleInputItem({ id, bool: false }));
    }, 200);
  };

  const addRowInToData = (name, where) => {
    dispatch(
      where === "top"
        ? addRowFromBoardOnTop({ groupName: name })
        : addRowFromBoardOnBottom({ groupName: name })
    );
  };

  return (
    <div className={style.container}>
      <div className={style.board_header_section}>
        <div className={style.flex_container}>
          <div className={style.group_container}>
            {boardGroup.map((el, i) => (
              <div className={style.high_container} key={uuidv4()}>
                <div className={style.board_header_container}>
                  <div>
                    {el === "" ? (
                      <div className={style.board_group_name}>
                        <InboxIcon />
                        <p>No Result</p>
                      </div>
                    ) : (
                      <BoardHeaderTitlePopover
                        selectedTabId={selectedTabId}
                        boardGroup={boardGroup}
                        name={el}
                        index={i}
                      />
                    )}
                    <BoardCalculatePopover
                      boardGroup={titleData.filter(
                        (item) => item.boardType === el
                      )}
                    />
                  </div>
                  <div className={style.more_and_add_btn_container}>
                    <HideDeleteAndColorPopover />
                    <button
                      type="submit"
                      onClick={() => addRowInToData(el, "top")}
                    >
                      <AddIcon />
                    </button>
                  </div>
                </div>
                <BoardList
                  onBlur={saveOrDeleteField}
                  titles={titleData.filter((item) => item.boardType === el)}
                />
                <button
                  type="submit"
                  className={style.new_btn}
                  onClick={() => addRowInToData(el, "bottom")}
                >
                  <AddIcon />
                  <p>New</p>
                </button>
              </div>
            ))}
          </div>
          <div type="submit" className={style.add_new_group_btn_container}>
            <BoardHeaderTitlePopover
              selectedTabId={selectedTabId}
              boardGroup={boardGroup}
              name=""
              index={-1}
            />
          </div>
          {toggleShowModal && <GroupModal />}
        </div>
      </div>
    </div>
  );
}

export default Board;

import React from "react";
import PropTypes from "prop-types";
import EditIcon from "@mui/icons-material/Edit";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import style from "./boardList.module.scss";
import RowFeaturePopover from "../boardHeader/RowFeaturePopover";
import {
  changeToggleInputItem,
  changeToggleNewDrawer,
} from "../../../features/tableDataInfo/tableDataInfoSlice";

function BoardList({ titles, onBlur }) {
  const dispatch = useDispatch();

  const changeToggleInput = (id, bool) => {
    dispatch(changeToggleInputItem({ id, bool }));
  };

  // eslint-disable-next-line no-unused-vars
  const handleOpenDrawer = (id) => {
    dispatch(changeToggleNewDrawer(true));
    // dispatch(changeCurrentRowForDrawer(item));
  };

  return (
    <div>
      {titles.map((item) =>
        !item.toggleInput ? (
          <div key={uuidv4()} className={style.board_btn}>
            <div>{item?.value || "Untitled"}</div>
            <div className={style.board_icon_container}>
              <EditIcon onClick={() => changeToggleInput(item.id, true)} />
              <div />
              <RowFeaturePopover />
            </div>
          </div>
        ) : (
          <div key={uuidv4()} className={style.board_input_area}>
            <InsertDriveFileIcon className={style.input_icon} />
            <input
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
              type="text"
              defaultValue={item.value}
              placeholder="Type a name..."
              onBlur={(e) => onBlur(e.target.value, item.id)}
            />
            <div className={style.board_icon_container}>
              <ImportContactsIcon
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenDrawer(item.id);
                }}
              />
              <div />
              <RowFeaturePopover />
            </div>
          </div>
        )
      )}
    </div>
  );
}

BoardList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  titles: PropTypes.array.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default BoardList;

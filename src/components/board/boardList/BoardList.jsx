import React, { useState } from "react";
import PropTypes from "prop-types";
import EditIcon from "@mui/icons-material/Edit";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { v4 as uuidv4 } from "uuid";
import style from "./boardList.module.scss";
import RowFeaturePopover from "../boardHeader/RowFeaturePopover";

function BoardList({ titles }) {
  const [editTitleByIndex, setEditTitleByIndex] = useState(-1);

  return (
    <div>
      {Object.values(titles)[0].map((item, index) =>
        index !== editTitleByIndex ? (
          <div key={uuidv4()} className={style.board_btn}>
            <div>{item.value || "Untitled"}</div>
            <div className={style.board_icon_container}>
              <EditIcon onClick={() => setEditTitleByIndex(index)} />
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
              onBlur={() => setEditTitleByIndex(-1)}
            />
            <div className={style.board_icon_container}>
              <ImportContactsIcon />
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
  titles: PropTypes.object.isRequired,
};

export default BoardList;

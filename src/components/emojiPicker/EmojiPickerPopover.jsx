import Picker from "emoji-picker-react";
import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { useDispatch, useSelector } from "react-redux";
import {
  changeEmoji,
  changeShowEmojiPickerPopover,
} from "../../features/headerInfo/headerInfoSlice";
import style from "./emojiPicker.module.scss";
import smile from "../smile/smiles";

export default function EmojiPickerPopover() {
  const dispatch = useDispatch();
  const { showEmojiPickerPopover } = useSelector((store) => store.headerInfo);
  // const [anchorEl, setAnchorEl] = useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleClose = () => {
    dispatch(changeShowEmojiPickerPopover());
  };

  const id = showEmojiPickerPopover ? "simple-popover" : undefined;

  return (
    <div>
      <Popover
        id={id}
        open={showEmojiPickerPopover}
        // anchorEl={}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Typography component="div">
          <div className={style.emoji_btns}>
            <div>
              <button type="submit">Emoji</button>
            </div>
            <div>
              <button
                type="submit"
                className={style.with_icon_btn}
                onClick={() => {
                  const emoji = smile[Math.floor(Math.random() * 55)];
                  dispatch(changeEmoji(emoji));
                  dispatch(changeShowEmojiPickerPopover());
                }}
              >
                <TagFacesIcon fontSize="string" />
                <div>Random</div>
              </button>
              <button
                type="submit"
                onClick={() => {
                  dispatch(changeEmoji(""));
                  dispatch(changeShowEmojiPickerPopover());
                }}
              >
                Remove
              </button>
            </div>
          </div>
          <Picker
            onEmojiClick={(e, o) => {
              dispatch(changeEmoji(o.emoji));
              dispatch(changeShowEmojiPickerPopover());
            }}
          />
        </Typography>
      </Popover>
    </div>
  );
}

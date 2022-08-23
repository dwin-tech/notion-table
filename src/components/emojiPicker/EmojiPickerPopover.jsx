import Picker from "emoji-picker-react";
import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import PropTypes from "prop-types";
import style from "./emojiPicker.module.scss";
import emojies from "../emojies/emojies";
import {
  CHOSSEN_EMOJI,
  TOGGLE_SHOW_EMOJI_PICKER_POPOVER,
} from "../../constants/headerContantes/headerConstantes";
import setDataIntoStorage from "../../utils/callLocalStorage";

export default function EmojiPickerPopover({ show, setShow, setEmoji }) {
  const id = show ? "simple-popover" : undefined;

  const handleClose = () => {
    setShow(false);
    setDataIntoStorage(TOGGLE_SHOW_EMOJI_PICKER_POPOVER, false);
  };

  const randomEmoji = () => {
    const emoji = emojies[Math.floor(Math.random() * (emojies.length - 1))];
    setEmoji(emoji);
    setDataIntoStorage(CHOSSEN_EMOJI, emoji);
    handleClose();
  };

  const removeEmoji = () => {
    setEmoji("");
    localStorage.removeItem(CHOSSEN_EMOJI);
    handleClose();
  };

  const changeEmoji = (e, o) => {
    setEmoji(o.emoji);
    setDataIntoStorage(CHOSSEN_EMOJI, o.emoji);
    handleClose();
  };

  return (
    <div>
      <Popover
        id={id}
        open={show}
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
                onClick={randomEmoji}
              >
                <TagFacesIcon fontSize="string" />
                <div>Random</div>
              </button>
              <button type="submit" onClick={removeEmoji}>
                Remove
              </button>
            </div>
          </div>
          <Picker onEmojiClick={(e, o) => changeEmoji(e, o)} />
        </Typography>
      </Popover>
    </div>
  );
}

EmojiPickerPopover.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  setEmoji: PropTypes.func.isRequired,
};

import React, { useState, useEffect } from "react";
import style from "./header.module.scss";
import EmojiPickerPopover from "../emojiPicker/EmojiPickerPopover";
import HeaderCustomButtons from "./HeaderButtons";
import HeaderCustomInput from "./HeaderInput";
import {
  DESCRIPTION,
  TITLE,
  CHOSSEN_EMOJI,
  TOOGLE_SHOW_DESCRIPTION,
  TOGGLE_SHOW_EMOJI_PICKER_POPOVER,
} from "../../constants/headerContantes/headerConstantes";
import setDataIntoStorage, {
  getDatainToStorage,
} from "../../utils/callLocalStorage";

export default function Header() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [chosenEmoji, setChosenEmoji] = useState("");
  const [toggleShowDescription, setToggleShowDescription] = useState(false);
  const [toggleShowEmojiPickerPopover, setToggleShowEmojiPickerPopover] =
    useState(false);

  const changeTitle = (value) => {
    setTitle(value);
    setDataIntoStorage(TITLE, value);
  };

  const changeDescription = (value) => {
    setDescription(value);
    setDataIntoStorage(DESCRIPTION, value);
  };

  useEffect(() => {
    setTitle(getDatainToStorage(TITLE) || "");
    setDescription(getDatainToStorage(DESCRIPTION) || "");
    setChosenEmoji(getDatainToStorage(CHOSSEN_EMOJI) || "");
    setToggleShowDescription(
      getDatainToStorage(TOOGLE_SHOW_DESCRIPTION) || false
    );
    setToggleShowEmojiPickerPopover(
      getDatainToStorage(TOGGLE_SHOW_EMOJI_PICKER_POPOVER) || false
    );
  }, []);

  useEffect(() => {
    document.querySelector("title").textContent = title
      ? `${title}`
      : "Notion table";
  }, [title]);

  return (
    <div className={style.header_section}>
      {" "}
      <div className={style.header_container}>
        <HeaderCustomButtons
          chosenEmoji={chosenEmoji}
          setChosenEmoji={setChosenEmoji}
          description={description}
          toggleShowDescription={toggleShowDescription}
          setToggleShowDescription={setToggleShowDescription}
        />
      </div>
      <EmojiPickerPopover
        show={toggleShowEmojiPickerPopover}
        setShow={setToggleShowEmojiPickerPopover}
        setEmoji={setChosenEmoji}
      />
      <div className={style.emoji_and_input_contsiner}>
        <button
          type="submit"
          onClick={() => {
            setToggleShowEmojiPickerPopover(true);
            setDataIntoStorage(TOGGLE_SHOW_EMOJI_PICKER_POPOVER, true);
          }}
        >
          {chosenEmoji}
        </button>
        <HeaderCustomInput
          value={title}
          onChange={changeTitle}
          placeholder="Untitled"
        />
      </div>
      {toggleShowDescription && (
        <div className={style.description_container}>
          <HeaderCustomInput
            value={description}
            onChange={changeDescription}
            placeholder="Add a description..."
          />
        </div>
      )}
    </div>
  );
}

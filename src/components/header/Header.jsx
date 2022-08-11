import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./header.module.scss";
import EmojiPickerPopover from "../emojiPicker/EmojiPickerPopover";
import {
  changeTitle,
  changeDescription,
  changeShowEmojiPickerPopover,
  updateInitialState,
} from "../../features/headerInfo/headerInfoSlice";
import HeaderCustomButtons from "./HeaderCustomButtons";
import HeaderCustomInputs from "./HeaderCustomInput";

export default function Header() {
  const dispatch = useDispatch();
  const initialState = useSelector((store) => store.headerInfo);
  const { title, description, emoji, showDescription } = useSelector(
    (store) => store.headerInfo
  );

  useEffect(() => {
    const initialStateStorage = localStorage.getItem("headerInfo");
    dispatch(updateInitialState(JSON.parse(initialStateStorage)));
  }, []);

  useEffect(() => {
    localStorage.setItem("headerInfo", JSON.stringify(initialState));
  }, [initialState]);

  return (
    <div className={style.big_Container}>
      {" "}
      <div className={style.header_Container}>
        <HeaderCustomButtons />
      </div>
      <EmojiPickerPopover />
      <div className={style.header_emoji_input}>
        <button
          type="submit"
          onClick={() => {
            dispatch(changeShowEmojiPickerPopover());
          }}
        >
          {emoji}
        </button>
        <HeaderCustomInputs
          value={title}
          changeFunction={changeTitle}
          placeholder="Untitled"
        />
      </div>
      {showDescription && (
        <div className={style.descripyion_container}>
          <HeaderCustomInputs
            value={description}
            changeFunction={changeDescription}
            placeholder="Add a description..."
          />
        </div>
      )}
    </div>
  );
}

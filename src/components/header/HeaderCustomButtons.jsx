import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import {
  changeEmoji,
  changeShowDescription,
} from "../../features/headerInfo/headerInfoSlice";
import smile from "../smile/smiles";
import style from "./header.module.scss";

function HeaderCustomButtons() {
  const dispatch = useDispatch();
  const { description, emoji, showDescription } = useSelector(
    (store) => store.headerInfo
  );
  const addIconJsx = () => {
    if (!emoji) {
      return (
        <button
          type="submit"
          className={style.add_btn}
          onClick={() => {
            const randomEmoji = smile[Math.floor(Math.random() * 55)];
            dispatch(changeEmoji(randomEmoji));
          }}
        >
          <TagFacesIcon />
          <div>Add Icon</div>
        </button>
      );
    }
    return null;
  };

  const addDescriptionJsx = () => {
    let buttonTitle = "";
    if (
      (!!showDescription && !!description) ||
      (!!showDescription && !description)
    ) {
      buttonTitle = "Hide Description";
    }
    if (!showDescription && !!description) {
      buttonTitle = "Show Description";
    }
    if (!showDescription && !description) {
      buttonTitle = "Add Description";
    }

    return (
      <button
        type="submit"
        className={style.add_btn}
        onClick={() => dispatch(changeShowDescription())}
      >
        <PriorityHighIcon />
        <div>{buttonTitle}</div>
      </button>
    );
  };

  return (
    <>
      {addIconJsx()}
      {addDescriptionJsx()}
    </>
  );
}

export default HeaderCustomButtons;

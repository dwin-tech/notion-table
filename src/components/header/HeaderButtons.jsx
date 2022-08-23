import React from "react";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import PropTypes from "prop-types";
import emojies from "../emojies/emojies";
import style from "./header.module.scss";
import {
  CHOSSEN_EMOJI,
  TOOGLE_SHOW_DESCRIPTION,
} from "../../constants/headerContantes/headerConstantes";
import setDataIntoStorage from "../../utils/callLocalStoraje";

function HeaderCustomButtons({
  chosenEmoji,
  setChosenEmoji,
  description,
  setToggleShowDescription,
  toggleShowDescription,
}) {
  const addIconJsx = () => {
    if (!chosenEmoji) {
      return (
        <button
          type="submit"
          className={style.add_icon_btn}
          onClick={() => {
            const emoji =
              emojies[Math.floor(Math.random() * (emojies.length - 1))];
            setChosenEmoji(emoji);
            setDataIntoStorage(CHOSSEN_EMOJI, emoji);
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
    if (toggleShowDescription) {
      buttonTitle = "Hide Description";
    } else {
      buttonTitle = `${description ? "Show" : "Add"} description...`;
    }

    return (
      <button
        type="submit"
        className={style.add_description_btn}
        onClick={() => {
          setDataIntoStorage(TOOGLE_SHOW_DESCRIPTION, !toggleShowDescription);
          setToggleShowDescription(!toggleShowDescription);
        }}
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

HeaderCustomButtons.propTypes = {
  toggleShowDescription: PropTypes.bool.isRequired,
  chosenEmoji: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  setChosenEmoji: PropTypes.func.isRequired,
  setToggleShowDescription: PropTypes.func.isRequired,
};

export default HeaderCustomButtons;

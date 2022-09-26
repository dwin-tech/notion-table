import React, { useState } from "react";
import PropTypes from "prop-types";
import CheckIcon from "@mui/icons-material/Check";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import CustomInputWithValue from "../custom/CustomInputWithValue";
import style from "./popoverOfButton.module.scss";
import basicTypeProperties, {
  advancedTypeProperties,
} from "../typeOfProperties/typeOfProperties";
import PROPERTY_ICONS from "../propertyIcons/propertyIcons";
import { changeSelectedPropertyType } from "../../features/tableDataInfo/tableDataInfoSlice";

function EditTypePopoverContent({ item, setAnchorEl, setAnchorElement }) {
  const dispatch = useDispatch();
  const [searchPropertyTypeInput, setSearchPropertyTypeInput] = useState("");

  const changeSearchPropertyInputValue = (val) => {
    setSearchPropertyTypeInput(val);
  };

  const handleChangeCurrentItemType = (type) => {
    dispatch(changeSelectedPropertyType({ id: item.id, type }));
    setAnchorEl(null);
    setAnchorElement(null);
  };
  return (
    <div>
      <CustomInputWithValue
        value={searchPropertyTypeInput}
        onChange={changeSearchPropertyInputValue}
        onBlur={changeSearchPropertyInputValue}
        placeholder="Search for a property type..."
      />
      <p>Basic</p>
      <div className={style.type_container}>
        {Object.entries(basicTypeProperties).map((el) => (
          <button
            key={uuidv4()}
            type="submit"
            onClick={() => handleChangeCurrentItemType(el[0])}
          >
            <div>
              {PROPERTY_ICONS[el[0]]}
              <p>{el[1]}</p>
            </div>
            {item?.type === el[0] && <CheckIcon />}
          </button>
        ))}
      </div>
      <p>Advanced</p>
      <div className={style.type_container}>
        {Object.entries(advancedTypeProperties).map((el) => (
          <button
            key={uuidv4()}
            type="submit"
            onClick={() => handleChangeCurrentItemType(el[0])}
          >
            <div>
              {PROPERTY_ICONS[el[0]]}
              <p>{el[1]}</p>
            </div>
            {item?.type === el[0] && <CheckIcon />}
          </button>
        ))}
      </div>
    </div>
  );
}

EditTypePopoverContent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
  setAnchorEl: PropTypes.func.isRequired,
  setAnchorElement: PropTypes.func.isRequired,
};

export default EditTypePopoverContent;

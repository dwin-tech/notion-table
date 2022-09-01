import React from "react";
import { useSelector } from "react-redux";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import propertyIcons from "../../../../propertyIcons/propertyIcons";
import basicTypeProperties, {
  advancedTypeProperties,
} from "../../../../typeOfProperties/typeOfProperties";
import style from "./properties.module.scss";

export default function EditPropertiesButtons() {
  const { selectedPropertyForEdit } = useSelector(
    (store) => store.tableDataInfo
  );
  return (
    <div className={style.edit_property_btns}>
      <button type="submit">
        <p>Type</p>
        <div>
          {propertyIcons[selectedPropertyForEdit.type]}
          <p>
            {advancedTypeProperties[selectedPropertyForEdit.type] ||
              basicTypeProperties[selectedPropertyForEdit.type]}
          </p>
          <KeyboardArrowRightIcon />
        </div>
      </button>
      <div className={style.border_bottom} />
      <div>
        <button type="submit">
          <div>
            {selectedPropertyForEdit.hide ? (
              <RemoveRedEyeIcon />
            ) : (
              <VisibilityOffIcon />
            )}{" "}
            <p>{selectedPropertyForEdit.hide ? "Show" : "Hide"} in view</p>
          </div>
        </button>
        <button type="submit">
          <div>
            <ContentCopyIcon />
            <p>Duplicate property</p>
          </div>
        </button>
        <button type="submit">
          <div>
            <DeleteIcon />
            <p>Delete property</p>
          </div>
        </button>
      </div>
    </div>
  );
}

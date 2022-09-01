import React from "react";
import propertyIcons from "../../../../propertyIcons/propertyIcons";
import basicTypeProperties, {
  advancedTypeProperties,
} from "../../../../typeOfProperties/typeOfProperties";
import style from "./properties.module.scss";

export default function EditTypeDrawing() {
  return (
    <div>
      <input type="text" />
      <p>Basic</p>
      <div className={style.type_container}>
        {Object.entries(basicTypeProperties).map((e) => (
          <button type="submit">
            <div>
              {propertyIcons[e[0]]}
              <p>{e[1]}</p>
            </div>
          </button>
        ))}
      </div>
      <p>Advanced</p>
      <div className={style.type_container}>
        {Object.entries(advancedTypeProperties).map((e) => (
          <button type="submit">
            <div>
              {propertyIcons[e[0]]}
              <p>{e[1]}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

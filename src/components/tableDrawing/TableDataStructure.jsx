import React, { useState } from "react";
import style from "./tableDrawing.module.scss";
import DrawingTableRows from "./DrawingTableRows";
import DrawingTableEmptyRows from "./DrawingTableEmptyRows";

export default function TableDataStructure() {
  const [eventIndex, setEvnetIndex] = useState(-1);

  return (
    <div>
      <div className={style.table_data_container}>
        <DrawingTableRows
          eventIndex={eventIndex}
          setEvnetIndex={setEvnetIndex}
        />
        <div style={{ width: "100%" }}>
          <DrawingTableEmptyRows setEvnetIndex={setEvnetIndex} />
        </div>
      </div>
    </div>
  );
}

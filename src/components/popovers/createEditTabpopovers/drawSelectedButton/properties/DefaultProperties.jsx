import React from "react";
import ShowOrHidePropertyElements from "./ShowOrHidePropertyElements";

function DefaultProperties() {
  return (
    <div>
      <ShowOrHidePropertyElements text="Shown" buttonName="Hide" type="show" />
      <ShowOrHidePropertyElements text="Hidden" buttonName="Show" type="hide" />
    </div>
  );
}

export default DefaultProperties;

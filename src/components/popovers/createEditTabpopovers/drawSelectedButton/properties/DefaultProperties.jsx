import React from "react";
import PropTypes from "prop-types";
import ShowOrHidePropertyElements from "./ShowOrHidePropertyElements";

function DefaultProperties({ searchPropertyInput }) {
  return (
    <div>
      <ShowOrHidePropertyElements
        searchPropertyInput={searchPropertyInput}
        text="Shown"
        buttonName="Hide"
        type="show"
      />
      <ShowOrHidePropertyElements
        searchPropertyInput={searchPropertyInput}
        text="Hidden"
        buttonName="Show"
        type="hide"
      />
    </div>
  );
}

DefaultProperties.propTypes = {
  searchPropertyInput: PropTypes.string.isRequired,
};

export default DefaultProperties;

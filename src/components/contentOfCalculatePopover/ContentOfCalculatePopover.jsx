import React from "react";
import PropTypes from "prop-types";
import DefaultButtonsCalculatePopover from "./DefaultButtonsCalculatePopover";

function ContentOfCalculatePopover({ item, onCloseCalculatePopover }) {
  return (
    <div>
      <DefaultButtonsCalculatePopover
        onCloseCalculatePopover={onCloseCalculatePopover}
        item={item}
      />
    </div>
  );
}

ContentOfCalculatePopover.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
  onCloseCalculatePopover: PropTypes.func.isRequired,
};

export default ContentOfCalculatePopover;

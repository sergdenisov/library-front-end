import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

function Icon({ action }) {
  if (!action) {
    return null;
  }

  return <i className={classnames("icon", `icon-${action}`)} />;
}

Icon.propTypes = { action: PropTypes.oneOf(["", "plus"]) };
Icon.defaultProps = { action: "" };

export default Icon;

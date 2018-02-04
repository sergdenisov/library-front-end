import React from "react";
import PropTypes from "prop-types";

function Button({ children, isSubmit, action, size, type, onClick }) {
  const classNames = ["btn"];

  if (action) {
    classNames.push("btn-action");
  }
  if (size) {
    classNames.push(`btn-${size}`);
  }
  if (type) {
    classNames.push(`btn-${type}`);
  }

  return (
    <button
      type={isSubmit ? "submit" : "button"}
      className={classNames.join(" ")}
      onClick={onClick}
    >
      {children}
      {action ? <i className={`icon icon-${action}`} /> : null}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  isSubmit: PropTypes.bool,
  action: PropTypes.oneOf(["", "plus"]),
  size: PropTypes.oneOf(["", "lg"]),
  type: PropTypes.oneOf(["", "clear", "primary", "link"]),
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  children: "",
  isSubmit: false,
  action: "",
  size: "",
  type: ""
};

export default Button;

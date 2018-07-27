import React from "react";
import PropTypes from "prop-types";

function Input({ id, type, placeholder, name, value, onChange }) {
  return (
    <input
      id={id}
      className="form-input"
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "url"]),
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

Input.defaultProps = { type: "text", placeholder: "", value: "" };

export default Input;

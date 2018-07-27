import React from "react";
import PropTypes from "prop-types";

function Textarea({ id, placeholder, rows, name, value, onChange }) {
  return (
    <textarea
      id={id}
      className="form-input"
      placeholder={placeholder}
      rows={rows}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

Textarea.defaultProps = { placeholder: "", value: "", rows: 3 };

export default Textarea;

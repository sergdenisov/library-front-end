import React from "react";
import PropTypes from "prop-types";

function FormElement({ id, label, type, name, value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className="form-input"
          placeholder={label}
          rows="3"
          name={name}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          className="form-input"
          type={type}
          placeholder={label}
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}

FormElement.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "textarea", "number", "url"]),
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

FormElement.defaultProps = {
  type: "text",
  value: ""
};

export default FormElement;

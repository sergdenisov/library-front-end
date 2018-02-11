import React from "react";
import PropTypes from "prop-types";

function FormLabel({ htmlFor, text }) {
  return (
    <label htmlFor={htmlFor} className="form-label">
      {text}
    </label>
  );
}

FormLabel.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default FormLabel;

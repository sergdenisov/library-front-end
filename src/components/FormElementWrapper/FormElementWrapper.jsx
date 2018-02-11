import React from "react";
import PropTypes from "prop-types";
import FormGroup from "../FormGroup/FormGroup";
import FormLabel from "../FormLabel/FormLabel";

function FormElementWrapper({ htmlFor, label, children }) {
  return (
    <FormGroup>
      <FormLabel htmlFor={htmlFor} text={label} />
      {children}
    </FormGroup>
  );
}

FormElementWrapper.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default FormElementWrapper;

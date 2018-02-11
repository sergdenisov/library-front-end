import React from "react";
import PropTypes from "prop-types";

function FormGroup({ children }) {
  return <div className="form-group">{children}</div>;
}

FormGroup.propTypes = { children: PropTypes.node.isRequired };

export default FormGroup;

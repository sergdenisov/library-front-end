import React from "react";
import PropTypes from "prop-types";
import FormGroup from "../FormGroup/FormGroup";
import FormLabel from "../FormLabel/FormLabel";
import Input from "../Input/Input";

function FormElement({ id, label, placeholder, type, name, value, onChange }) {
  return (
    <FormGroup>
      <FormLabel htmlFor={id} text={label} />
      <Input
        id={id}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </FormGroup>
  );
}

FormElement.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text", "number", "url"]),
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

FormElement.defaultProps = {
  placeholder: "",
  type: "text",
  value: ""
};

export default FormElement;

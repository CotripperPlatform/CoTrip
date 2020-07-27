import React from "react";
import "./InputTextField.css";

const InputTextField = props => {
  let { variation = "default", type, name, placeholder, onChange } = props;

  if (props.loadcallback && props.loadcallbackarg) props.loadcallback(props.loadcallbackarg);
  return (
    <input
      className={`InputTextField__container--${variation}`}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      defaultValue={props.defaultValue}
    />
  );
};
InputTextField.defaultProps = {
  type: "text",
  name: "email",
  placeholder: "Email",
  onChange: null
};

export default InputTextField;

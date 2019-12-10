import React from "react";
import "./InputTextField.css";

const InputTextField = props => {
  let { variation = "default", type, name, placeholder, onChange } = props;
  let classList = `InputTextField--${variation}`;

  return (
    <input
      className={classList}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default InputTextField;

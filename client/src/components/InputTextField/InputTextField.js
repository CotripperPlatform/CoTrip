import React from "react";
import "./InputTextField.css";
/**
 * Created by Tyler
 *
 * Props will define the type of input field
 * Input fields include email, password, name, confirm password, city of residence, what is your age?, what is your dream destination, First name,   last name, search my directory, search trips.
 *
 * I think we'll need to implement a function on these to retrieve the data typed in when pressing a submit button. I wasn't sure how to do this with just the standalone components in storybook.
 */

// Class Based React Component
const InputTextField = props => {
  let { size, type, name, placeholder, onChange } = props;
  let classList = "input-text-field-container";
  if (size === "small") {
    classList = "input-text-field-container-small";
  } else if (type === "search") {
    classList = "input-text-field-container search";
  } else if (size === "small" && type === "search") {
    classList = "input-text-field-container-small search";
  }

  return (
    <div className={classList}>
      {type === "search" ? (
        <svg viewBox="-4 -2 24 24">
          <path
            fill="#bababa"
            d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
          />
        </svg>
      ) : null}
      <input type="text" name={name} placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default InputTextField;

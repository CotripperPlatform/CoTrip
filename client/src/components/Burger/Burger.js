
import React from 'react';
import "./Burger.css";

// Function based React Component
const Burger = (props) => {

  // Default Class to apply to Component
  let classList = `Burger`;


  return(
    <div className={classList}>
      Burger
    </div>
  );
}

export default Burger;

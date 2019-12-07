
import React, {Component} from 'react';
import "./IconComponents.css";


const IconComponents = (props) => {
  let classList = ''
  let types = ['hearty']
  if (types.includes(props.type)) {
      classList += ` button-${props.type}`
  }

  
 return <div className={classList}>
     <img src={props.icon}></img>
      {props.label}
  </div>
}

export default IconComponents;

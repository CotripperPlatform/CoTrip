
import React, {Component} from 'react';
import "./HeartIcon.css";


const HeartIcon = (props) => {
  let classList = ''
  let types = ['hearty']
  if (types.includes(props.type)) {
      classList += ` button-${props.type}`
  }

  
 return <button className={classList}>
     <img src={props.icon}></img>
      {props.label}
  </button>
}


export default HeartIcon;

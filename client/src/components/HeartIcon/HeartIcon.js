
import React, {Component} from 'react';
import "./HeartIcon.css";


const HeartIcon = (props) => {
  let classList = ''
  let types = ['hearty', 'heartyy', 'heartyyy']
  if (types.includes(props.type)) {
      classList += ` button-${props.type}`
  }

  
 return <div className={classList}>
     <img className="iconic" src={props.icon}></img>
      {props.label}
  </div>
}


export default HeartIcon;

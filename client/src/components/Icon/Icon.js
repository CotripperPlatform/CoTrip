import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Icon.css";

const defaultCallback = () => console.log('default callback');
const Icon = (props) => (
  <div onClick={props.callback == undefined ? defaultCallback : props.callback}>
    <FontAwesomeIcon icon={props.icon} size={props.size} />
  </div>
)


export default Icon;

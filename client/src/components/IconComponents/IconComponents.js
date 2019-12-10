import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./IconComponents.css";


const IconComponents = (props) => (
  <div>
    <FontAwesomeIcon icon={props.icon} />
  </div>
)


export default IconComponents;

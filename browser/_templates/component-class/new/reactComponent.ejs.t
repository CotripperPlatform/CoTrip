---
to: src/components/<%= name %>/<%= name %>.js
---

import React, {Component} from 'react';
import "./<%= name %>.css";


// Class Based React Component
class <%= name %> extends Component{
  constructor(props){
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "<%= name %>"
    };
  }


  // Runs after Component is loaded in the broswer
  componentDidMount(){}


  // Runs after a component has been updated
  componentDidUpdate(){}


  // Runs right before a component is removed from the DOM
  componentWillUnmount(){}

  render(){
    return(
      <div className={this.state.classList}>
        <%= name %>
      </div>
    );
  }
}

export default <%= name %>;


import React, {Component} from 'react';
import "./ComponentInbox.css";


// Class Based React Component
class ComponentInbox extends Component{
  constructor(props){
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "ComponentInbox"
    };
  }

  render(){
    return(
      <div className={this.state.classList}>
        ComponentInbox
      </div>
    );
  }
}

export default ComponentInbox;

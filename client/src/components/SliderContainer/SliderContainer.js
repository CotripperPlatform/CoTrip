
import React, {Component} from 'react';
import "./SliderContainer.css";


// Class Based React Component
class SliderContainer extends Component{
  constructor(props){
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "SliderContainer"
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
        SliderContainer
      </div>
    );
  }
}

export default SliderContainer;

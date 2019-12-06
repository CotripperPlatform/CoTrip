
import React, {Component} from 'react';
import "./InputTextField.css";


// Class Based React Component
class InputTextField extends Component{
  constructor(props){
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "InputTextField"
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
        InputTextField
      </div>
    );
  }
}

export default InputTextField;

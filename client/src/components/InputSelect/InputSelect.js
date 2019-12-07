import React, { Component } from "react";
import "./InputSelect.css";

// Class Based React Component
class InputSelect extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "InputSelect"
    };
  }

  // Runs after Component is loaded in the broswer
  componentDidMount() {}

  // Runs after a component has been updated
  componentDidUpdate() {}

  // Runs right before a component is removed from the DOM
  componentWillUnmount() {}

  render() {
    if (this.props.options) {
      return (
        <div className={this.state.classList}>
          <select value={this.state.value} onChange={this.props.onChange}>
            {this.props.options.map(option => (
              <option value={option}>{option}</option>
            ))}
          </select>
        </div>
      );
    } else {
      return (
        <div className={this.state.classList}>
          <select value={this.state.value} onChange={this.props.onChange}>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
      );
    }
  }
}

export default InputSelect;

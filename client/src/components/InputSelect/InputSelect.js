import React, { Component } from "react";
import "./InputSelect.css";

// Class Based React Component
class InputSelect extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "InputSelect",
      value: "select"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ value: e.target.value });
    this.props.callback();
  }
  // Runs after Component is loaded in the browser
  componentDidMount() {}

  // Runs after a component has been updated
  componentDidUpdate() {}

  // Runs right before a component is removed from the DOM
  componentWillUnmount() {}

  render() {
    if (this.props.options) {
      return (
        <select
          className={this.state.classList}
          value={this.state.value}
          onChange={this.handleChange}
        >
          {this.props.options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    } else {
      return (
        <select
          className={this.state.classList}
          value={this.state.value}
          onChange={this.handleChange}
        >
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
        </select>
      );
    }
  }
}

export default InputSelect;

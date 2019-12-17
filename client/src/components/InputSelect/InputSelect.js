import React, { Component } from "react";
import "./InputSelect.css";
import PropTypes from "prop-types";

// Class Based React Component
class InputSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "select"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ value: e.target.value });
    this.props.onSelect(e.target.value);
  }

  render() {
    return (
      <select className="InputSelect" value={this.state.value} onChange={this.handleChange}>
        {this.props.options.map(option => (
          <option key={option.value} value={option.value}>
            {this.props.optionPrefix}
            {option.title}
          </option>
        ))}
      </select>
    );
  }
}
InputSelect.defaultProps = {
  optionPrefix: "Sort By:  ",
  options: [
    { value: "option1", title: "Option 1" },
    { value: "option2", title: "Option 2" }
  ],
  onSelect:function(){}
};
InputSelect.propTypes = {
  optionPrefix: PropTypes.string,
  options: PropTypes.array,
  onSelect: PropTypes.func.isRequired
};

export default InputSelect;

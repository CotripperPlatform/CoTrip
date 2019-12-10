
import React, { Component } from 'react';
import "./Connections.css";


// Class Based React Component
class Connections extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "Connections",
      Heading: "Connections"
    };
  }


  // Runs after Component is loaded in the broswer
  componentDidMount(){
    if (this.props.userViewing === true) {
      this.setState({ Heading: "My Connections"})
    } else if (this.props.userViewing === false) {
      this.setState({ Heading: "Her Connections" })
    } else if (!this.props.userViewing) {
      this.setState({ Heading: "Members" })
    }
  }
  //Why isn't this working?


  // Runs after a component has been updated
  componentDidUpdate() { }


  // Runs right before a component is removed from the DOM
  componentWillUnmount() { }

  render() {
    return (
      <div className={this.state.classList}>
        <h1 className={`${this.state.classList}__heading`}>{this.state.Heading}</h1>
      </div>
    );
  }
}

export default Connections;

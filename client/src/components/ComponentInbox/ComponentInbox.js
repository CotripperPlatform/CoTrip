import React, { Component } from "react";
import "./ComponentInbox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InboxMessage from "../InboxMessage/InboxMessage";

// Class Based React Component
class ComponentInbox extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "ComponentInbox"
    };
  }

  render() {
    return (
      <div className={this.state.classList}>
        <div className="ComponentInbox__container">
          <div className="ComponentInbox__inbox-line">
            <h1 className="ComponentInbox__inbox">Inbox</h1>
            <FontAwesomeIcon icon="edit" size="2x" />
          </div>
          <div className="ComponentInbox__message">
            <InboxMessage />
            <InboxMessage />
            <InboxMessage />
          </div>
        </div>
      </div>
    );
  }
}

export default ComponentInbox;

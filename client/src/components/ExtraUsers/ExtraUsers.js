
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./ExtraUsers.css";


// Class Based React Component
class ExtraUsers extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "ExtraUsers",
      extraUsersValue: null
    };

    this.howManyMore = this.howManyMore.bind(this)
  }

  howManyMore(theArray) {
    if (theArray.length > 4) {
      let extraValue = theArray.length - 4
      return extraValue
    }
  }
  // Runs after Component is loaded in the broswer
  componentDidMount() {
    this.setState({
      extraUsersValue: this.howManyMore(this.props.users)
    })
  }

  // Runs after a component has been updated
  componentDidUpdate() { }


  // Runs right before a component is removed from the DOM
  componentWillUnmount() { }

  render() {
    return (
      <div className='ExtraUsers'>
        <Link style={{textDecoration: 'none'}} to={this.props.to} className='ExtraUsers__text'>
          +{this.state.extraUsersValue}
        </Link>
      </div>
    );
  }
}

ExtraUsers.defaultPropsm = {
  to: 'PATH',
  users: [1,2,3,4,5,6,7,8,9,0]
}
export default ExtraUsers;

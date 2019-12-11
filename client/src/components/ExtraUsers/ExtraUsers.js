
import React, {Component} from 'react';
import { Link } from "react-router-dom";
import "./ExtraUsers.css";


// Class Based React Component
class ExtraUsers extends Component{
  constructor(props){
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "ExtraUsers"
    };

    this.howManyMore = this.howManyMore.bind(this)
  }

  howManyMore(theArray) {
    if (theArray.length > 4) {
      let extraValue = theArray.length - 4
      return (
        <div className='ExtraUsers__text'>+{extraValue}</div>
      )
    }
  }
  // Runs after Component is loaded in the broswer
  componentDidMount(){
    this.setState({
      extraUsersValue: this.howManyMore(this.props.users)
    })
  }



  // Runs after a component has been updated
  componentDidUpdate(){}


  // Runs right before a component is removed from the DOM
  componentWillUnmount(){}

  render() {
    return(
      <Link to={this.props.to} className='ExtraUsers'>
        {this.state.extraUsersValue}
      </Link>
    );
  }
}

export default ExtraUsers;

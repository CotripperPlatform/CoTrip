
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import "./Connections.css";
import ProfilePicture from '../ProfilePicture/ProfilePicture'


// Class Based React Component
class Connections extends Component {
  constructor(props) {
    super(props);

    // Default CSS class to apply to the Component
    this.state = {
      Heading: "Connections"
    };
  }
  // Runs after Component is loaded in the broswer
  componentDidMount() {

    if (this.props.userViewing === true) {
      this.setState({ Heading: "My Connections" })
    } else if (this.props.userViewing === false) {
      this.setState({ Heading: "Her Connections" })
    } else if (!this.props.userViewing) {
      this.setState({ Heading: "Members" })
    }

    this.setState({
      userArray: this.props.users.map((person, index) => {
        let userLastInitial = person.userSurname.slice(0, 1) + '.'
        if (index < 4) {
          return (
            <div key={person.userId} className='Connections__person'>
              <ProfilePicture image={person.userPic} />
              <p className='Connections--name'>{person.userFirstName} {userLastInitial}</p>
            </div>
          )
        } else if (index === 4) {
          return (
            <div className='Connections__person'>
              <Link className='Connections__link' to={this.props.to}>
                {this.props.extraUsers}
              </Link>
            </div>
          )
        }
        else return null
      })
    })
  }

  // Runs after a component has been updated
  componentDidUpdate() { }


  // Runs right before a component is removed from the DOM
  componentWillUnmount() { }

  render() {
    return (
      <div className='Connections'>
        <h1 className='Connections__heading'>{this.state.Heading}</h1>
        <div className='Connections__list'>{this.state.userArray}</div>
      </div>
    );
  }
}

Connections.defaultProps = {
  userViewing: false,
  extraUsers: 'View More',
  to: 'PATH'
} 


export default Connections;

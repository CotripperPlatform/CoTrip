
import React, {Component} from 'react';
import "./MemberProfilePage.css";
import Nav from "../Navbar/Navbar"
import InteractionCard from "../InteractionCard/InteractionCard"


// Class Based React Component
class MemberProfilePage extends Component{
  constructor(props){
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "MemberProfilePage"
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
        <Nav></Nav>
        <div className="banner">bioootch</div>
        <div className="left">
          <div>
            <InteractionCard></InteractionCard>
          </div>
          <div></div>
        </div>
        <div classname="right"></div>
      </div>
    );
  }
}

export default MemberProfilePage;

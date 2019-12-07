import React, {Component} from 'react';
import "./ActivityList.css";

// Class Based React Component
class ActivityList extends Component{
  constructor(props){
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "ActivityList"
    };
    this.momActivityList = ['Spa', 'Wine Nights', 'Brunch with Other Moms'];
    this.kidsActivityList = ['Snorkeling', 'Hiking', 'Island Hopping', 'Hawaiian Luaus', 'Food Markets'];
  }

  renderActivities = () => {
    const momActivities = this.momActivityList
    const kidsActivities = this.kidsActivityList
    let activities = [];
    if (this.props.type === 'mom') {
      momActivities.forEach(activity => {
        activities.push(
          <div className='activity mom'>{activity}</div>
        )
      })
    } else if (this.props.type === 'kids') {
      kidsActivities.forEach(activity => {
        activities.push(
          <div className='activity kids'>{activity}</div>
        )
      })
    }
    return <div className='activityContainer'>{activities}</div>
  }

  // Runs after Component is loaded in the broswer
  componentDidMount(){
  }


  // Runs after a component has been updated
  componentDidUpdate(){}


  // Runs right before a component is removed from the DOM
  componentWillUnmount(){}
  
  render(){
    const renderActivities = this.renderActivities()
    return(
      <div className={this.state.classList}>
        <span className='activityHeader'>Activities for {this.props.label}</span>
        {renderActivities}
      </div>
    );
  }
}

export default ActivityList;

import React, { Component } from "react";
import "./ActivityList.css";

// Class Based React Component
class ActivityList extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "ActivityList"
    };
    this.momActivityList = ["Spa", "Wine Nights", "Brunch with Other Moms"];
    this.kidsActivityList = [
      "Snorkeling",
      "Hiking",
      "Island Hopping",
      "Hawaiian Luaus",
      "Food Markets",
      "Beaches"
    ];
  }

  renderMomActivities = () => {
    const momActivityList = this.momActivityList;
    let momActivities = [];
    momActivityList.forEach(activity => {
      momActivities.push(
        <div className="activity mom">
          <span className="activities">{activity}</span>
        </div>
      );
    });
    return <div className="activityContainer">{momActivities}</div>;
  };

  renderKidsActivities = () => {
    const kidsActivityList = this.kidsActivityList;
    let kidsActivities = [];
    kidsActivityList.forEach(activity => {
      kidsActivities.push(
        <div className="activity kids">
          <span className="activities">{activity}</span>
        </div>
      );
    });
    return <div className="activityContainer">{kidsActivities}</div>;
  };

  // Runs after Component is loaded in the broswer
  componentDidMount() {}

  // Runs after a component has been updated
  componentDidUpdate() {}

  // Runs right before a component is removed from the DOM
  componentWillUnmount() {}

  render() {
    const renderMomActivities = this.renderMomActivities();
    const renderKidsActivities = this.renderKidsActivities();
    return (
      <div className={this.state.classList}>
        <div className="activitiesContainer">
          <span className="activityHeader">Activities for Mom</span>
          {renderMomActivities}
        </div>
        <div className="activitiesContainer">
          <span className="activityHeader">Activities for Mom & Kids</span>
          {renderKidsActivities}
        </div>
      </div>
    );
  }
}

export default ActivityList;

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
    const momActivities = this.momActivityList.map(activity => {
      return (
        <div className="activity mom">
          <span className="activities">{activity}</span>
        </div>
      );
    });
    return <div className="activityContainer">{momActivities}</div>;
  };

  renderKidsActivities = () => {
    const kidsActivities = this.kidsActivityList.map(activity => {
      return (
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
    return (
      <div className={this.state.classList}>
        <div className="activitiesContainer">
          <span className="activityHeader">Activities for Mom</span>
          {this.renderMomActivities()}
        </div>
        <div className="activitiesContainer">
          <span className="activityHeader">Activities for Mom & Kids</span>
          {this.renderKidsActivities()}
        </div>
      </div>
    );
  }
}

export default ActivityList;

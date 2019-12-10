import React, { Component } from "react";
import "./ActivityList.css";

// Class Based React Component
class ActivityList extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "ActivityList__activity-list"
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
        <div className="ActivityList__activity ActivityList__mom">
          <span className="ActivityList__activities">{activity}</span>
        </div>
      );
    });
    return <div className="ActivityList__activity-container">{momActivities}</div>;
  };

  renderKidsActivities = () => {
    const kidsActivities = this.kidsActivityList.map(activity => {
      return (
        <div className="ActivityList__activity ActivityList__kids">
          <span className="ActivityList__activities">{activity}</span>
        </div>
      );
    });
    return <div className="ActivityList__activity-container">{kidsActivities}</div>;
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
        <div className="ActivityList__activities-container">
          <h1 className="ActivityList__activity-header">Activities for Mom</h1>
          {this.renderMomActivities()}
        </div>
        <div className="ActivityList__activities-container">
          <h1 className="ActivityList__activity-header">Activities for Mom & Kids</h1>
          {this.renderKidsActivities()}
        </div>
      </div>
    );
  }
}

export default ActivityList;

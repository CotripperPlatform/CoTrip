import React, { Component } from "react";
import "./ActivityList.css";

class ActivityList extends Component {
  constructor(props) {
    super(props);
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

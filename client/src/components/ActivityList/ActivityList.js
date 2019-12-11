import React, { Component } from "react";
import "./ActivityList.css";

class ActivityList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classList: "ActivityList"
    };
  }

  render() {
    const renderMomActivities = () => {
      const momActivities = this.props.momActivityList.map(activity => {
        return (
          <div className="ActivityList__activity ActivityList__mom">
            <span className="ActivityList__activities">{activity}</span>
          </div>
        );
      });
      return <div className="ActivityList__activity-container">{momActivities}</div>;
    };

    const renderKidsActivities = () => {
      const kidsActivities = this.props.kidsActivityList.map(activity => {
        return (
          <div className="ActivityList__activity ActivityList__kids">
            <span className="ActivityList__activities">{activity}</span>
          </div>
        );
      });
      return <div className="ActivityList__activity-container">{kidsActivities}</div>;
    };
    return (
      <div className={this.state.classList}>
        <div className="ActivityList__activities-container">
          <h1 className="ActivityList__activity-header">Activities for Mom</h1>
          {renderMomActivities()}
        </div>
        <div className="ActivityList__activities-container">
          <h1 className="ActivityList__activity-header">Activities for Mom & Kids</h1>
          {renderKidsActivities()}
        </div>
      </div>
    );
  }
}

export default ActivityList;

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
    const renderActivities = () => {
      if (this.props.type === "mom") {
        const momActivities = this.props.momActivityList.map((activity, index) => {
          return (
            <div key={index} className="ActivityList__activity ActivityList__mom">
              <span className="ActivityList__activities">{activity}</span>
            </div>
          );
        });
        return <div className="ActivityList__activity-container">{momActivities}</div>;
      } else if (this.props.type === "kids") {
        const kidsActivities = this.props.kidsActivityList.map((activity, index) => {
          return (
            <div key={index} className="ActivityList__activity ActivityList__kids">
              <span className="ActivityList__activities">{activity}</span>
            </div>
          );
        });
        return <div className="ActivityList__activity-container">{kidsActivities}</div>;
      }
    };

    return (
      <div className={this.state.classList}>
        <div className="ActivityList__activities-container">
          <h1 className="ActivityList__activity-header">{this.props.label}</h1>
          {renderActivities()}
        </div>
      </div>
    );
  }
}

export default ActivityList;

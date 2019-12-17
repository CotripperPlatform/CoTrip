
import React from 'react';
import { Link } from 'react-router-dom';
import GroupCard from '../GroupCard/GroupCard';
import "./GroupsList.css";

// Function based React Component
const GroupsList = (props) => {
  return (
    <div className="Groups">
      <h1>{props.heading}</h1>
      <div className="Groups__list">
        <div className="Groups__card--1">
        <GroupCard
          name="DIY with your kids"
          members="98"
          location="Boston, MA"
          picture="https://images.unsplash.com/photo-1453749024858-4bca89bd9edc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80"
        />
        </div>
        <div className="Groups__card--2">
        <GroupCard
          name="Raising Teenagers"
          members="29"
          location="Mixed Location"
          picture="https://images.unsplash.com/photo-1453749024858-4bca89bd9edc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80"
        />
        </div>
        <div className="Groups__card--2">
        <GroupCard
          name="Virtual Bookclub"
          members="106"
          location="Online"
          picture="https://images.unsplash.com/photo-1453749024858-4bca89bd9edc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80"
        />
        </div>
        <Link className="Groups__list__link"to={props.to}>{props.moreGroups}</Link>
      </div>
    </div>
  )
}

export default GroupsList;

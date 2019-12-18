
import React from 'react';
import { Link } from 'react-router-dom';
import GroupCard from '../GroupCard/GroupCard';
import "./GroupsList.css";
import cardImage from '../../assets/images/card-image.png'
import cardImage2 from '../../assets/images/card-image-2.png'
let cardImage3 = "https://images.unsplash.com/photo-1453749024858-4bca89bd9edc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80"

// Function based React Component
const GroupsList = (props) => {
  return (
    <div className="Groups">
      <h1 className="Groups__header">{props.heading}</h1>
      <div className="Groups__list">
        <div className="Groups__card--1">
          <GroupCard
            name="DIY with your kids"
            members="98"
            location="Boston, MA"
            picture={cardImage}
          />
        </div>
        <div className="Groups__card--2">
          <GroupCard
            name="Raising Teenagers"
            members="29"
            location="Mixed Location"
            picture={cardImage3}
          />
        </div>
        <div className="Groups__card--3">
          <GroupCard
            name="Virtual Bookclub"
            members="106"
            location="Online"
            picture={cardImage2}
          />
        </div>
        <div className="Groups__card--4">
          <Link className="Groups__list__link" to={props.to}>{props.moreGroups}</Link>
        </div>
      </div>
    </div>
  )
}

export default GroupsList;

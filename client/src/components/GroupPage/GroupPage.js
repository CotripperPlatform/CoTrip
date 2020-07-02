import React from 'react';
import './GroupPage.css';
import GroupCard from "../GroupCard/GroupCard";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import card1 from "assets/images/card-image-3.png";
import card2 from "assets/images/card-image-2.png";
import card3 from "assets/images/card-image.png";
import people from "assets/images/profile_default.svg";


const GroupPage = props => {
   
    return (
        <div>
            <Navbar 
            to={"/member-page"} 
            profileImage={people}
            />
            
            
            <div className='wrapper'>
                <h1>Groups You Can Join!</h1>
            </div>
            <div className="HomePage__group-cards-container">
            <span className="HomePage__groupcard-1">
                <GroupCard
                name="DIY with your kids"
                members="98"
                location="Boston, MA"
                picture={card1}
                />
            </span>
            <span className="HomePage__groupcard-2">
                <GroupCard name="Mystery Stories!" members="213" location="NYC" picture={card2} />
            </span>
            <span className="HomePage__groupcard-3">
                <GroupCard name="Bay Cruise" members="98" location="Lisbon" picture={card3} />
            </span>
            </div>
            <Footer />
        </div>
    )
}


export default GroupPage
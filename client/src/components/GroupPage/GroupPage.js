import React from 'react';
import './GroupPage.css';
import { link } from 'react-router-dom';
import GroupCard from "../GroupCard/GroupCard";
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

const GroupPage = props => {
    return(
        <div>
            <Navbar />
            <Banner />
                <div className='wrapper'>
                    <h1> Groups You Can Join!</h1>
                </div>
            <GroupCard />
            <Link to={location => ({ ...location, pathname: "/courses" })} /> //needs to be figured out
            <Footer />
        </div>
    )
}

export default GroupPage
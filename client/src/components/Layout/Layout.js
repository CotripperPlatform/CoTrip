import React from 'react';
import { useLocation } from "react-router-dom";

import "./Layout.css";
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"


export default function Layout(props) {
    let currentPath = useLocation().pathname.split('/')[1]
    console.log(currentPath)

    const pathPages = {
        '': 99,
        'member-page': 99,
        'TripDetail': 3,
        'book-a-trip': 3,
        'forum-page': 2,
        'forum-page-hashtag': 2,
        'forum-page-discover': 2,
        'forum-page-topic': 2,
        'community': 1,
        'directory': 0,
    }

    let page = pathPages[currentPath]
    console.log(page)

    return (
        <main>
            <Navbar to={`/member-page/${props.userid}`} profileImage={props.image} page={page}></Navbar>
            {props.children}
            <Footer history={props.history} handle_logout={props.handle_logout} />
        </main>
    )
}

Layout.defaultProps = {
    page: 99
};

import React, { Component } from "react";
import "./Layout.css";
import { Route, Redirect } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import SplashPage from "../../pages/SplashPage/SplashPage";
import BookATripPage from "../../pages/BookATripPage/BookATripPage";
import CommunityPage from "../../pages/CommunityPage/CommunityPage";
import CommunityPageGroup from "../../pages/CommunityPage/CommunityPageGroup";
import ForumPageHashtag from "../../pages/ForumPage/ForumPageHashtag";
import ForumPageTopic from "../../pages/ForumPage/ForumPageHashtagTopic";
import ForumPageDiscover from "../../pages/ForumPage/ForumPageDiscover";

import CommunityPagePeople from "../../pages/CommunityPage/CommunityPagePeople";
import ForumPage from "../../pages/ForumPage/ForumPage";
import DirectoryPeople from "../../pages/DirectoryPage/DirectoryPeople";
import DirectoryGroup from "../../pages/DirectoryPage/DirectoryGroups";
import HomePage from "../../pages/HomePage/HomePage";
import MemberProfilePage from "../../pages/MemberProfilePage/MemberProfilePage";
import TripDetail from "../../pages/TripDetail/TripDetail";
import OnboardingPage from "../../pages/OnboardingPage/OnboardingPage";
import LoginPage from "../../pages/LoginPage/LoginPage";

// Class Based React Component
export default function Layout(props) {
    console.log(props)
    return (
        <div className="Layout">
            {props.logged_in ? (
                <Route
                    path="/"
                    exact
                    render={routerProps => (
                        <main>
                            <Navbar to={`/member-page/${props.userid}`} profileImage={props.image} page={5}></Navbar>
                            <HomePage handle_logout={props.handleLogout} {...routerProps} {...props} />
                        </main>
                    )}
                ></Route>
            ) : (
                    <Redirect to="/welcome" />
                )}
            <Route path="/welcome" exact component={SplashPage}></Route>
            <Route
                path="/TripDetail"
                exact
                render={routerProps => (
                    <main>
                        <Navbar to={`/member-page/${props.userid}`} profileImage={props.image} page={3}></Navbar>
                        <TripDetail tripName={"Hawaii"} handle_logout={props.handleLogout} {...routerProps} />
                    </main>
                )}
            ></Route>{" "}
            <Route
                path="/community/join-groups"
                exact
                render={routerProps => (
                    <main>
                        <Navbar to={`/member-page/${props.userid}`} profileImage={props.image} page={1}></Navbar>
                        <CommunityPage handle_logout={props.handleLogout} {...routerProps} />
                    </main>
                )}
            ></Route>
            <Route
                path="/community/view-group"
                exact
                render={routerProps => (
                    <main>
                        <Navbar to={`/member-page/${props.userid}`} profileImage={props.image} page={1}></Navbar>
                        <CommunityPageGroup handle_logout={props.handleLogout} {...routerProps} />
                    </main>
                )}
            ></Route>
            <Route
                path="/community/explore-people"
                exact
                render={routerProps => (
                    <main>
                        <Navbar to={`/member-page/${props.userid}`} profileImage={props.image} page={1}></Navbar>
                        <CommunityPagePeople handle_logout={props.handleLogout} {...routerProps} />
                    </main>
                )}
            ></Route>
            <Route
                path="/book-a-trip"
                exact
                render={routerProps => (
                    <main>
                        <Navbar to={`/member-page/${props.userid}`} profileImage={props.image} page={3}></Navbar>
                        <BookATripPage handle_logout={props.handleLogout} {...routerProps} />
                    </main>
                )}
            ></Route>
            {props.profileLoaded === true ? (
                <Route
                    path="/member-page/:memberId"  //Get memberId from props.props.match.params.memberId within the MemberProfilePage
                    exact
                    render={routerProps => (
                        <main>
                            <Navbar to={`/member-page/${props.userid}`} profileImage={props.image} page={5}></Navbar>
                            <MemberProfilePage
                                {...props}
                                handle_logout={props.handleLogout}
                                {...routerProps}
                            />
                        </main>
                    )}
                ></Route>
            ) : (
                    ""
                )}
            <Route
                path="/forum-page"
                exact
                render={routerProps => (
                    <main>
                        <Navbar to={`/member-page/${props.userid}`} profileImage={props.image} page={2}></Navbar>
                        <ForumPage handle_logout={props.handleLogout} {...routerProps} {...props} />
                    </main>
                )}
            ></Route>
            <Route
                path="/forum-page-hashtag"
                exact
                render={routerProps => (
                    <main>
                        <Navbar to={`/member-page/${props.userid}`} profileImage={props.image} page={2}></Navbar>
                        <ForumPageHashtag
                            handle_logout={props.handleLogout}
                            {...routerProps}
                            {...props}
                        />
                    </main>
                )}
            ></Route>
            <Route
                path="/forum-page-discover"
                exact
                render={routerProps => (
                    <main>
                        <Navbar to={`/member-page/${props.userid}`} profileImage={props.image} page={2}></Navbar>
                        <ForumPageDiscover
                            handle_logout={props.handleLogout}
                            {...routerProps}
                            {...props}
                        />
                    </main>
                )}
            ></Route>
            <Route
                path="/forum-page-topic"
                exact
                render={routerProps => (
                    <main>
                        <Navbar to={`/member-page/${props.userid}`} profileImage={props.image} page={2}></Navbar>
                        <ForumPageTopic handle_logout={props.handleLogout} {...routerProps} {...props} />
                    </main>
                )}
            ></Route>
            <Route
                path="/directory/people"
                exact
                render={routerProps => (
                    <main>
                        <Navbar to={`/member-page/${props.userid}`} profileImage={props.image} page={0}></Navbar>
                        <DirectoryPeople handle_logout={props.handleLogout} {...routerProps} />
                    </main>
                )}
            ></Route>
            <Route
                path="/directory/groups"
                exact
                render={routerProps => (
                    <main>
                        <Navbar to={`/member-page/${props.userid}`} profileImage={props.image} page={0}></Navbar>
                        <DirectoryGroup handle_logout={props.handleLogout} {...routerProps} />
                    </main>
                )}
            ></Route>
            <Route
                path="/login"
                exact
                render={routerProps => (
                    <LoginPage handleLogin={props.handleLogin} {...routerProps} {...props} />
                )}
            ></Route>
            <Route
                path="/register"
                exact
                render={routerProps => (
                    <OnboardingPage
                        handleSignup={props.handleSignup}
                        {...routerProps}
                        logged_in={props.logged_in}
                    />
                )}
            ></Route>
            <Footer history={props.history} handle_logout={props.handle_logout} />

        </div>
    );

}

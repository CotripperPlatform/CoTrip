import React, { Component } from "react";
import "./CommunityPageGroup.css";
import NavBar from "../../components/Navbar/Navbar";
import people from "assets/images/profile_default.svg";
import Banner from "../../components/Banner/Banner";
import InputTextField from "../../components/InputTextField/InputTextField";
import Banner__Community from "assets/images/community_banner.png";
import ModalContainerJoin from "../../components/Modal/_ModalContainer-join";
import MediaCard from "../../components/MediaCard/MediaCard";
import UpcomingEventsCard from "../../components/UpcomingEventsCard/UpcomingEventsCard";
import Footer from "../../components/Footer/Footer";
import axios from 'axios';


import books from "../../assets/images/media-card-1.png";
import happiness from "../../assets/images/media-card-2.png";
import van from "../../assets/images/media-card-3.png";
import nightSky from "../../assets/images/media-card-4.png";
import waterfall from "../../assets/images/media-card-5.png";
import flight from "../../assets/images/media-card-6.png";
import ForumContainer from "../../components/ForumPostContainer/ForumPostContainer";
import Connections from "../../components/Connections/Connections";
import { BASE_URL } from '../../services/constants';

class CommunityPageGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joinGroup: false,
      showModal: false,
      groupId: 1,
      groupData: {},
    };
  }

  componentDidMount() {
    this.getGroup()
  }

  getGroup = () => {
    if (this.state.groupId !== undefined) {
      axios.get(`${BASE_URL}/groups/${this.state.groupId}`,
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`
          }
        })
        .then(res => {

          this.setState({
            groupData: res.data
          })
        })
        .catch(res => console.log(res))
    }
  }

  handleConfirm = evt => {
    evt.preventDefault();
    this.submitJoinGroup()
    this.setState({
      joinGroup: true,
      showModal: false
    });
  };

  handleLeave = evt => {
    evt.preventDefault();
    this.setState({
      joinGroup: false,
      showModal: false
    });
  };

  handleCloseModal = evt => {
    evt.preventDefault();
    this.setState({
      showModal: false
    });
  };

  handleOpenModal = evt => {
    // evt.preventDefault()
    console.log("Ive been clicked!!!");
    this.setState({
      showModal: true
    });
  };

  pillClick = val => {
    console.log(val);
  };

  commentClick = val => {
    console.log(val);
  };

  likeClick = val => {
    console.log(val);
  };

  render() {
    // TO DO: Media Section, Upcoming Events Section
    let groupData = this.state.groupData
    let postList = [], forumPosts = []

    // Generates Forum Posts using ForumContainer component. 
    //   TO DO: Implement comment replies.
    if (groupData.posts) {
      postList = groupData.posts

      forumPosts = postList.map(post => {
        let comments = post.comments
        comments = comments.map(comment => {
          let date = new Date(comment.time)
          return ({
            name: `${comment.author.first_name} ${comment.author.last_name[0].toUpperCase()}`,
            to: `/profile/${comment.author.user}`,
            likes: comment.likes,
            date: `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}`,
            time: `${date.getHours()}:${date.getMinutes()}`,
            body: comment.body,
            image: comment.author.image
          })
        })
        if (post.post_type === 'Post') {
          let date = new Date(post.time)
          return (
            <ForumContainer
              className="ForumPost"
              key={post.id}
              forumPost={{
                pillClick: this.pillClick,
                commentClick: this.commentClick,
                likeClick: this.likeclick,
                to: `/profile/${post.author.user}`,
                name: `${post.author.first_name} ${post.author.last_name[0].toUpperCase()}`,
                likes: post.likes,
                comments: comments,
                // topics: post.topics,  // TO DO:  Add topics to Post Model
                image: post.author.image,
                post: {
                  title: post.title,
                  date: `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}`,
                  time: `${date.getHours()}:${date.getMinutes()}`,
                  body: post.body,
                  // hashtags: post.hashtags,    // TO DO:  Add hashtags to Post Model
                },
              }}
            />
          )
        } else return ""
      })
    }

    return (
      <div>
        <div className="CommunityPage-Group-">
          <NavBar page={1} profileImage={people} />
          <Banner background={Banner__Community}>
            <div className="community-page-header">
              {" "}
              <h3 style={{ margin: 0 }}>{this.state.groupData.title}</h3>
            </div>
            <InputTextField
              type="text"
              name="search directory"
              placeholder="Search Groups"
              variation="wide"
            />
            {this.state.joinGroup ? (
              <div className="Modal_align">
                <ModalContainerJoin
                  buttonText="Leave Group"
                  buttonTextColor="white"
                  buttonColor="pink"
                  buttonSize="small"
                  message="Are you sure you want to leave the group?"
                  confirmText="Leave Group"
                  cancelText="Exit"
                  onConfirm={this.handleLeave}
                  onClose={this.handleCloseModal}
                  modalOpen={this.state.showModal}
                  handleOpenModal={this.handleOpenModal}
                />
              </div>
            ) : (
                <div className="Modal_align">
                  <ModalContainerJoin
                    buttonText="Join"
                    buttonTextColor="black"
                    buttonColor="yellow"
                    buttonSize="small"
                    message="Are you sure you want to join?"
                    confirmText="Join"
                    cancelText="Exit"
                    onConfirm={this.handleConfirm}
                    onClose={this.handleCloseModal}
                    modalOpen={this.state.showModal}
                    handleOpenModal={this.handleOpenModal}
                  />
                </div>
              )}
          </Banner>{" "}
        </div>{" "}
        <div className="community-group-body">
          <div className="community-group-bodyLeft">
            <div>
              {forumPosts}
            </div>
          </div>
          <div className="community-group-bodyRight">
            <div className="community-group-members_description">
              <h2>Description</h2>
              <p className="community-group-members_description_p">
                {groupData.description}
              </p>
            </div>
            <div className="community-group-members_section">
              <h2>Members</h2>
              <div className="community-group-members_topic">
                <Connections userViewing={true} users={groupData.members} extraUsers="See More" />
              </div>
            </div>
            <h2>Upcoming Events</h2>
            <div className="upcoming-events">
              <div className="SingleEvent">
                <UpcomingEventsCard
                  name="Upcoming Event"
                  date="Month Day"
                  time="Time"
                  location="City, State"
                />{" "}
              </div>{" "}
              <UpcomingEventsCard
                name="Upcoming Event"
                date="Month Day"
                time="Time"
                location="City, State"
              />
            </div>{" "}
            <div className="seemore-events">See More</div>
            <div className="community-group-title_topic">
              <h2>Media</h2>
            </div>
            <div className="community_media">
              <div className="community_mediaContainer">
                <div className="community_mediaCard">
                  <MediaCard imageSrc={happiness} size="small" footerText="Posted By: Chandi" />
                </div>
                <div className="community_mediaCard">
                  <MediaCard imageSrc={books} size="small" footerText="Posted By: Chandi" />
                </div>
                <div className="community_mediaCard">
                  <MediaCard imageSrc={van} size="small" footerText="Posted By: Chandi" />
                </div>
              </div>
              <div className="community_mediaContainer2">
                <div className="community_mediaCard">
                  <MediaCard imageSrc={nightSky} size="small" footerText="Posted By: Paula" />
                </div>
                <div className="community_mediaCard">
                  <MediaCard imageSrc={waterfall} size="small" footerText="Posted By: Paula" />
                </div>
                <div className="community_mediaCard">
                  <MediaCard imageSrc={flight} size="small" footerText="Posted By: Paula" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer /* history={props.history} handle_logout={props.handle_logout} */ />
      </div>
    )
  }
}
export default CommunityPageGroup;

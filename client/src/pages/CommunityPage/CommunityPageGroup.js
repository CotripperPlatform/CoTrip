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
import pic1 from "../../assets/images/profile-picture-1.png";
import pic2 from "../../assets/images/profile-picture-2.png";
import pic3 from "../../assets/images/profile-picture-3.png";
import pic4 from "../../assets/images/profile-picture-4.png";
import pic5 from "../../assets/images/profile-picture-5.png";
import ForumContainer from "../../components/ForumPostContainer/ForumPostContainer";
import Connections from "../../components/Connections/Connections";
import { BASE_URL } from '../../services/constants';

let testUsers = [
  {
    userId: 1,
    userFirstName: "Paula",
    userSurname: "Bannerman",
    userPic: pic1
  },
  {
    userId: 2,
    userFirstName: "Jack",
    userSurname: "Johnson",
    userPic: pic2
  },
  {
    userId: 3,
    userFirstName: "Jenny",
    userSurname: "Jones",
    userPic: pic3
  },
  {
    userId: 4,
    userFirstName: "Joan",
    userSurname: "Rivers",
    userPic: pic4
  },
  {
    userId: 5,
    userFirstName: "Freida",
    userSurname: "Mercury",
    userPic: pic5
  },
  {
    userId: 6,
    userFirstName: "Leslie",
    userSurname: "Knope",
    userPic: pic5
  },
  {
    userId: 7,
    userFirstName: "Frankie",
    userSurname: "Ocean",
    userPic: pic4
  }
];

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
    console.log('community page group props: ', this.props);
    this.getPosts()
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
          console.log('axios ', res.data)

          this.setState({
            groupData: res.data
          })
        })
        .catch(res => console.log(res))
    }
  }

  getPosts = () => {
    axios.get(`${BASE_URL}/posts`,
      {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`
        }
      })
      .then(res => {
        console.log('axios ', res.data)

        this.setState({
          postList: res.data
        })
      })
      .catch(res => console.log('getPosts failed:' + res))

  }
  handleConfirm = evt => {
    evt.preventDefault();
    this.submitJoinGroup()
    this.setState({
      joinGroup: true,
      showModal: false
    });
  };

  // submitJoinGroup = () => {
  //   console.log(this.props.userid)
  //   if (this.props.userid) {
  //     axios({
  //       method: 'PATCH',
  //       url: `${BASE_URL}/profile/${this.props.userid}`,
  //       headers: {
  //         Authorization: `Token ${localStorage.getItem("token")}`
  //       },
  //       data: {
  //         groups: this.state.form_first_name,
  //         last_name: this.state.form_last_name,
  //         bio: this.state.form_bio,
  //         social_media: this.state.form_social_media,
  //       }
  //     })
  //       .then(res => {
  //         console.log(res)

  //         this.setState({
  //           updated_first_name: this.state.form_first_name,
  //           updated_last_name: this.state.form_last_name,
  //           updated_bio: this.state.form_bio,
  //         })
  //         this.toggleEditMode();
  //         // this.forceUpdate();
  //       })
  //       .catch(err => console.log(err))
  //   }
  // }

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

  render() {
    console.log(this.state.groupData)
    console.log(this.state.postList)
    const groupData = this.state.groupData

    !this.state.postList ? "" : !groupData ? "" :
      this.state.postList.filter(post => groupData.posts.includes(post.id)).map(post => {
        return (
          <ForumContainer
            className="ForumPost"
            forumPost={{ likes: post.likes, comments: '#' }}
            comments={[
              {
                name: "Lexi R.",
                likes: 2,
                replies: 0,
                date: "May 5 ",
                time: " 4:45pm",
                body:
                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore v eritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit"
              }
            ]}
          />
        )
      })

    if (this.state.groupData) {
      console.log(groupData)
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
                {}
                <ForumContainer
                  className="ForumPost"
                  forumPost={{ likes: 8, comments: 5 }}
                  comments={[
                    {
                      name: "Lexi R.",
                      likes: 2,
                      replies: 0,
                      date: "May 5 ",
                      time: " 4:45pm",
                      body:
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore v eritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit"
                    }
                  ]}
                />
                <ForumContainer
                  className="ForumPost"
                  forumPost={{ likes: 8, comments: 5 }}
                  comments={[
                    {
                      name: "Lexi R.",
                      likes: 2,
                      replies: 0,
                      date: "May 5 ",
                      time: " 4:45pm",
                      body:
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore v eritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit"
                    }
                  ]}
                />
                <ForumContainer
                  className="ForumPost"
                  forumPost={{ likes: 8, comments: 5 }}
                  comments={[
                    {
                      name: "Lexi R.",
                      likes: 2,
                      replies: 0,
                      date: "May 5 ",
                      time: " 4:45pm",
                      body:
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore v eritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit"
                    }
                  ]}
                />
              </div>
            </div>
            <div className="community-group-bodyRight">
              <div className="community-group-members_description">
                <h2>Description</h2>
                <p className="community-group-members_description_p">
                  This forum page is the place to discuss the ins and outs, as well as the ups and
                  downs of parenting. You can get advice on potty training, talk about breastfeeding,
                  discuss how to get your baby to sleep, or ask if that one weird thing your kid does
                  is normal. We welcome mothers of all stages in life!
              </p>
              </div>
              <div className="community-group-members_section">
                <h2>Members</h2>
                <div className="community-group-members_topic">
                  <Connections userViewing={true} users={testUsers} extraUsers="See More" />
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

    else return <div></div>
  }
}
export default CommunityPageGroup;

import React, { Component } from "react";
import "./ForumPage.css";
import ModalContainerFollow from "../../components/Modal/_ModalContainer-follow";
import ForumContainer from "../../components/ForumPostContainer/ForumPostContainer";
import Banner from "../../components/Banner/Banner";
import InputTextField from "../../components/InputTextField/InputTextField";
import Banner__Community from "assets/images/community_banner.png";
import MediaCard from "../../components/MediaCard/MediaCard";
import { getHashtagData, getAllHashtags } from "../../services/Community";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";



import books from "../../assets/images/media-card-1.png";
import happiness from "../../assets/images/media-card-2.png";
import van from "../../assets/images/media-card-3.png";
import nightSky from "../../assets/images/media-card-4.png";
import waterfall from "../../assets/images/media-card-5.png";
import flight from "../../assets/images/media-card-6.png";

class ForumPageHashtag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followTag: false,
      showModal: false,
      hashtagId: parseInt(props.match.params.id),
      hashtagData: {},
    };

    this.getHashtagData = getHashtagData.bind(this);
    this.getAllHashtags = getAllHashtags.bind(this);

  }

  componentDidMount() {
    this.getAllHashtags(this.mountHashtagData)
  }

  mountHashtagData = () => {
    let hashtag = this.state.hashtagList.filter(hashtag => hashtag.id === this.state.hashtagId)[0]
    this.setState({ hashtagData: hashtag })
  }

  handleConfirm = evt => {
    evt.preventDefault();
    this.setState({
      followTag: true,
      showModal: false
    });
  };

  handleLeave = evt => {
    evt.preventDefault();
    this.setState({
      followTag: false,
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

  handleEvent(evt) {
    evt.preventDefault();
    alert("something happens");
  }

  handleSelect = event => {
    let userSubmission = event.target.textContent.toLowerCase();

    this.state.hashtagList.map(hashtag => {
      if (userSubmission === hashtag.title.toLowerCase()) {
        this.props.history.push(`${hashtag.id}`)
        this.setState({ hashtagId: hashtag.id }, this.mountHashtagData);
      }
    });
  };
  render() {
    let hashtagData = this.state.hashtagData
    let postList = [], forumPosts = []

    if (hashtagData.posts) {
      postList = hashtagData.posts

      forumPosts = postList.map(post => {
        let date = new Date(post.time)
        return (
          <ForumContainer
            className="ForumPost"
            key={post.id}
            forumPost={{
              key: post.id,
              postId: post.id,
              pillClick: this.pillClick,
              commentClick: this.commentClick,
              likeClick: this.likeclick,
              to: `/profile/${post.author.user}`,
              name: `${post.author.first_name} ${post.author.last_name[0].toUpperCase()}`,
              likes: post.likes,
              comments: post.comments,
              image: post.author.image,
              post: {
                title: post.title,
                date: `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}`,
                time: `${date.getHours()}:${date.getMinutes()}`,
                body: post.body,
                hashtags: post.hashtags,
              },
            }}
          />
        )
      })
    }

    return (
      <div className="ForumPage">
        <Banner background={Banner__Community}>
          <div className="community-page-header">

            <h3 style={{ margin: 0 }}>{this.state.hashtagData.title}</h3>
          </div>
          <Autocomplete
            style={{ width: 300 }}
            id="AutoStateField"
            options={this.state.hashtagList ? this.state.hashtagList : ""}
            getOptionLabel={option => option.title}
            onChange={this.handleSelect}
            renderInput={params => <TextField {...params} label="Hashtag" variant="filled" />}
          />
          {this.state.followTag ? (
            <div className="Modal_align">
              <ModalContainerFollow
                buttonText="Unfollow"
                buttonTextColor="white"
                buttonColor="pink"
                buttonSize="small"
                message="Are you sure you want to unfollow?"
                confirmText="Unfollow"
                cancelText="Exit"
                onConfirm={this.handleLeave}
                onClose={this.handleCloseModal}
                modalOpen={this.state.showModal}
                handleOpenModal={this.handleOpenModal}
              />
            </div>
          ) : (
              <div className="Modal_align">
                <ModalContainerFollow
                  buttonText="Follow #hashtag"
                  buttonTextColor="black"
                  buttonColor="yellow"
                  buttonSize="small"
                  message="Are you sure you want to follow?"
                  confirmText="Follow"
                  cancelText="Exit"
                  onConfirm={this.handleConfirm}
                  onClose={this.handleCloseModal}
                  modalOpen={this.state.showModal}
                  handleOpenModal={this.handleOpenModal}
                />
              </div>
            )}
        </Banner>{" "}
        <div className="hashtag__body">
          <div className="hashtag__bodyLeft">
            <header className="ForumPage__header"></header>
            <div>
              {forumPosts}
            </div>
          </div>
          <div className="hashtag__bodyRight">
            <div className="hashtag_media">
              <h2>Media</h2>
            </div>
            <div className="hashtag_media">
              <div className="hashtag_mediaContainer">
                <div className="hashtag_mediaCard">
                  <MediaCard imageSrc={happiness} size="small" footerText="Posted By: Chandi" />
                </div>
                <div className="hashtag_mediaCard">
                  <MediaCard imageSrc={books} size="small" footerText="Posted By: Chandi" />
                </div>
                <div className="hashtag_mediaCard">
                  <MediaCard imageSrc={van} size="small" footerText="Posted By: Chandi" />
                </div>
              </div>
              <div className="hashtag_mediaContainer">
                <div className="hashtag_mediaCard">
                  <MediaCard imageSrc={nightSky} size="small" footerText="Posted By: Paula" />
                </div>
                <div className="hashtag_mediaCard">
                  <MediaCard imageSrc={waterfall} size="small" footerText="Posted By: Paula" />
                </div>
                <div className="hashtag_mediaCard">
                  <MediaCard imageSrc={flight} size="small" footerText="Posted By: Paula" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ForumPageHashtag.defaultProps = {
  hashtagId: 1,
};

export default ForumPageHashtag;

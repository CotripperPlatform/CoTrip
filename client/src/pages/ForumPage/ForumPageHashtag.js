import React from "react";
import "./ForumPage.css";
import NavBar from "../../components/Navbar/Navbar";
import people from "assets/images/profile_default.svg";
import ModalContainer from "../../components/Modal/_ModalContainer"
import ForumContainer from "../../components/ForumPostContainer/ForumPostContainer"
import Banner from "../../components/Banner/Banner";
import InputTextField from "../../components/InputTextField/InputTextField";
import Banner__Community from "assets/images/community_banner.png";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import MediaCard from "../../components/MediaCard/MediaCard";
import books from "../../assets/images/media-card-1.png";
import happiness from "../../assets/images/media-card-2.png";
import van from "../../assets/images/media-card-3.png";
import nightSky from "../../assets/images/media-card-4.png";
import waterfall from "../../assets/images/media-card-5.png";
import flight from "../../assets/images/media-card-6.png";


function handleEvent(evt) {
  evt.preventDefault();
  alert("something happens");
}

const ForumPageHastag = props => {
  return (
    <div className="ForumPage">
      <NavBar page={2} profileImage={people} />
      <Banner background={Banner__Community}>
        <h3 style={{ margin: 0 }}>#packinglight</h3>
        <InputTextField
          type="text"
          variation="search"
          name="search directory"
          placeholder="Search in #packinglight"
        />
        <div className="Modal_align">
          <ModalContainer
            buttonText="Follow #hashtag"
            buttonTextColor="black"
            buttonColor="yellow"
            buttonSize="large"
            message="Are you sure you want to follow?"
            confirmText="Follow"
            cancelText="Cancel"
            onConfirm={handleEvent}
          />
        </div>
      </Banner>
      <div className="hashtag__body">

        <div className="hashtag__bodyLeft">
          <header className="ForumPage__header"></header>
          <div>
            <ForumContainer className="ForumPost" forumPost={{topics:["Parenting", "Vacation", "Topic"],likes: 8,comments: 5}} comments={[
      {name: "Lexi R.",likes: 2, replies: 0, date: "May 5 ", time: " 4:45pm",body:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore v eritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit"
      }]}/>
            <ForumContainer className="ForumPost" forumPost={{topics:["Parenting", "Vacation", "Topic"],likes: 8,comments: 5}} comments={[
      {name: "Lexi R.",likes: 2, replies: 0, date: "May 5 ", time: " 4:45pm",body:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore v eritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit"
      }]}/>
            <ForumContainer className="ForumPost" forumPost={{topics:["Parenting", "Vacation", "Topic"],likes: 8,comments: 5}} comments={[
      {name: "Lexi R.",likes: 2, replies: 0, date: "May 5 ", time: " 4:45pm",body:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore v eritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit"
      }]}/>

          </div>

        </div>
        <div className="hashtag__bodyRight">
          <div className="hashtag_media">
        <h2>Media</h2>
        </div>
          <div className="hashtag_medieContainer">
          <div className="hashtag_mediaCard"><MediaCard imageSrc={happiness} footerText="Posted By: Chandi"/></div>
          <div className="hashtag_mediaCard"><MediaCard imageSrc={books} footerText="Posted By: Chandi"/></div>
          <div className="hashtag_mediaCard"><MediaCard imageSrc={van} footerText="Posted By: Chandi"/></div>
          </div>
          <div className="hashtag_medieContainer">
          <div className="hashtag_mediaCard"><MediaCard imageSrc={nightSky} footerText="Posted By: Paula"/></div>
          <div className="hashtag_mediaCard"><MediaCard imageSrc={waterfall} footerText="Posted By: Paula"/></div>
          <div className="hashtag_mediaCard"><MediaCard imageSrc={flight} footerText="Posted By: Paula"/></div>
          </div>

        </div>
      </div>
      <Footer history={props.history} handle_logout={props.handle_logout} />
    </div>
  );
};

export default ForumPageHastag;

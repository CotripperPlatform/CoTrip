import React from "react";
import "./ForumPage.css";
import NavBar from "../../components/Navbar/Navbar";
import people from "assets/images/profile_default.svg";
import ModalContainer from "../../components/Modal/_ModalContainer";
import ForumContainer from "../../components/ForumPostContainer/ForumPostContainer";
import Connections from "../../components/Connections/Connections";
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
import pic1 from "../../assets/images/profile-picture-1.png";
import pic2 from "../../assets/images/profile-picture-2.png";
import pic3 from "../../assets/images/profile-picture-3.png";
import pic4 from "../../assets/images/profile-picture-4.png";
import pic5 from "../../assets/images/profile-picture-5.png";

function handleEvent(evt) {
  evt.preventDefault();
  alert("something happens");
}

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

const ForumPageHastag = props => {
  return (
    <div className="ForumPage">
      <NavBar page={2} profileImage={people} />
      <div className="Banner_topic">
        <Banner background={Banner__Community}>
          <h3>Topic: Parenting</h3>
          <InputTextField
            type="text"
            variation="wide"
            name="search directory"
            placeholder="Search in Topic: Parenting"
          />
          <div className="Modal_align">
            <ModalContainer
              buttonText="Favorited"
              buttonTextColor="#FAFAFA"
              buttonColor="pink"
              buttonSize="large"
              message="Are you sure you want to follow?"
              confirmText="Follow"
              cancelText="Cancel"
              onConfirm={handleEvent}
            />
          </div>
        </Banner>
      </div>
      <InputTextField
        type="text"
        variation="post"
        name="search directory"
        placeholder="Write A Message..."
      />
      <div className="hashtag__body">
        <div className="hashtag__bodyLeft">
          <header className="ForumPage__header"></header>
          <div>
            <ForumContainer
              className="ForumPost"
              forumPost={{ topics: ["Parenting", "Vacation", "Topic"], likes: 8, comments: 5 }}
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
              forumPost={{ topics: ["Parenting", "Vacation", "Topic"], likes: 8, comments: 5 }}
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
              forumPost={{ topics: ["Parenting", "Vacation", "Topic"], likes: 8, comments: 5 }}
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
        <div className="hashtag__bodyRight_topic">
          <div className="hashtag__members_description">
            <h2>Description</h2>
            <p className="hashtag__members_description_p">
              This forum page is the place to discuss the ins and outs, as well as the ups and downs
              of parenting. You can get advice on potty training, talk about breastfeeding, discuss
              how to get your baby to sleep, or ask if that one weird thing your kid does is normal.
              We welcome mothers of all stages in life!
            </p>
          </div>
          <div className="hashtag__members_section">
            <h2>Members</h2>
            <div className="hashtag__members_topic">
              <Connections userViewing={true} users={testUsers} extraUsers="See More" />
            </div>
          </div>
          <div className="hashtag__title_topic">
            <h2>Media</h2>
          </div>
          <div className="hashtag_media_topic">
            <div className="hashtag_medieContainer_topic">
              <div className="hashtag_mediaCard_topic">
                <MediaCard size="small" imageSrc={happiness} footerText="Posted By: Chandi" />
              </div>
              <div className="hashtag_mediaCard_topic">
                <MediaCard imageSrc={books} size="small" footerText="Posted By: Chandi" />
              </div>
              <div className="hashtag_mediaCard_topic">
                <MediaCard imageSrc={van} size="small" footerText="Posted By: Chandi" />
              </div>
            </div>
            <div className="hashtag_medieContainer_topic">
              <div className="hashtag_mediaCard_topic">
                <MediaCard imageSrc={nightSky} size="small" footerText="Posted By: Paula" />
              </div>
              <div className="hashtag_mediaCard_topic">
                <MediaCard imageSrc={waterfall} size="small" footerText="Posted By: Paula" />
              </div>
              <div className="hashtag_mediaCard_topic">
                <MediaCard imageSrc={flight} size="small" footerText="Posted By: Paula" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer history={props.history} handle_logout={props.handle_logout} />
    </div>
  );
};

export default ForumPageHastag;

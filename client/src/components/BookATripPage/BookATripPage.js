import React from 'react';
import "./BookATripPage.css";
import NavBar from "../Navbar/Navbar";
// import Banner from "../Banner/Banner";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";

const BookATripPage = (props) => {

  let classList = `BookATripPage`;

  return(
    <div className={classList}>
      <NavBar />
      <div className="BookATripPage__image-group">
        <div className="BookATripPage__image-container">
          {props.images.map(image => {
            return <img src={require(`../../assets/images/${image}.png`)} className="BookATripPage__image"></img>
            // <p className="BookATripPage__name">{image}</p>
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BookATripPage;

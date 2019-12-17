import React from 'react';
import "./Hawaii2020.css";
import NavBar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Banner__pink from "../../components/Banner/Banner__pink.png"
import Footer from "../../components/Footer/Footer";

const Hawaii2020 = (props) => {
  let classList = `Hawaii2020`;

  return(
    <div className={classList}>
      <NavBar/>
      <Banner background={Banner__pink}>
        <h3>Trip: Hawaii 2020</h3>
      </Banner>
      <Footer />
    </div>
  );
}

export default Hawaii2020;

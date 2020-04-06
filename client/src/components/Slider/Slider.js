import React, { useState } from "react";
import "./Slider.css";


const Slider = (props) => {
        let cards = props.cards; //all cards
        let [end, setEnd] = useState(3); //first three cards
        let [beg, setBeg] = useState(0); //first three cards
        let cardDisplayed = cards.slice(`${beg}`, `${end}`);
        let lastCard = cardDisplayed[cardDisplayed.length - 1];
        let lastItem = cards[cards.length - 1];
        let firstCard = cardDisplayed[0];
        let firstItem = cards[0];
        
        const nextCard = () => { 
          
          if (lastCard === lastItem) {
            console.log("stop");
          } else {
            setEnd(end + 1);
            setBeg(beg + 1);
          } }
   

        const previousCard = () => {
        if (firstCard === firstItem) {
          console.log("stop");
        } else {
          setEnd(end - 1);
          setBeg(beg - 1);
        }
           }
          


        return (
          <>

            <div className="slider"> 
                       <div className="arrow__prev" onClick={previousCard}></div>

              <div className="slider__cards ">{cardDisplayed}</div>           
               <div className="arrow__next" onClick={nextCard}></div>

            </div>
          </>
        );
      };


export default Slider;


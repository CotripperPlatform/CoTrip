import React from "react";
import { shallow } from "enzyme";
import TripDetails from "./TripDetails.js";
import hawaii from "../../assets/images/hawaii.png";
import southernCaribbean from "../../assets/images/southernCaribbean.png";
import easternCaribbean from "../../assets/images/easternCaribbean.png";
import hawaiiTrees from "../../assets/images/hawaii-trees.png";
import greece from "../../assets/images/greece.png";


const setUp = props =>{
  const component = shallow(<TripDetails {...props}/>);
  return component;
}
describe("TripDetails component", () => {
  describe('Has Props', ()=>{
    let wrapper;
    beforeEach(()=>{
      const props = {
        images: [
          { alt: "hawaii", src: hawaiiTrees },
          { alt: "hawaii", src: hawaii },
          { alt: "eastern caribbean", src: easternCaribbean },
          { alt: "greece", src: greece },
          { alt: "southern caribbean", src: southernCaribbean }
        ],
        overview:
          "Enjoy a week-long stay at a luxury resort! During your stay, explore the resort's amazing ammenities and events, but above all, explore the beautiful islands of Hawaii! It will be a trip for you and your family to remember forever.",
        startDate: "Sunday, May 17, 2020",
        endDate: "Monday, May 25, 2020",
        location: "Resort XYZ"

      };
      wrapper = setUp(props);
    })
    it('Should render as expected', ()=>{
      expect(wrapper.find('.TripDetails').length).toBe(1);
    })
    it('Should render Carousel Dots', ()=>{
      expect(wrapper.find('CarouselDots').length).toBe(1);
    })
    it('Should render with state at imageindex:0', ()=>{
      expect(wrapper.state('imageIndex')).toBe(0);
    })
  })
  describe('Has No Props', ()=>{
    let wrapper;
    beforeEach(()=>{
      const props = null;
      wrapper = setUp(props);
    })
    it('Should render as expected', ()=>{
      expect(wrapper.find('.TripDetails').length).toBe(1);
    })
    it('Should render Carousel Dots', ()=>{
      expect(wrapper.find('CarouselDots').length).toBe(1);
    })
    it('Should render with state at imageindex:0', ()=>{
      expect(wrapper.state('imageIndex')).toBe(0);
    })
  })
});

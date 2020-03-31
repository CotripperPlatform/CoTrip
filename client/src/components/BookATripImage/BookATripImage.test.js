import React from "react";
import { shallow } from "enzyme";
import BookATripImage from "./BookATripImage.js";
import image1 from "../../assets/images/hawaii.png";
import image2 from "../../assets/images/greece.png";
import image3 from "../../assets/images/southernCaribbean.png";
import image4 from "../../assets/images/easternCaribbean.png";

const setUp = props => {
  const component = shallow(<BookATripImage {...props} />);
  return component;
};
describe("BookATripImage component", () => {
  let wrapper;
  describe("Has Props", () => {
    describe("5 cards", () => {
      beforeEach(() => {
        const props = {
          cards: [
            { image: image1, url: "#", description: "Hawaii May 2020" },
            { image: image2, url: "#", description: "Greece & Croatia Cruise June 2020" },
            { image: image3, url: "#", description: "Southern Caribbean Cruise July 2020" },
            { image: image1, url: "#", description: "Hawaii August 2020" },
            { image: image4, url: "#", description: "Eastern Caribbean Cruise New Year's 2021" }
          ]
        };
        wrapper = setUp(props);
      });
      it("Should render as expected", () => {
        const component = wrapper.find(".BookATripImage");
        expect(component.length).toBe(1);
      });
      it("Should render correct number of images", () => {
        const component = wrapper.find(".BookATripImage__image-container");
        expect(component.length).toBe(5);
      });
    });
    describe("2 cards", () => {
      beforeEach(() => {
        const props = {
          cards: [
            { image: image1, url: "#", description: "Hawaii May 2020" },
            { image: image2, url: "#", description: "Greece & Croatia Cruise June 2020" }
          ]
        };
        wrapper = setUp(props);
      });
      it("Should render as expected", () => {
        const component = wrapper.find(".BookATripImage");
        expect(component.length).toBe(1);
      });
      it("Should render correct number of images", () => {
        const component = wrapper.find(".BookATripImage__image-container");
        expect(component.length).toBe(2);
      });
    });
  });
  describe("Has NO Props", () => {
    beforeEach(() => {
      wrapper = setUp();
    });
    it("Should render as expected", () => {
      const component = wrapper.find(".BookATripImage");
      expect(component.length).toBe(1);
    });
    it("Should render correct number of images", () => {
      const component = wrapper.find(".BookATripImage__image-container");
      expect(component.length).toBe(0);
    });
  });
});

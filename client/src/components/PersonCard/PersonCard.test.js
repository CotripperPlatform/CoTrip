import React from "react";
import { shallow } from "enzyme";
import PersonCard from "./PersonCard";
import image from "../../assets/images/profile-picture-1.png";

const setUp = props => {
  const component = shallow(<PersonCard {...props} />);
  return component;
};
describe("PersonCard component", () => {
  let wrapper;
  describe("Has Props", () => {
    beforeEach(() => {
      const props = {
        image: { image },
        name: "Lindsay L.",
        location: "Washington D.C.",
        interests: [
          { url: "#", interests: "veganism" },
          { url: "#", interests: "budgeting" },
          { url: "#", interests: "travel" },
          { url: "#", interests: "outdoors" }
        ]
      };
      wrapper = setUp(props);
    });
    it("Should render as expected", () => {
      const component = wrapper.find(".PersonCard");
      expect(component.length).toBe(1);
    });
    it("Should render expected card", () => {
      const component = wrapper.find("Card");
      expect(component.length).toBe(0);
    });
  });
  describe("Has NO Props", () => {
    beforeEach(() => {
      wrapper = setUp();
    });
    it("Should render as expected", () => {
      const component = wrapper.find(".PersonCard");
      expect(component.length).toBe(1);
    });
    it("Should render expected card", () => {
      const component = wrapper.find("Card");
      expect(component.length).toBe(0);
    });
  });
});

import React from "react";
import { shallow } from "enzyme";
import CarouselDots from "./CarouselDots.js";
import { findByTestAttribute } from "../../../../utils/utils";

const setUp = (props = {}) => {
  const component = shallow(<CarouselDots {...props} />);
  return component;
};
describe("CarouselDots component", () => {
  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        numberOfDots: 3,
        activeLocation: "Test Active",
        border: true,
        onStatusChange: "Test Change Function"
      };
      wrapper = setUp(props);
    });
    it("Should render without errors", () => {
      const component = findByTestAttribute(wrapper, ".CarouselDots");
      expect(component.length).toBe(1);
    });
    it("Should render dots", () => {
      const component = findByTestAttribute(wrapper, ".CarouselDot");
      expect(component.length).toBe(3);
    });
  });

  describe("Have NO props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    it("Should not render", () => {
      const component = findByTestAttribute(wrapper, "dot");
      expect(component.length).toBe(0);
    });
  });
});

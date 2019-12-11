import React from "react";
import { shallow, configure } from "enzyme";
import Burger from "./Burger.js";
import { findByTestAttribute } from "../../../../utils/utils";

const setUp = (props = {}) => {
  const component = shallow(<Burger {...props} />);
  return component;
};
describe("Burger component", () => {
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
      const component = findByTestAttribute(wrapper, ".Burger");
      expect(component.length).toBe(1);
    });
  });

  describe("Have NO props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    it("Should not render active", () => {
      const component = findByTestAttribute(wrapper, ".Burger--active");
      expect(component.length).toBe(0);
    });
    it("Should not render inactive", () => {
      const component = findByTestAttribute(wrapper, ".Burger--active");
      expect(component.length).toBe(0);
    });
  });
});

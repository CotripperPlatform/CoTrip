import React from "react";
import { shallow } from "enzyme";
import TrendingHashtagCard from "./TrendingHashtagCard.js";
import { findByTestAttribute } from "../../../../utils/utlis";

const setUp = (props = {}) => {
  const component = shallow(<TrendingHashtagCard {...props} />);
  return component;
};
describe("TrendingHashtagCard component", () => {
  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        data: [
          "Test1",
          "Test1",
          "Test1",
          "Test1",
          "Test1",
          "Test1",
          "Test1",
          "Test1",
          "Test1",
          "Test1",
          "Test1"
        ]
      };
      wrapper = setUp(props);
    });
    it("Should render without errors", () => {
      const component = findByTestAttribute(wrapper, "TrendingHashtagCard");
      expect(component.length).toBe(1);
    });
    it("Should render dots", () => {
      const component = findByTestAttribute(wrapper, "hashtags");
      expect(component.length).toBe(10);
    });
  });
});

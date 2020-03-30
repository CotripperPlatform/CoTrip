import React from "react";
import { shallow } from "enzyme";
import TrendingHashtagCard from "./TrendingHashtagCard.js";
import { findByTestAttribute } from "../../../../utils/utils";

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
          "#beach",
          "#snorkeling",
          "#daytrip",
          "#sun",
          "#fun",
          "#family",
          "#biking",
          "#travel",
          "#hiking",
          "#sightseeing",
          "#cotrip"
        ]
      };
      wrapper = setUp(props);
    });
    it("Should render without errors", () => {
      const component = findByTestAttribute(wrapper, ".TrendingHashtagCard__container");
      expect(component.length).toBe(1);
    });
    it("Should render hashtags", () => {
      const component = findByTestAttribute(wrapper, ".TrendingHashtagCard__hashtag");
      expect(component.length).toBe(10);
    });
  });
  describe("Data is empty", () => {
    const props = {
      data: []
    };
    let wrapper = setUp(props);
    it("Should render without errors", () => {
      const component = findByTestAttribute(wrapper, ".TrendingHashtagCard__hashtag");
      expect(component.length).toBe(0);
    });
  });
  describe("Have NO props", () => {
    it("Should render without errors", () => {
      let wrapper = setUp();
      expect(wrapper.length).toBe(1);
    });
  });
});

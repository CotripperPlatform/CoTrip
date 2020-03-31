import React from "react";
import { shallow, configure } from "enzyme";
import ActivityList from "./ActivityList.js";

const setUp = props => {
  const component = shallow(<ActivityList {...props} />);
  return component;
};
describe("ActivityList component", () => {
  let wrapper;
  describe("Has Props", () => {
    beforeEach(() => {
      const props = {
        activities: [
          "Snorkeling",
          "Hiking",
          "Island Hopping",
          "Hawaiian Luaus",
          "Food Markets",
          "Beaches"
        ]
      };
      wrapper = setUp(props);
    });
    it("Should render as expected", () => {
      const component = wrapper.find(".ActivityList");
      expect(component.length).toBe(1);
    });
    it("Should render expected amount of cards", () => {
      const component = wrapper.find("Card");
      expect(component.length).toBe(6);
    });
  });
  describe("Has NO Props", () => {
    beforeEach(() => {
      wrapper = setUp();
    });
    it("Should render as expected", () => {
      const component = wrapper.find(".ActivityList");
      expect(component.length).toBe(1);
    });
    it("Should render expected amount of cards", () => {
      const component = wrapper.find("Card");
      expect(component.length).toBe(0);
    });
  });
});

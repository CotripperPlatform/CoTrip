import React from "react";
import { shallow } from "enzyme";
import GroupsList from "./GroupsList.js";

const setUp = props => {
  const component = shallow(<GroupsList {...props} />);
  return component;
};
describe("GroupsList component", () => {
  let wrapper;
  describe("Has Props", () => {
    beforeEach(() => {
      const props = {
        heading: "Her Groups",
        moreGroups: "View All",
        to: "/"
      };
      wrapper = setUp(props);
    });
    it("Should render as expected", () => {
      const component = wrapper.find(".Groups");
      expect(component.length).toBe(1);
    });
    it("Should render expected Groupcard", () => {
      const component = wrapper.find("GroupCard");
      expect(component.length).toBe(3);
    });
  });
  describe("Has NO Props", () => {
    beforeEach(() => {
      wrapper = setUp();
    });
    it("Should render as expected", () => {
      const component = wrapper.find(".Groups");
      expect(component.length).toBe(1);
    });
    it("Should render expected Groupcard", () => {
      const component = wrapper.find("GroupCard");
      expect(component.length).toBe(3);
    });
  });
});

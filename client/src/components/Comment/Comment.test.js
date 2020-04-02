import React from "react";
import { shallow } from "enzyme";
import CommentBody from "./CommentBody.js";

const setUp = (props = {}) => {
  const component = shallow(<CommentBody {...props} />);
  return component;
};
describe("CommentBody component", () => {
  describe("Has Props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        body:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore v eritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut od",
        date: "December 9",
        time: "10:08 am"
      };
      wrapper = setUp(props);
    });

    it("Should render as expected", () => {
      const component = wrapper.find(".CommentBody");
      expect(component.length).toBe(1);
    });
    it("Should render date class", () => {
      const component = wrapper.find(".CommentBody__date");
      expect(component.length).toBe(1);
    });
    it("Should render spans for date and time", () => {
      const component = wrapper.find("span");
      expect(component.length).toBe(2);
    });
  });
  describe("Has NO props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("Should render ass expected", () => {
      expect(wrapper.length).toBe(1);
    });
    it("Should render date class", () => {
      const component = wrapper.find(".CommentBody__date");
      expect(component.length).toBe(1);
    });
    it("Should render spans for date and time", () => {
      const component = wrapper.find("span");
      expect(component.length).toBe(2);
    });
  });
});

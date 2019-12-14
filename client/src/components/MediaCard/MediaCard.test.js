import React from "react";
import { shallow, configure } from "enzyme";
import MediaCard from "./MediaCard.js";
import flight from "../../assets/images/media-card-6.png";

describe("MediaCard component", () => {
  const setUp = props => {
    const component = shallow(<MediaCard {...props} />);
    return component;
  };
  describe("Has Props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        size: "large",
        to: "User/:userid/",
        imageSrc: { flight },
        footerText: "Posted By: CoTripper"
      };
      wrapper = setUp(props);
    });
    it("Should render as expected", () => {
      expect(wrapper.find(".MediaCard").length).toBe(1);
    });
    it("Should render footer element", () => {
      expect(wrapper.find(".MediaCard__footer").length).toBe(1);
    });
  });

  describe("Has NO Props", () => {
    let wrapper;
    beforeEach(() => (wrapper = setUp()));
    it("Should render as expected", () => {
      expect(wrapper.find(".MediaCard").length).toBe(1);
    });
    it("Should render footer element", () => {
      expect(wrapper.find(".MediaCard__footer").length).toBe(1);
    });
  });
});

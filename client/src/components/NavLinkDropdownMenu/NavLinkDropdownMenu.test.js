import React from "react";
import { shallow } from "enzyme";
import NavLinkDropdownMenu from "./NavLinkDropdownMenu.js";
import { findByTestAttribute } from "../../../../utils/utils";

const setUp = (props = {}) => {
  const component = shallow(<NavLinkDropdownMenu {...props} />);
  return component;
};
describe("NavLinkDropdownMenu component", () => {
  describe("Has Props", () => {
    describe("Has Links", () => {
      const props = {
        menuList: [
          {
            text: "About",
            to: "/"
          },
          {
            text: "Home",
            to: "/"
          }
        ]
      };
      const wrapper = setUp(props);

      it("Should render as expected", () => {
        const component = findByTestAttribute(wrapper, ".NavLinkDropdownMenu");
        expect(component.length).toBe(1);
      });
      it("Should render links", () => {
        const component = findByTestAttribute(wrapper, "Link");
        expect(component.length).toBe(2);
      });
    });
    describe("Does Not Have Links", () => {
      const props = { menuList: [] };
      const wrapper = setUp(props);
      it("Should render as expected", () => {
        const component = findByTestAttribute(wrapper, ".NavLinkDropdownMenu");
        expect(component.length).toBe(1);
      });
      it("Should render NO links", () => {
        const component = findByTestAttribute(wrapper, "Link");
        expect(component.length).toBe(0);
      });
    });
  });
  describe("Have NO props", () => {
    const props = {
      data: null
    };
    const wrapper = setUp(props);

    it("Should render without errors", () => {
      expect(wrapper.length).toBe(1);
    });
  });
});

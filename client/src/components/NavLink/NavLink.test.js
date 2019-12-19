import React from "react";
import { shallow } from "enzyme";
import NavLink from "./NavLink.js";
const setUp = props => {
  const component = shallow(<NavLink {...props} />);
  return component;
};
describe("NavLink component", () => {
  describe("Has Props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        text: "community",
        to: "/",
        menuList: [
          {
            text: "Explore People",
            to: "/"
          },
          {
            text: "Join Groups",
            to: "/"
          }
        ]
      };
      wrapper = setUp(props);
    });
    it("Should render as expected", () => {
      expect(wrapper.find(".NavLink").length).toBe(1);
    });
    it("Should render h1 text as expected", () => {
      expect(wrapper.find("h1").text()).toBe("community");
    });
    it("Should render NavDropdown", () => {
      expect(wrapper.find("NavLinkDropdownMenu").length).toBe(1);
    });
    it("Should have initial dropdownVisible state false", () => {
      expect(wrapper.state("dropdownVisible")).toBe(false);
    });
    it("Should have change state on mouseover", () => {
      const component = wrapper.find(".NavLink");
      component.simulate("mouseenter");
      expect(wrapper.state("dropdownVisible")).toBe(true);
      component.simulate("mouseleave");
      expect(wrapper.state("dropdownVisible")).toBe(false);
    });
  });
  describe("Has NO Props", () => {
    let wrapper;
    beforeEach(() => {
      const props = null;
      wrapper = setUp(props);
    });
    it("Should render as expected", () => {
      expect(wrapper.find(".NavLink").length).toBe(1);
    });
    it("Should render h1 text as expected", () => {
      expect(wrapper.find("h1").text()).toBe("community");
    });
    it("Should render NavDropdown", () => {
      expect(wrapper.find("NavLinkDropdownMenu").length).toBe(1);
    });
    it("Should have initial dropdownVisible state false", () => {
      expect(wrapper.state("dropdownVisible")).toBe(false);
    });
    it("Should have change state on mouseover", () => {
      const component = wrapper.find(".NavLink");
      component.simulate("mouseenter");
      expect(wrapper.state("dropdownVisible")).toBe(true);
      component.simulate("mouseleave");
      expect(wrapper.state("dropdownVisible")).toBe(false);
    });
  });
});

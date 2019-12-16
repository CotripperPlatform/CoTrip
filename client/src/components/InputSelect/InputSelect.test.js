import React from "react";
import { shallow } from "enzyme";
import InputSelect from "./InputSelect.js";
import checkPropTypes from "check-prop-types";

import { findByTestAttribute } from "../../../../utils/utils";

const setUp = props => {
  const component = shallow(<InputSelect {...props} />);
  return component;
};

describe("InputSelect component", () => {
  let wrapper;
  let mockFunction = jest.fn();
  beforeEach(() => {
    const props = {
      onSelect: mockFunction,
      optionPrefix: "Sort By:  ",
      options: [
        { value: "location", title: "Location" },
        { value: "date", title: "Date" },
        { value: "type", title: "Type" }
      ]
    };
    wrapper = setUp(props);
  });
  describe("Checking PropTypes", () => {
    const expectedProps = {
      onSelect: mockFunction,
      optionPrefix: "Sort By:  ",
      options: [
        { value: "location", title: "Location" },
        { value: "date", title: "Date" },
        { value: "type", title: "Type" }
      ]
    };
    it("Should not throw a warning", () => {
      const propsError = checkPropTypes(
        InputSelect.propTypes,
        expectedProps,
        "props",
        InputSelect.name
      );
      expect(propsError).toBe(undefined);
    });
  });
  describe("Has Props", () => {
    it("Should render without error", () => {
      const component = findByTestAttribute(wrapper, ".InputSelect");
      expect(component.length).toBe(1);
    });
  });
  describe("State", () => {
    it("Should have the initial state of select", () => {
      expect(wrapper.state()).toEqual({ value: "select" });
    });
  });
});

import React from "react";
import { shallow } from "enzyme";
import App from "./App";

const setUp = (props = {}) => {
  const component = shallow(<App />);
  return component;
};
describe("App component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });
  test("Is an Object", () => {
    const wrapper = setUp();
    expect(wrapper).toEqual(Object.prototype);
  });
  test("Snapshot renders", () => {
    const tree = setUp();
    expect(tree).toMatchSnapshot();
  });
});

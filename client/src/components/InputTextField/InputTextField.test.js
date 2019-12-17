import React from "react";
import { shallow } from "enzyme";
import InputTextField from "./InputTextField";

describe("InputTextField component", () => {
  const setUp = props => {
    const component = shallow(<InputTextField {...props} />);
    return component;
  };
  describe("Has Props", () => {
    describe("Type Text", () => {
      let wrapper;
      let InputTextField;
      beforeEach(() => {
        const props = {
          type: "text",
          name: "email",
          placeholder: "Email"
        };
        wrapper = setUp(props);
        InputTextField = wrapper.find(`.InputTextField__container--default`);
      });
      it("Should render as expected", () => {
        expect(InputTextField.length).toBe(1);
      });
      it("Should be type Email", () => {
        expect(InputTextField.prop("type")).toBe("text");
      });
    });
    describe("Type Text Small", () => {
      let wrapper;
      let InputTextField;
      beforeEach(() => {
        const props = {
          variation: "small",
          type: "text",
          name: "email",
          placeholder: "Email"
        };
        wrapper = setUp(props);
        InputTextField = wrapper.find(`.InputTextField__container--small`);
      });
      it("Should render as expected", () => {
        expect(InputTextField.length).toBe(1);
      });
      it("Should be type Email", () => {
        expect(InputTextField.prop("type")).toBe("text");
      });
    });
    describe("Type Password", () => {
      let wrapper;
      let InputTextField;
      beforeEach(() => {
        const props = {
          type: "password",
          name: "email",
          placeholder: "Email"
        };
        wrapper = setUp(props);
        InputTextField = wrapper.find(`.InputTextField__container--default`);
      });
      it("Should render as expected", () => {
        expect(InputTextField.length).toBe(1);
      });
      it("Should be type Password", () => {
        expect(InputTextField.prop("type")).toBe("password");
      });
    });
    describe("Type Password Small", () => {
      let wrapper;
      let InputTextField;
      beforeEach(() => {
        const props = {
          variation: "small",
          type: "password",
          name: "email",
          placeholder: "Email"
        };
        wrapper = setUp(props);
        InputTextField = wrapper.find(`.InputTextField__container--small`);
      });
      it("Should render as expected", () => {
        expect(InputTextField.length).toBe(1);
      });
      it("Should be type Password", () => {
        expect(InputTextField.prop("type")).toBe("password");
      });
    });
  });
  describe("Has NO Props", () => {
    it("Should render as expected", () => {
      let wrapper = setUp();
      expect(wrapper.length).toBe(1);
    });
  });
});

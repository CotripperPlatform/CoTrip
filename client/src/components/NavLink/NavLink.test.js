import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount } from "enzyme";
import NavLink from "./NavLink.js";
const setUp = props => {
  const component = mount(
    <BrowserRouter>
      <NavLink {...props} />
    </BrowserRouter>
  );
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
      console.log(wrapper.debug());
      expect(wrapper.find(".NavLink").length).toBe(1);
    });
  });
});

// it("Component should render the number of dots supplied in the properties", () => {
//   const component = mount(
//     <NavLink numberOfDots={3} activeLocation={1} onStatusChange={jest.fn()} />
//   );
//   console.log(component.debug());
//   expect(component.find(".CarouselDot").length).toBe(3);
// });

// it("Component should switch from dot 1 to dot 2 upon clicking 2nd dot", () => {
//   function callback(val) {}
//   const component = mount(
//     <NavLink numberOfDots={3} activeLocation={1} onStatusChange={callback} />
//   );
//   component
//     .find(".CarouselDot")
//     .at(1)
//     .simulate("click");

//   expect(component.state().activeLocation).toBe(2);
// });

// it("Component should render border when prop `border` is set ", () => {
//   const component = mount(
//     <NavLink numberOfDots={3} activeLocation={0} border onStatusChange={jest.fn()} />
//   );

//   expect(component.find(".CarouselDot__border").exists()).toBe(true);
// });

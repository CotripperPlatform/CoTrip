import React from "react";
import { shallow, configure, mount } from "enzyme";
import CarouselDots from "./CarouselDots.js";

const setUp = (props = {}) => {
  const component = shallow(<CarouselDots {...props} />);
  return component;
};
describe("CarouselDots component", () => {
  // we will write one individual test
  it("Component should render the number of dots supplied in the properties", () => {

    // Shallow rendering renders a component without rendering any of its children
    const component = mount(<CarouselDots
    numberOfDots={3}
    activeLocation={1}
    onStatusChange={jest.fn()}/>);
    expect(component.find('.CarouselDot').length).toBe(3);

  });

  it("Component should switch from dot 1 to dot 2 upon clicking 2nd dot", () => {
    function callback(val){
    }
    const component = mount(<CarouselDots
    numberOfDots={3}
    activeLocation={1}
    onStatusChange={callback}/>);
    component.find('.CarouselDot').at(1).simulate('click');

    expect(component.state().activeLocation).toBe(2);



  });

  it("Component should render border when prop `border` is set ", () => {
    const component = mount(<CarouselDots
    numberOfDots={3}
    activeLocation={0}
    border
    onStatusChange={jest.fn()}/>);

    expect(component.find('.CarouselDot__border').exists()).toBe(true);
  })

});

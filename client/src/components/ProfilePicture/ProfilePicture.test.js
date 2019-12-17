import React from 'react'
import { shallow, configure, mount } from 'enzyme'
import ProfilePicture from './ProfilePicture.js'
import Adapter from 'enzyme-adapter-react-16';
import image from "../../assets/images/profile_large.png";
import { BrowserRouter as Router } from "react-router-dom";
configure({adapter: new Adapter()});

// We will describe a block of tests
describe('ProfilePicture component', () => {
	// we will write one individual test
  it('should render as expected', () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = mount(<ProfilePicture />)
    // We create an assertion within the test that checks if our component renders our name prop
   expect(component.exists()).toBe(true);
  })
  it("Should provided a clickable link when `to` prop is supplied", () => {
    const component = mount(<Router><ProfilePicture to={"www.google.com"}/></Router>)
    expect(component.find("Link").props().to === 'www.google.com').toBe(true);
  })
  it("Component should default to size medium when no type prop is given", () => {
    const component = mount(<ProfilePicture />);
    expect(component.props().type=="medium").toBe(true);
  })
})

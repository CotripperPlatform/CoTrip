import React from 'react'
import { shallow, configure, mount } from 'enzyme'
import UpcomingEventsCard from './UpcomingEventsCard.js'
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from "react-router-dom";
configure({adapter: new Adapter()});

// We will describe a block of tests
describe('UpcomingEventsCard component', () => {
	// we will write one individual test
  it('should render as expected', () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<UpcomingEventsCard />)
    // We create an assertion within the test that checks if our component renders our name prop
   expect(component.exists()).toBe(true)
  })
  it('Component should render defaults', () => {
    const component = mount(<Router><UpcomingEventsCard /></Router>);
    let {name, date, time, location } =  component.props().children.props;
    let allPropsLoad = name == "UpcomingEventsCard" && date == "" && time == "" && location == "";
    expect(allPropsLoad).toBe(true);
  })
})

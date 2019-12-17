import React from 'react'
import { shallow, configure, mount } from 'enzyme'
import UpcomingEventsCard from './UpcomingEventsCard.js'
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from "react-router-dom";
configure({adapter: new Adapter()});

// We will describe a block of tests
describe('UpcomingEventsCard component', () => {
  it('should render as expected', () => {
    const component = shallow(<UpcomingEventsCard />)
   expect(component.exists()).toBe(true)
  })
  it('Component should render defaults', () => {
    const component = mount(<Router><UpcomingEventsCard /></Router>);
    let {name, date, time, location } =  component.props().children.props;
    let allPropsLoad = name == "UpcomingEventsCard" && date == "" && time == "" && location == "";
    expect(allPropsLoad).toBe(true);
  })
})

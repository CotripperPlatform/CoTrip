import React from 'react'
import { shallow, configure, mount } from 'enzyme'
import UpcomingTripsCard from './UpcomingTripsCard.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

// We will describe a block of tests
describe('UpcomingTripsCard component', () => {
	// we will write one individual test
  it('should render as expected', () => {
    const component = shallow(<UpcomingTripsCard />)
    expect(component.exists()).toBe(true);
  })
  it('Component should have properties', ()=>{
    const component = mount(<UpcomingTripsCard/>)
    let {src, location, date, details } = component.props();
    let propsLoaded = typeof src === 'string' && typeof location == 'string' && typeof date == 'string' && typeof details == 'string';
    expect(propsLoaded).toBe(true);
  })
})

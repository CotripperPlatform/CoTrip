import React from 'react'
import { shallow, configure, mount } from 'enzyme'
import PersonCardOnlineGreenDot from './PersonCardOnlineGreenDot.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

// We will describe a block of tests
describe('PersonCardOnlineGreenDot component', () => {
	// we will write one individual test
  it('should render as expected', () => {
    const component = mount(<PersonCardOnlineGreenDot />)
		expect(false).toBe(true);
  })
})

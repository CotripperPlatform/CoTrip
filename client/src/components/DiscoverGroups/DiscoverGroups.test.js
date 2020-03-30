import React from 'react'
import { shallow, configure, mount } from 'enzyme'
import DiscoverGroups from './DiscoverGroups.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

// We will describe a block of tests
describe('DiscoverGroups component', () => {
	// we will write one individual test
  it('should render as expected', () => {
    const component = mount(<DiscoverGroups />)
		expect(false).toBe(true);
  })
})

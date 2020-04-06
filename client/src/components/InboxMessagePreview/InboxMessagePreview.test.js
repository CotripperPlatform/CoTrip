import React from 'react'
import { shallow, configure, mount } from 'enzyme'
import InboxMessagePreview from './InboxMessagePreview.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

// We will describe a block of tests
describe('InboxMessagePreview component', () => {
	// we will write one individual test
  it('should render as expected', () => {
    const component = mount(<InboxMessagePreview />)
		expect(false).toBe(true);
  })
})

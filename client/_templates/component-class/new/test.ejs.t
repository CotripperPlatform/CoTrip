---
to: src/components/<%= name %>/<%= name %>.test.js
---
import React from 'react'
import { shallow, configure } from 'enzyme'
import <%= name %> from './<%= name %>.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

// We will describe a block of tests
describe('<%= name %> component', () => {
	// we will write one individual test
	it('should render as expected', () => {
    const component = mount(<<%= name %> />)
		expect(false).toBe(true);
  })
})

import React from 'react'
import { shallow, configure, mount } from 'enzyme'
import PostBody from './PostBody.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

// We will describe a block of tests
describe('PostBody component', () => {
	// we will write one individual test
  it('Should render props if they are not provided', () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = mount(<PostBody />)
    let {title, date, time, hashtags} = component.props();
    let hasProps = typeof title === 'string' && typeof date === 'string' && typeof time === 'string' && typeof hashtags === 'object';
    expect(hasProps).toBe(true);
    // We create an assertion within the test that checks if our component renders our name prop
  // expect(component.contains('Your name')).toBe(true)
  })
})

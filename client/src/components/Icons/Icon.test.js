import React from 'react'
import { shallow, configure } from 'enzyme'
import Icon from './Icon.js'
import InputTextField from './InputTextField.js.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

// We will describe a block of tests
describe('Icon component', () => {
	// we will write one individual test
  it('should render as expected', () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<Icon />)
  })})
describe('InputTextField component', () => {
	// we will write one individual test
  it('should render as expected', () => {
    // Shallow r endering renders a component without rendering any of its children
    const component = shallow(<InputTextField />)
    // We create an assertion within the test that checks if our component renders our name prop
    // expect(component.contains('Your name')).toBe(true)
  })
})
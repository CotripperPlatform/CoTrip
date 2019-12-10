import React from 'react'
import { shallow, configure } from 'enzyme'
<<<<<<< HEAD:client/src/components/IconComponents/IconComponents.test.js
import IconComponents from './IconComponents.js'
=======
import InputTextField from './InputTextField.js'
>>>>>>> develop:client/src/components/InputTextField/InputTextField.test.js
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

// We will describe a block of tests
<<<<<<< HEAD:client/src/components/IconComponents/IconComponents.test.js
describe('Icon component', () => {
	// we will write one individual test
  it('should render as expected', () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<Icon />)
=======
describe('InputTextField component', () => {
	// we will write one individual test
  it('should render as expected', () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<InputTextField />)
>>>>>>> develop:client/src/components/InputTextField/InputTextField.test.js
    // We create an assertion within the test that checks if our component renders our name prop
    // expect(component.contains('Your name')).toBe(true)
  })
})

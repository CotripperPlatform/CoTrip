import React from 'react'
import { shallow, configure, mount } from 'enzyme'
import SignUpAd from './SignUpAd.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

// We will describe a block of tests
describe('SignUpAd component', () => {
	// we will write one individual test
  it('should render as expected', () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<SignUpAd />)
    expect(component.exists()).toBe(true);
    // We create an assertion within the test that checks if our component renders our name prop
  // expect(component.contains('Your name')).toBe(true)
  })
  it('Component should render three input fields',()=>{
    const component = mount(<SignUpAd heading="Heading" subheading="subheading" />)
    expect(component.find('InputTextField').length).toBe(3);
  })
  it('Component should run function when button is click', ()=>{
    let callback = jest.fn();
    const component = mount(<SignUpAd handleClick={callback}/>)
    component.find('button').simulate('click');
    expect(callback.mock.calls.length).toBe(1);
  })
})

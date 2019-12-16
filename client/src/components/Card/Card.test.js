import React from 'react'
import { shallow, configure, mount } from 'enzyme'
import Card from './Card.js'
import Adapter from 'enzyme-adapter-react-16';
import image from "../../assets/images/card_small3.png";
configure({adapter: new Adapter()});

// We will describe a block of tests
describe('Card component', () => {
	// we will write one individual test
  it('should render as expected', () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<Card />)
    // We create an assertion within the test that checks if our component renders our name prop
   expect(component.exists()).toBe(true)
  })
  it("Component should render image when image prop is supplied", ()=>{
    const component = mount(<Card picture={image}/>)
    expect(component.getDOMNode().style.backgroundImage === 'url(card_small3.png)').toBe(true)

  })
  it("Component should render with outline when prop is supplied", ()=>{
      const component = mount(<Card outline/>)
      expect(component.find(".Card__outline").exists()).toBe(true);
  })
})

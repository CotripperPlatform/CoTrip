import React from 'react'
import { shallow, configure, mount } from 'enzyme'
import GroupCard from './GroupCard.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {BrowserRouter} from 'react-router-dom';

// We will describe a block of tests
describe('GroupCard component', () => {
	// we will write one individual test
  it('should render as expected', () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<GroupCard />)
    expect(component.exists()).toBe(true);
  })
  it('Component should use default props if none are given',()=>{
    const component =  mount(<BrowserRouter><GroupCard /></BrowserRouter>);
    let {name, members, location} = component.find('GroupCard').props();

    let hasProps = typeof name == 'string' && typeof members == 'string' && typeof location == 'string';
    expect(hasProps).toBe(true);
  })
  it('Component should render image when picture is provided',()=>{
    const component = mount(<BrowserRouter><GroupCard picture="../../assets/images/card_small5.png" /></BrowserRouter>);
    console.log(component.find('Link').getDOMNode().style.backgroundImage);
    expect(component.find('Link').getDOMNode().style.backgroundImage=='url(../../assets/images/card_small5.png)').toBe(true);
  })
})

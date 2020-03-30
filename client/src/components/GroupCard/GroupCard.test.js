import React from 'react'
import { shallow, configure, mount } from 'enzyme'
import GroupCard from './GroupCard.js'
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter} from 'react-router-dom';
configure({adapter: new Adapter()});
import {BrowserRouter} from 'react-router-dom';

// We will describe a block of tests
describe('GroupCard component', () => {
	// we will write one individual test
  it('should render as expected', () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<BrowserRouter><GroupCard /></BrowserRouter>)

    expect(component.exists()).toBe(true);
  })
  it('Component should load all default props', ()=>{
    const component = mount(<BrowserRouter><GroupCard /></BrowserRouter>)
    let {name, members, location, picture } = component.find('GroupCard').props();
    console.log(name, members, location, picture );
    let propsLoaded = typeof name === 'string' && typeof location == 'string' && typeof members == 'number' && typeof picture == 'object';
    expect(propsLoaded).toBe(true);
  })
})

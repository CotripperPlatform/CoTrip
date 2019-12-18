import React from 'react'
import { shallow, configure, mount} from 'enzyme'
import SplashPage from './SplashPage.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

// We will describe a block of tests
describe('SplashPage component', () => {
	// we will write one individual test
  it('should render as expected', () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<SplashPage />)
    expect(component.exists()).toBe(true);
  })
})

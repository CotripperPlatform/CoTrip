import React from 'react'
import { shallow, configure, mount, render } from 'enzyme'
import Pill from './Pill.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

// We will describe a block of tests

function on(val){
  console.log(val);
}
describe('Pill component', () => {
	// we will write one individual test
  it('Should render defaults without errors if no props are given to the component', () => {
    const wrapper = mount(<Pill/>)
    let {text, size, color, inactiveColor, selectId, shadow} = wrapper.props();
    let propsAreCorrect = text == "Default" && size == "large" && color == "pink" && inactiveColor == 'red' && selectId == 0 && shadow == '';
    expect(propsAreCorrect).toBe(true)
  })
  it("Should change colors upon click when the active prop is set", ()=>{

    const mockCallBack = jest.fn();
    let props = {
      active: true,
      color: "purple",
      inactiveColor: "pink",
      onClick: mockCallBack
    }

    const wrapper = mount(<Pill {...props}/>)
    expect(wrapper.exists('.Pill__purple')).toBe(true);
    wrapper.simulate('click');
    expect(wrapper.exists('.Pill__pink')).toBe(true);
  })

  it("Should not change colors when clicked if the active prop is not set", ()=>{
    const mockCallBack = jest.fn();
    let props = {
      color: "purple",
      inactiveColor: "pink",
      onClick: mockCallBack
    }

    const wrapper = mount(<Pill {...props}/>)
    expect(wrapper.exists('.Pill__purple')).toBe(true);
    wrapper.simulate('click');
    expect(wrapper.exists('.Pill__pink')).toBe(false);
  })

  it("Should return a callback on click", ()=>{
    const mockCallBack = jest.fn();
    let props = {
      onClick: mockCallBack
    }
    const wrapper = mount(<Pill {...props}/>)
    wrapper.simulate('click');
    expect(mockCallBack).toHaveBeenCalled();

  })
  it("Should display an icon component when the icon prop is set", ()=>{
    let props= {
      icon:"white"
    };
    const wrapper = mount(<Pill {...props}/>);
    expect(wrapper.find('img').exists()).toBe(true);
  })
})

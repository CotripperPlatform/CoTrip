import React from 'react'
import { shallow, configure, mount, render } from 'enzyme'
import InputSelect from './InputSelect.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('InputSelect component', () => {

  it('Component should render select element', () => {
    const component = shallow(<InputSelect />)
    expect(component.find('select').exists()).toBe(true);

  })
  it('Component should utilizes default props if none are provided', ()=>{
    const component = mount(<InputSelect />);
    let {optionPrefix, options} = component.props();
    let allPropsRendered = optionPrefix == "Sort By:  " && options.length == 2;
    expect(allPropsRendered).toBe(true);
  //  let {optionPrefix, options }
  })
  it('Component state value should change once a user as click an option', ()=>{
    const component = mount(<InputSelect />);
    expect(component.state().value==="select").toBe(true);
    component.simulate('change', {target: {value: 'option2'}});
    expect(component.state().value=="option2").toBe(true);

  })
})

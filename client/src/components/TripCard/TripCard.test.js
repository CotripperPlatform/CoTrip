import React from "react";
import { shallow } from "enzyme";
import TripCard from "./TripCard"
import example1 from "../../assets/images/card_small2.png";

const setUp = props => {
  const component = shallow(<TripCard {...props}/>);
  return component;
}
describe("TripCard component", () => {
  describe('Has props', ()=>{
    let wrapper;
    beforeEach(()=>{
      const props = {
        src:{example1},
        location:'Hawaii',
        date:"May 2020"
      }
      wrapper = setUp(props)
    })
    it('Should render as expected', ()=>{
      expect(wrapper.find('Card').length).toBe(1);
      expect(wrapper.find('.TripCard').length).toBe(1);
    })
    it('Should render trip location',()=>{
      expect(wrapper.find('h3').length).toBe(1);
      expect(wrapper.find('h3').text()).toEqual('Hawaii');
    })
    it('Should render trip date',()=>{
      expect(wrapper.find('h4').length).toBe(1);
      expect(wrapper.find('h4').text()).toEqual('May 2020');
    })
  })
  describe('Has NO props', ()=>{
    let wrapper;
    beforeEach(()=>{
      const props = null;
      wrapper = setUp(props)
    })
    it('Should render as expected', ()=>{
      expect(wrapper.find('Card').length).toBe(1);
      expect(wrapper.find('.TripCard').length).toBe(1);
    })
  })
});

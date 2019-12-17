import React from 'react'
import { shallow } from 'enzyme'
import BookTripCard from './BookTripCard.js'
import Card from "../Card/Card";

const setUp = (props) => {
  const component = shallow(<BookTripCard {...props}/>);
  return component;
}
describe("BookTripCard component", () => {
  describe('Has props', ()=>{
    let wrapper;
    beforeEach(()=>{
      const props = {
        children:[<h1>Book a Trip</h1>,
          <Card size='medium' />,
          <Card size='medium'/>],
          to:"/"
      }
      
      wrapper = setUp(props)
    })
    it('Should render as expected', ()=>{
     
      expect(wrapper.find('.BookTripCard__title-wrapper').length).toBe(1);
    })
    it('Should render trip title',()=>{
      expect(wrapper.find('.BookTripCard__title-wrapper').text()).toBe('Book a Trip');
    })
    it('Should render second trip',()=>{
      expect(wrapper.find('.BookTripCard__content-wrapper').length).toBe(1);
    })
  })
  describe('Has NO props', ()=>{
    let wrapper;
    beforeEach(()=>{
  
      wrapper = setUp()
    })
    it('Should render as expected', ()=>{
      expect(wrapper.find('.BookTripCard__title-wrapper').length).toBe(1);
    })
    it('Should render trip title',()=>{
      expect(wrapper.find('.BookTripCard__title-wrapper').text()).toBe('Book a Trip');
    })
    it('Should render second trip',()=>{
      expect(wrapper.find('.BookTripCard__content-wrapper').length).toBe(1);
    })
  })
});

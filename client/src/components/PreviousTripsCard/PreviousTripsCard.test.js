import React from 'react'
import { shallow, configure } from 'enzyme'
import PreviousTripsCard from './PreviousTripsCard.js'
import TripCard from 'components/TripCard/TripCard.js';



const setUp = (props, children) => {
  const component = shallow(<PreviousTripsCard {...props}>{children}</PreviousTripsCard>);
  return component;
}
describe("PreviousTripsCard component", () => {
  describe('Has props', ()=>{
    let wrapper;
    beforeEach(()=>{
      const props = {
        trips:true,
        link:"/"
      }
      const children = () => {<><h1>Previous Trips</h1>
        <TripCard src={example1} location="Puerto Rico" date="April 2019" />
        <TripCard
          src="https://wallpaperaccess.com/full/144067.jpg"
          location="Hawaii"
          date="May 2020"
        /></>}
      wrapper = setUp(props, children)
    })
    it('Should render as expected', ()=>{
      expect(wrapper.find('Card').length).toBe(1);
      expect(wrapper.find('.PreviousTripCard__container').length).toBe(1);
    })
    it('Should render first trip',()=>{
      expect(wrapper.find('.PreviousTripCard__trips').length).toBe(1);
    })
    it('Should render second trip',()=>{
      expect(wrapper.find('.PreviousTripCard__trip-two').length).toBe(1);
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
      expect(wrapper.find('.PreviousTripCard__container').length).toBe(1);
    })
  })
});

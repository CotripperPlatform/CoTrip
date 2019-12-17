import React from 'react'
import { shallow } from 'enzyme'
import ExtraUsers from './ExtraUsers.js'

const setUp = (props = {}) => {
  const component = shallow(<ExtraUsers {...props} />);
  return component;
};
describe('ExtraUsers component', () => {
	describe("Have props", () => {
    describe('More than 4 users',()=>{
    it("Should render without errors", () => {
      const props = {
        to: 'PATH',
        users: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
      };
      let wrapper = setUp(props);
      const component = wrapper.find(".ExtraUsers");
      expect(component.length).toBe(1);
    });
    })
    describe('4 or less users',()=>{
      it("Should not render", () => {
        const props = {
          to: 'PATH',
          users: [1, 2, 3, 4]
        };
        let wrapper = setUp(props);
        const component = wrapper.find(".ExtraUsers");
        expect(component.length).toBe(0);
      });
      })
    
  });

  describe("Have NO props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    it("Should not render", () => {
      const component = wrapper.find(".ExtraUsers");
      expect(component.length).toBe(1);
    });
  });
})

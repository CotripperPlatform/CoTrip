import React from "react";
import { shallow } from "enzyme";
import Connections from "./Connections.js";
import pic1 from "../../assets/images/profile-picture-1.png";
import pic2 from "../../assets/images/profile-picture-2.png";
import pic3 from "../../assets/images/profile-picture-3.png";
import pic4 from "../../assets/images/profile-picture-4.png";
import pic5 from "../../assets/images/profile-picture-5.png";

const setUp = props => {
  const component = shallow(<Connections {...props} />);
  return component;
};
describe("Connections component", () => {
  describe("Have props", () => {
    it("Should render without errors", () => {
      const props = {
        users: [
          {
            userId: 1,
            userFirstName: "Paula",
            userSurname: "Bannerman",
            userPic: pic1
          },
          {
            userId: 2,
            userFirstName: "Jack",
            userSurname: "Johnson",
            userPic: pic2
          },
          {
            userId: 3,
            userFirstName: "Jenny",
            userSurname: "Jones",
            userPic: pic3
          },
          {
            userId: 4,
            userFirstName: "Joan",
            userSurname: "Rivers",
            userPic: pic4
          },
          {
            userId: 5,
            userFirstName: "Freida",
            userSurname: "Mercury",
            userPic: pic5
          },
          {
            userId: 6,
            userFirstName: "Leslie",
            userSurname: "Knope",
            userPic: pic5
          },
          {
            userId: 7,
            userFirstName: "Frankie",
            userSurname: "Ocean",
            userPic: pic4
          }
        ]
      };
      let wrapper = setUp(props);
      const component = wrapper.find(".Connections");
      expect(component.length).toBe(1);
    });
  });

  describe("Have NO props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    it("Should not render", () => {
      const component = wrapper.find(".Connections");
      expect(component.length).toBe(1);
    });
  });
});

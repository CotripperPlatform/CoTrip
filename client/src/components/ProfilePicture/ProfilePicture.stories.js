import React from "react";
import { storiesOf } from "@storybook/react";
import ProfilePicture from "./ProfilePicture.js";
import pic1 from '../../assets/images/profile-picture-1.png'
import pic2 from '../../assets/images/profile-picture-2.png'
import pic3 from '../../assets/images/profile-picture-3.png'
import pic4 from '../../assets/images/profile-picture-4.png'
import pic5 from '../../assets/images/profile-picture-5.png'

storiesOf("Profile Picture", module)
  .add("Extra Small with Link", () => <ProfilePicture type="extra-small" to="#" image={pic1} />)
  .add("Small with Link", () => <ProfilePicture type="small" to="#" image={pic2} />)
  .add("Medium with Link", () => <ProfilePicture to="#" image={pic3} />)
  .add("Large with Link", () => <ProfilePicture type="large" to="#" image={pic4} />)
  .add("Extra Small Static", () => <ProfilePicture type="extra-small" image={pic5} />)
  .add("Small Static", () => <ProfilePicture type="small" image={pic1} />)
  .add("Medium Static", () => <ProfilePicture image={pic2} />)
  .add("Large Static", () => <ProfilePicture type="large" image={pic3} />);

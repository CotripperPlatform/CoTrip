import React from "react";
import { storiesOf } from "@storybook/react";
import Banner from "./Banner";
import InputTextField from "../InputTextField/InputTextField";
import Button from "../Button/Button";
import Banner__pink from "./Banner__pink.png"
import Banner__purpleBig from "./Banner__purple--big.png";

const handleClick = e => {
  alert("Clicked");
};

storiesOf("Banner", module)
  .add("Home Banner", () => <Banner background={Banner__purpleBig}/>)
  .add("Home Banner with Welcome text", () =>
    <Banner background={Banner__purpleBig}>
        <h2>Welcome, Justine</h2>
    </Banner>
  )
  .add("Home Banner with Welcome Back text", () =>
    <Banner background={Banner__purpleBig}> 
      <h2 style={{textAlign: 'left', display: 'inline-block'}}>Welcome Back,<br />Justine.</h2>
    </Banner>
  )

  .add("Community Banner", () => <Banner background={Banner__purpleBig}/>)
  .add("Community Banner with input People", () =>
    <Banner background={Banner__purpleBig}>
        <h3 style={{margin: 0}}> Community: People </h3>
        <InputTextField type="text" variation="search" name="search directory" placeholder="Search My Directory" />
    </Banner>
  )
  .add("Community Banner with input Groups", () =>
    <Banner background={Banner__purpleBig}>
        <h3 style={{margin: 0}}>Community: Groups</h3>
        <InputTextField type="text" variation="search" name="search directory" placeholder="Search My Directory" />
    </Banner>
  )
  .add("Community Banner with input and yellow button", () =>
    <Banner background={Banner__purpleBig}>     
        <h3 style={{margin: 0}}>Group: Moms in DC</h3>
        <InputTextField type="text" variation="search" name="search directory" placeholder="Search My Directory" />
        <Button text="Join" color="yellow" size="small" handleClick={handleClick} />
    </Banner>
  )
  .add("Community Banner with input and pink button", () =>
    <Banner background={Banner__purpleBig}>
        <h3 style={{margin: 0}}>Group: Moms in DC</h3>
        <InputTextField type="text" variation="search" name="search directory" placeholder="Search My Directory" />
        <Button text="Leave Group" color="pink" size="small" handleClick={handleClick} />
    </Banner>
  )
  .add("Community Banner with Forum: My Favorites Input", () =>
    <Banner background={Banner__purpleBig}>
        <h3 style={{margin: 0}}>Forum: My Favorites</h3>
        <InputTextField type="text" variation="search" name="search directory" placeholder="Search Topics and #hashtags" />
    </Banner>
  )
  .add("Community Banner with Forum: Discover Topics Input", () =>
    <Banner background={Banner__purpleBig}>
        <h3 style={{margin: 0}}>Forum: Discover Topics</h3>
        <InputTextField type="text" variation="search" name="search directory" placeholder="Search Topics and #hashtags" />
    </Banner>
  )
  .add("Community Banner with Topic Search Input", () =>
    <Banner background={Banner__purpleBig}>
        <h3 style={{margin: 0}}>Search: Packing</h3>
        <InputTextField type="text" variation="search" name="search directory" placeholder="Packing" />
    </Banner>
  )
  .add("Community Banner with Search in Topic Input and pink Favorited button", () =>
    <Banner background={Banner__purpleBig}>
        <h3 style={{margin: 0}}>Topic: Parenting</h3>
        <InputTextField type="text" variation="search" name="search directory" placeholder="Search in Topic: Parenting" />
        <Button text="Favorited" color="pink" size="small" handleClick={handleClick} />
    </Banner>
  )
  .add("Community Banner with #hashtag Search Input and yellow follow button", () =>
    <Banner background={Banner__purpleBig}>
        <h3 style={{margin: 0}}>#packinglight</h3>
        <InputTextField type="text" variation="search" name="search directory" placeholder="Search in #packinglight" />
        <Button text="Follow #hashtag" color="yellow" size="small" handleClick={handleClick} />
    </Banner>
  )
  .add("Community Banner with #hashtag Search Input and pink followed button", () =>
    <Banner background={Banner__purpleBig}>
        <h3 style={{margin: 0}}>#packinglight</h3>
        <InputTextField type="text" variation="search" name="search directory" placeholder="Search in #packinglight" />
        <Button text="Followed" color="pink" size="small" handleClick={handleClick} />
    </Banner>
  )


  .add("Profile Banner", () => <Banner background={Banner__pink}/>)
  .add("Profile Banner with Text", () =>
    <Banner background={Banner__pink}>
        <h3>Trip: Hawaii 2020</h3>
    </Banner>
  )
  .add("Profile Banner with Search Directory Input", () =>
    <Banner background={Banner__pink}>
        <h3 style={{margin: 0}}>User Profile</h3>
        <InputTextField type="text" variation="search" name="search directory" placeholder="Search My Directory" />
    </Banner>
  )
  .add("Profile Banner with Directory: My Friends Search Input", () =>
    <Banner background={Banner__pink}>
        <h3 style={{margin: 0}}>Directory: My Friends</h3>
        <InputTextField type="text" variation="search" name="search directory" placeholder="Search My Directory" />
    </Banner>
  )
  .add("Profile Banner with Directory: My Groups Search Input", () =>
    <Banner background={Banner__pink}>
        <h3 style={{margin: 0}}>Directory: My Groups</h3>
        <InputTextField type="text" variation="search" name="search directory" placeholder="Search My Directory" />
    </Banner>
  )
  .add("Profile Banner with Search Trip input", () =>
    <Banner background={Banner__pink}>
        <h3 style={{margin: 0}}>Book a Trip</h3>
        <InputTextField type="text" variation="search" name="search directory" placeholder="Search Trip"/>
    </Banner>
  )


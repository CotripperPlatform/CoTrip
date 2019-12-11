import React from "react";
import { storiesOf } from "@storybook/react";
import Banner from "./Banner";
import InputTextField from "../InputTextField/InputTextField";
import Button from "../Button/Button";

const handleClick = e => {
  console.log("Clicked");
};

storiesOf("Banner", module)
  .add("Home Banner", () => <Banner
    bannerType='var(--home-banner)'
    bannerHeight='380px'
  />)
  .add("Home Banner with Welcome text", () =>
    <Banner bannerType='var(--home-banner)' bannerHeight='380px' bannerText='Welcome,' bannerFontSize='80px' bannerLineHeight='120px'>
      <div className="Banner__header">
        <h2>Welcome, Justine</h2>
      </div>
    </Banner>
  )
  .add("Home Banner with Welcome Back text", () =>
    <Banner bannerType='var(--home-banner)' bannerHeight='380px' bannerText='Welcome,' bannerFontSize='80px' bannerLineHeight='120px'>
      <div className="Banner__header2">
        <h2>Welcome Back,<br />Justine.</h2>
      </div>
    </Banner>
  )

  .add("Community Banner", () => <Banner
    bannerType='var(--community-banner)'
  />)
  .add("Community Banner with input People", () =>
    <Banner bannerType='var(--community-banner)'>
      <div className="Banner__header">
        <h3 className="Banner__header3">Community: People</h3>
        <InputTextField type="text" variation="search" name="search directory" placeholder="Search My Directory" />
      </div>
    </Banner>
  )
  .add("Community Banner with input Groups", () =>
    <Banner bannerType='var(--community-banner)'>
      <div className="Banner__header">
        <h3 className="Banner__header3">Community: Groups</h3>
        <InputTextField type="text" variation="search" name="search directory" placeholder="Search My Directory" />
      </div>
    </Banner>
  )
  .add("Community Banner with input and yellow button", () =>
    <Banner bannerType='var(--community-banner)'>
      <div className="Banner__header">
        <h3 className="Banner__header3">Group: Moms in DC</h3>
        <InputTextField type="text" variation="search" name="search directory" placeholder="Search My Directory" />
        <Button text="Join" color="yellow" size="small" handleClick={handleClick} />
      </div>
    </Banner>
  )
  .add("Community Banner with input and pink button", () =>
    <Banner bannerType='var(--community-banner)'>
      <div className="Banner__header">
        <h3 className="Banner__header3">Group: Moms in DC</h3>
        <InputTextField type="text" variation="search" name="search directory" placeholder="Search My Directory" />
        <Button text="Leave Group" color="pink" size="small" handleClick={handleClick} />
      </div>
    </Banner>
  )
  .add("Community Banner with Forum: My Favorites Input", () =>
    <Banner bannerType='var(--community-banner)'>
      <div className="Banner__header">
        <h3 className="Banner__header3">Forum: My Favorites</h3>
        <InputTextField type="text" variation="search" name="search directory" placeholder="Search Topics and #hashtags" />
      </div>
    </Banner>
  )
  .add("Community Banner with Forum: Discover Topics Input", () =>
    <Banner bannerType='var(--community-banner)'>
      <div className="Banner__header">
        <h3 className="Banner__header3">Forum: Discover Topics</h3>
        <InputTextField type="text" variation="search" name="search directory" placeholder="Search Topics and #hashtags" />
      </div>
    </Banner>
  )
  .add("Community Banner with Topic Search Input", () =>
    <Banner bannerType='var(--community-banner)'>
      <div className="Banner__header">
        <h3 className="Banner__header3">Search: Packing</h3>
        <InputTextField type="text" variation="search" name="search directory" placeholder="Packing" />
      </div>
    </Banner>
  )
  .add("Community Banner with Search in Topic Input and pink Favorited button", () =>
    <Banner bannerType='var(--community-banner)'>
      <div className="Banner__header">
        <h3 className="Banner__header3">Topic: Parenting</h3>
        <InputTextField type="text" variation="search" name="search directory" placeholder="Search in Topic: Parenting" />
        <Button text="Favorited" color="pink" size="small" handleClick={handleClick} />
      </div>
    </Banner>
  )
  .add("Community Banner with #hashtag Search Input and yellow follow button", () =>
    <Banner bannerType='var(--community-banner)'>
      <div className="Banner__header">
        <h3 className="Banner__header3">#packinglight</h3>
        <InputTextField type="text" variation="search" name="search directory" placeholder="Search in #packinglight" />
        <Button text="Follow #hashtag" color="yellow" size="small" handleClick={handleClick} />
      </div>
    </Banner>
  )
  .add("Community Banner with #hashtag Search Input and pink followed button", () =>
    <Banner bannerType='var(--community-banner)'>
      <div className="Banner__header">
        <h3 className="Banner__header3">#packinglight</h3>
        <InputTextField type="text" variation="search" name="search directory" placeholder="Search in #packinglight" />
        <Button text="Followed" color="pink" size="small" handleClick={handleClick} />
      </div>
    </Banner>
  )


  .add("Profile Banner", () => <Banner
    bannerType='var(--profile-banner)'
  />)
  .add("Profile Banner with Text", () =>
    <Banner bannerType='var(--profile-banner)'>
      <div className="Banner__header">
        <h3>Trip: Hawaii 2020</h3>
      </div>
    </Banner>
  )
  .add("Profile Banner with Search Directory Input", () =>
    <Banner bannerType='var(--profile-banner)'>
      <div className="Banner__header">
        <h3 className="Banner__header3">User Profile</h3>
        <InputTextField type="text" variation="search" name="search directory" placeholder="Search My Directory" />
      </div>
    </Banner>
  )
  .add("Profile Banner with Directory: My Friends Search Input", () =>
    <Banner bannerType='var(--profile-banner)'>
      <div className="Banner__header">
        <h3 className="Banner__header3">Directory: My Friends</h3>
        <InputTextField type="text" variation="search" name="search directory" placeholder="Search My Directory" />
      </div>
    </Banner>
  )
  .add("Profile Banner with Directory: My Groups Search Input", () =>
    <Banner bannerType='var(--profile-banner)'>
      <div className="Banner__header">
        <h3 className="Banner__header3">Directory: My Groups</h3>
        <InputTextField type="text" variation="search" name="search directory" placeholder="Search My Directory" />
      </div>
    </Banner>
  )
  .add("Profile Banner with Search Trip input", () =>
    <Banner bannerType='var(--profile-banner)'>
      <div className="Banner__header">
        <h3 className="Banner__header3">Book a Trip</h3>
        <InputTextField type="text" variation="search" name="search directory" placeholder="Search Trip"/>
      </div>
    </Banner>
  )


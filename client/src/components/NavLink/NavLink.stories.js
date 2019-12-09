import React from 'react';
import { storiesOf } from '@storybook/react';
import NavLink from './NavLink';

const placeholderTextProp = "COMMUNITY";
const placeholderUrl = "community page route";
const placeholderDropdownProp = [
  {
    text: 'Explore People',
    url: 'community people route'
  },
  {
    text: 'Join Groups',
    url: 'community groups route'
  }
]

storiesOf('NavLink', module)
  .add("NavLink", () => (
    <NavLink text={placeholderTextProp} url={placeholderUrl} menuList={placeholderDropdownProp} />
  )
)

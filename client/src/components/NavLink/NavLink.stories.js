import React from 'react';
import { storiesOf } from '@storybook/react';
import NavLink from './NavLink';

const placeholderTextProp = "community";
const placeholderUrl = "/";
const placeholderDropdownProp = [
  {
    text: 'Explore People',
    url: '/'
  },
  {
    text: 'Join Groups',
    url: '/'
  }
]

storiesOf('NavLink', module)
  .add("NavLink", () => (
    <NavLink text={placeholderTextProp} url={placeholderUrl} menuList={placeholderDropdownProp} />
  ))
  .add("NavLink w/o Menu", () => (
    <NavLink text={placeholderTextProp} url={placeholderUrl} menuList={[]} />
  ))

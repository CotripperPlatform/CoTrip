import React from 'react';
import { storiesOf } from '@storybook/react';
import IconComponents from './IconComponents';
import WhiteHeartIcon from './Images/HeartIconWhite.png';
import BlackHeartIcon from './Images/HeartIconBlack.png';
import RedHeartIcon from './Images/HeartIconRed.png';
import ArrowIconLeft from './Images/ArrowIconLeft.png';
import ArrowIconRight from './Images/ArrowIconRight.png';
import FacebookIcon from './Images/FacebookIcon.png';
import InstagramIcon from './Images/InstagramIcon.png';
import PinterestIcon from './Images/PinterestIcon.png';
import SearchIcon from './Images/SearchIcon.png';
import MessageIcon from './Images/MessageIcon.png';
import LogoIcon from './Images/LogoIcon.png';


import "./IconComponents.css";

storiesOf('IconComponents', module)
.add('Heart Icon White', () => <IconComponents type="hearty"icon={WhiteHeartIcon}/>)
.add('Heart Icon Black', () => <IconComponents type="hearty"icon={BlackHeartIcon}/>)
.add('Heart Icon Pink', () => <IconComponents type="hearty"icon={RedHeartIcon}/>)

.add('Arrow Icon Right', () => <IconComponents type="arrow"icon={ArrowIconRight}/>)
.add('Arrow Icon Left', () => <IconComponents type="arrow"icon={ArrowIconLeft}/>)

.add('Facebook Icon', () => <IconComponents type="facebook"icon={FacebookIcon}/>)
.add('Pinterest Icon', () => <IconComponents type="pinterest"icon={PinterestIcon}/>)
.add('Instagram Icon', () => <IconComponents type="instagram"icon={InstagramIcon}/>)

.add('Search Icon', () => <IconComponents type="search"icon={SearchIcon}/>)
.add('Message Icon', () => <IconComponents type="message"icon={MessageIcon}/>)
.add('Logo Icon', () => <IconComponents type="logo"icon={LogoIcon}/>)








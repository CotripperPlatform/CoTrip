import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './Icon';
import { library } from '@fortawesome/fontawesome-svg-core'
import "./Icon.css";
import { faCheckSquare, faHeart, faTable, faComment, faCaretRight, faCaretLeft, faSearch, faAngleLeft, faAngleRight, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fab, far, fas, faCheckSquare, faHeart, faTable, faComment, faCaretRight, faCaretLeft, faSearch, faAngleLeft, faAngleRight, faCommentDots  )



storiesOf('Icon', module)
.add('Coffee', () => <Icon icon={"coffee"} />)
.add('Comment', () => <Icon icon={"comment"}/>)
.add('Heart', () => <Icon icon={"heart"}/>)
.add('Apple', () => <Icon icon={['fab', 'apple']}/>)
.add('Microsoft', () => <Icon icon={['fab', 'microsoft']}/>)
.add('Google', () => <Icon icon={['fab', 'google']}/>)
.add('Pinterest', () => <Icon icon={['fab', 'pinterest']}/>)
.add('Facebook', () => <Icon icon={['fab', 'facebook']}/>)
.add('Instagram', () => <Icon icon={['fab', 'instagram']}/>)
.add('Caret Right', () => <Icon icon={"caret-right"}/>)
.add('Caret Left', () => <Icon icon={"caret-left"}/>)
.add('Search Glass', () => <Icon icon={"search"}/>)
.add('Angle Left', () => <Icon icon={"angle-left"}/>)
.add('Angle Right', () => <Icon icon={"angle-right"}/>)
.add('Comment Dots', () => <Icon icon={"comment-dots"}/>)
.add('Comment Dots Regular', () => <Icon icon={['far', 'comment-dots']}/>)











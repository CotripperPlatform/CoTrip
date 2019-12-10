import React from 'react';
import { storiesOf } from '@storybook/react';
import IconComponents from './IconComponents';
import { library } from '@fortawesome/fontawesome-svg-core'
import "./IconComponents.css";
import { faCheckSquare, faHeart, faTable, faComment, faCaretRight, faCaretLeft, faSearch, faAngleLeft, faAngleRight, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fab, far, fas, faCheckSquare, faHeart, faTable, faComment, faCaretRight, faCaretLeft, faSearch, faAngleLeft, faAngleRight, faCommentDots  )



storiesOf('IconComponents', module)
.add('Coffee', () => <IconComponents icon={"coffee"} />)
.add('Comment', () => <IconComponents icon={"comment"}/>)
.add('Heart', () => <IconComponents icon={"heart"}/>)
.add('Apple', () => <IconComponents icon={['fab', 'apple']}/>)
.add('Microsoft', () => <IconComponents icon={['fab', 'microsoft']}/>)
.add('Google', () => <IconComponents icon={['fab', 'google']}/>)
.add('Pinterest', () => <IconComponents icon={['fab', 'pinterest']}/>)
.add('Facebook', () => <IconComponents icon={['fab', 'facebook']}/>)
.add('Instagram', () => <IconComponents icon={['fab', 'instagram']}/>)
.add('Caret Right', () => <IconComponents icon={"caret-right"}/>)
.add('Caret Left', () => <IconComponents icon={"caret-left"}/>)
.add('Search Glass', () => <IconComponents icon={"search"}/>)
.add('Angle Left', () => <IconComponents icon={"angle-left"}/>)
.add('Angle Right', () => <IconComponents icon={"angle-right"}/>)
.add('Comment Dots', () => <IconComponents icon={"comment-dots"}/>)
.add('Comment Dots Regular', () => <IconComponents icon={['far', 'comment-dots']}/>)











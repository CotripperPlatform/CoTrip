import React from 'react';
import { storiesOf } from '@storybook/react';
import CommentBody from './CommentBody';

storiesOf('Comment', module)
  .add("Body", () => (
    <CommentBody />
  )
)

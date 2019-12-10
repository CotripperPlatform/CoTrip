import React from 'react';
import { storiesOf } from '@storybook/react';
import CommentBody from './CommentBody';
const body = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore v eritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit";
const date = "December 9";
const time = "10:08 am";
storiesOf('Comment', module)
  .add("Body", () => (
    <CommentBody body={body} date={date} time={time}/>
  )
)
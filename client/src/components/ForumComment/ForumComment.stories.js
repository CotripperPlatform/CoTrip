import React from 'react';
import ForumComment from './ForumComment';
import { storiesOf } from '@storybook/react';

storiesOf('ForumComment', module)
    .add("Default", () => 
    <ForumComment 
    momName="Lisa C."
    comment="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore v eritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit"
    date="August 9 6:10PM"
    />)
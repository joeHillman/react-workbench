import React from 'react';
import { storiesOf } from '@storybook/react';
import ReactPortal from '../components/ReactPortal';

storiesOf('Components', module)
  .add('ReactPortal', () => {
    return (
      <ReactPortal><p>The parent element should be <code>div#root</code></p></ReactPortal>
    );
});

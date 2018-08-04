import React from 'react';
import { storiesOf } from '@storybook/react';
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/ReactPortal.md";
import ReactPortal from '../components/ReactPortal';

storiesOf('Components', module)
  .add('ReactPortal', withNotes(Notes)(() => {
    return (
      <ReactPortal><p>The parent element should be <code>div#root</code></p></ReactPortal>
    );
}));

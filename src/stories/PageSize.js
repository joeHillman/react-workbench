import React from 'react';
import { storiesOf } from '@storybook/react';
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/PageSize.md";
import PageSize from '../components/Pagination/PageSize';

storiesOf('Components', module)
  .add('Pagination - Page Size', withNotes(Notes)(() => {
    return (
      <PageSize />
    );
}));

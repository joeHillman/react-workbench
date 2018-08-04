import React from 'react';
import { storiesOf } from '@storybook/react';
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/Button.md";
import Button from '../components/Button';

storiesOf('Components', module)
  .add('Button', withNotes(Notes)(() => {
    return (
      <div>
        <Button onClick={() => {console.log("Click")}} label="Secondary"/>
        <Button submit primaryStyle onClick={() => {console.log("Click")}} label="Primary"/>
      </div>
    );
}));

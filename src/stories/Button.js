import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/Button';

storiesOf('Components', module)
  .add('Button', () => {
    return (
      <div>
        <Button onClick={() => {console.log("Click")}} label="Secondary"/>
        <Button submit primaryStyle onClick={() => {console.log("Click")}} label="Primary"/>
      </div>
    );
});

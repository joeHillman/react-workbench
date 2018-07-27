import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ModalPortal from '../components/ModalPortal';

storiesOf('Components', module)
.add('ModalPortal', () => {
  return (
    <ModalPortal openLabel="Open Modal Portal" heading="Full Modal" confirmModal={action('Run Modal Confirm Function')}>The parent should be <code>div#root</code></ModalPortal>
  );
});

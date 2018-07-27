import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Modal from '../components/Modal';
import ReactPortal from '../components/ReactPortal';

storiesOf('Components', module)
  .add('Modal', () => {
    return (
      <div>
        <div>
          <Modal openLabel="Open Alert" confirmModal={action('Run Alert Confirm Function')} bodyString="Simple String Message"/>
        </div>
        <div style={{marginTop: "10px"}}>
          <Modal openLabel="Open Modal" heading="Full Modal" confirmModal={action('Run Modal Confirm Function')}>With Children or string</Modal>
        </div>
      </div>
    );
});

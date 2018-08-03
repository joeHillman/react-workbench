import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Tab from '../components/TabNavigation/Tab';

storiesOf('Components', module)
  .add('Tab', () => {
    return (
      <div>
        <Tab label="Tab1" onClick={action('Run onClick Function')} isActive={true}/>
        <Tab label="Tab2" onClick={action('Run onClick Function')} isActive={false}/>
        <Tab label="Tab3" onClick={action('Run onClick Function')} isActive={false}/>
      </div>
    );
});

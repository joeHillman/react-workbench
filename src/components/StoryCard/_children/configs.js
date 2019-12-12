import React, { Fragment } from 'react';

import Heading from './Heading';
import Overline from './Overline';
import HeadingOverline from './HeadingOverline';

// import utils for components

const CardConfig = {
  heading: (data) => <Heading content={data.headline.content}/>,
  overline: (data) => <Overline content={data.overline.content}/>,
  'heading-overline': (data) => <HeadingOverline content={data} />
}

export default CardConfig;

import React, { Component, Fragment } from "react";
import Heading from './Heading';
import Overline from './Overline';

class HeadingOverline extends Component {
  render() {
    const { content } = this.props;
    return (
      <Fragment>
      <Heading data={content} />
      <Overline data={content}/>
      </Fragment>
    );
  }
}

HeadingOverline.propTypes = {

}

export default HeadingOverline;

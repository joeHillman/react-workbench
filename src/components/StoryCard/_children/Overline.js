import React, { Component } from "react";
import { object } from 'prop-types'

class Overline extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>{data.overline.content}</div>
    );
  }
}

Overline.propTypes = {
  data: object
}

export default Overline;

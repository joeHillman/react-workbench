import React, { Component } from "react";
import { object } from "prop-types";

class Headline extends Component {
  render() {
    const { data } = this.props;
    return (
      <h1>{data.headline.content} {console.log(this.props)}</h1>
    );
  }
}

Headline.propTypes = {
  data: object
}

export default Headline;

import React, { Component, Fragment } from "react";
import { bool, string } from "prop-types";

class SingleComment extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { content, date, isBlocked } = this.props;
    return (<Fragment>
      {!isBlocked ?
        <div>{content}: {date}</div> :
        <div>This comment has been blocked.</div>
      }
      </Fragment>
    );
  }
}

SingleComment.propTypes = {
  content: string,
  date: string,
  isBlocked: bool,
}

export default SingleComment;

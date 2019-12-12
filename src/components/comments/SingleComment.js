import React, { Fragment } from "react";
import { bool, string } from "prop-types";

const SingleComment = ({ content, date, isBlocked }) => {
    return (<Fragment>
      {!isBlocked ?
        <div className="comments__body">{content}: {date}</div> :
        <div>This comment has been blocked.</div>
      }
      </Fragment>
    );
}

SingleComment.propTypes = {
  content: string,
  date: string,
  isBlocked: bool,
}

export default SingleComment;

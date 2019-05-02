import React, { Component } from "react";
import CommentActions from "./CommentActions";
import SingleComment from "./SingleComment";
import { array, bool, func, number, string } from "prop-types";

class CommentBody extends Component {
  render() {
    const {
      commentsArray,
      content,
      date,
      likeCount,
      isBlocked,
      isReported,
      role,
      // handleReplySubmit,
      // handleBlockSubmit,
      // handleReportSubmit,
      commentKey,
      parentKey,
      isReply
    } = this.props;
    return (
      <div>
        <SingleComment
          content={content}
          date={date}
          isBlocked={isBlocked}
        />
        <CommentActions
          role={role}
          likeCount={likeCount}
          // handleBlockSubmit={handleBlockSubmit}
          // handleReportSubmit={handleReportSubmit}
          commentKey={commentKey}
          parentKey={parentKey}
          isReply={isReply}
          isBlocked={isBlocked}
          isReported={isReported}
        />
      </div>
    );
  }
}

CommentBody.propTypes = {
   commentsArray: array,
   commentKey: number,
   content: string,
   date: string,
   handleBlockSubmit: func,
   handleReplySubmit: func,
   handleReportSubmit: func,
   isBlocked: bool,
   isReply: bool,
   isReported: bool,
   likeCount: number,
   parentKey: number,
   role: string,
}

export default CommentBody;

import React, { Component, PureComponent } from "react";
import SingleComment from "./SingleComment";
import CommentBody from "./CommentBody";
import { array, func, string } from "prop-types";
import { CommentsConsumer } from "./CommentsContext";

class CommentList extends PureComponent {

  constructCommentList = (commentContext) => {
    let commentList = commentContext.commentsArray.map((item, index) => {
      let commentMarker = "comment" + index;
      return (
          <div>
            <CommentBody
              key={'comment' + index}
              role={commentContext.role}
              content={item.content}
              likeCount={item.likeCount}
              date={item.date}
              handleReplySubmit={commentContext.handleReplySubmit}
              // handleBlockSubmit={handleBlockSubmit}
              // handleReportSubmit={handleReportSubmit}
              commentKey={item.key}
              parentKey={item.parent}
              isBlocked={item.blocked}
              isReported={item.reported}
            />
          <div>
            {item.replies.map((item, index) => {
              return (
                <CommentBody
                  key={commentMarker + 'reply' + index}
                  role={commentContext.role}
                  content={item.content}
                  likeCount={item.likeCount}
                  date={item.date}
                  // handleBlockSubmit={handleBlockSubmit}
                  // handleReportSubmit={handleReportSubmit}
                  commentKey={item.key}
                  parentKey={item.parent}
                  isReply={true}
                  isBlocked={item.blocked}
                  isReported={item.reported}
                />
              )
            })}
          </div>
        </div>
      )
    });
    return commentList;
  }

  render() {
    return (
      <CommentsConsumer>
      {(context) => { return (
        <div>{this.constructCommentList(context)}</div>
      )}}
      </CommentsConsumer>
    );
  }
}

CommentList.propTypes = {
  commentsArray: array,
  handleBlockSubmit: func,
  handleReplySubmit: func,
  handleReportSubmit: func,
  role: string,
}

export default CommentList;

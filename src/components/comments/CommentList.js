import React from "react";
import SingleComment from "./SingleComment";
import CommentBody from "./CommentBody";
import { array, string } from "prop-types";
import { CommentsConsumer } from "./CommentsContext";

const CommentList = () => {

  const constructCommentList = (commentContext) => {
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

    return (
      <CommentsConsumer>
      {(context) => { return (
        <div>{constructCommentList(context)}</div>
      )}}
      </CommentsConsumer>
    );
}

CommentList.propTypes = {
  commentsArray: array,
  role: string,
}

export default CommentList;

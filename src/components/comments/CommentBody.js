import React from "react";
import CommentActions from "./CommentActions";
import SingleComment from "./SingleComment";
import { bool, number, string } from "prop-types";

const CommentBody = ({
  commentKey,
  content,
  date,
  handleLikeAction,
  isBlocked,
  isReply,
  isReported,
  likeCount,
  parentKey,
  role,
}) => {
  return (
    <div className={`comments__container${isReply ? "--reply" : ""} `}>
      <SingleComment
        content={content}
        date={date}
        isBlocked={isBlocked}
      />
      <CommentActions
        role={role}
        likeCount={likeCount}
        commentKey={commentKey}
        parentKey={parentKey}
        isReply={isReply}
        isBlocked={isBlocked}
        isReported={isReported}
        handleLikeAction={handleLikeAction}
      />
    </div>
  );
}

CommentBody.propTypes = {
   commentKey: number,
   content: string,
   date: string,
   isBlocked: bool,
   isReply: bool,
   isReported: bool,
   likeCount: number,
   parentKey: number,
   role: string,
}

export default CommentBody;

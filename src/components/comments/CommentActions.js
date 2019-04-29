import React, { Component } from "react";
import ActionsForm from "./ActionsForm";
import { bool, func, number, string } from "prop-types";

class CommentActions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeability: null,
      likeCountChange: null,
      actionState: null,
      likeCount: this.props.likeCount,
    }
  }

  handleLike = () => {
    this.setState(prevState => ({
      likeability: true,
      likeCountChange: 1,
      likeCount: Number(prevState.likeCount) + 1,
    }))
  }

  handleDislike = () => {
    this.setState(prevState => ({
      likeability: false,
      likeCountChange: -1,
      likeCount: Number(prevState.likeCount) - 1,
    }))
  }

  handleReply = () => {
    this.setState({
      actionState: "reply",
    })
  }

  handleBlock = () => {
    this.setState({
      actionState: "block",
    })
  }

  handleReport = () => {
    this.setState({
      actionState: "report",
    })
  }

  handleCancel = () => {
    this.setState({
      actionState: null
    })
  }

  render() {
    const { handleReplySubmit, commentKey, parentKey, isBlocked, role, handleReportSubmit, isReported, isReply, handleBlockSubmit } = this.props;
    return (
      <div>
        <button type="button" onClick={this.handleDislike} disabled={(this.state.likeability === null) || this.state.likeability ? false : true}>-</button>
        <span>{this.state.likeCount}</span>
        <button type="button" onClick={this.handleLike} disabled={(this.state.likeability === null) || !this.state.likeability ? false : true}>+</button>
        {!isReply && !isBlocked && <button type="button" onClick={this.handleReply}>Reply</button>}
        {role === "moderator" && <button type="button" onClick={this.handleBlock}>Block</button>}
        <button type="button" onClick={this.handleReport}>Report</button>
        {this.state.actionState === "reply" ?
          <ActionsForm
            handleCancel={this.handleCancel}
            name="replyForm"
            defaultValue="Say something meaningful and witty!"
            id="replyForm"
            label="Reply Form"
            handleReplySubmit={handleReplySubmit}
            commentKey={commentKey}
            parentKey={parentKey}
            isBlocked={isBlocked}
            role={role}
          /> : null}
        {this.state.actionState === "report" ?
          <ActionsForm
            handleCancel={this.handleCancel}
            name="reportForm"
            defaultValue="Why are we reporting?"
            id="reportForm"
            label="Report Form"
            handleReportSubmit={handleReportSubmit}
            commentKey={commentKey}
            parentKey={parentKey}
            isBlocked={isBlocked}
            isReported={isReported}
            role={role}
          /> : null}
        {this.state.actionState === "block" ?
          <ActionsForm
            handleCancel={this.handleCancel}
            name="blockForm"
            defaultValue="Reason..."
            id="blockForm"
            label="Block Form"
            handleBlockSubmit={handleBlockSubmit}
            commentKey={commentKey}
            parentKey={parentKey}
            isBlocked={isBlocked}
            role={role}
          /> : null}
      </div>
    );
  }
}

CommentActions.propTypes = {
  commentKey: number,
  handleBlockSubmit: func,
  handleReplySubmit: func,
  handleReportSubmit: func,
  isBlocked: bool,
  isReply: bool,
  isReported: bool,
  parentKey: number,
  role: string,
}

export default CommentActions;

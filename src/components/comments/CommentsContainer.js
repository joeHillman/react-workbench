import React, { Component } from "react";
import SortControls from "./SortControls";
import CommentList from "./CommentList";
import { ReplySkeleton } from "./ReplySkeleton";
import { array, string } from "prop-types";
import { CommentsProvider } from "./CommentsContext";

class CommentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsHidden: true,
      sortBy: "newest",
      commentsArray: null,
      role: ""
    }
  }

  componentWillMount() {
    this.setState({ commentsArray: this.props.commentsArray, role: this.props.role })
  }

 buildContextObj = () => {
   return {
     commentsArray: this.state.commentsArray,
     handleReplySubmit: this.handleReplySubmit,
     handleBlockSubmit: this.handleBlockSubmit,
     handleReportSubmit: this.handleReportSubmit,
     role: this.state.role
   }
 }

  handleShowHide = () => {
    this.setState(prevState => ({
      commentsHidden: !prevState.commentsHidden,
    }))
  }

  handleReplySubmit = (key, data) => {
    let commentsCopy = this.props.commentsArray.slice();
    let updatedComments = (arr) => {
      arr.map(item => {
        if(item.key === key) {
          console.log(item.replies.length, "Replies");
          item.replies.push({...ReplySkeleton, ...{content: data, key:item.replies.length , date: new Date().toDateString()}});
        }
      })
      return arr;
    }
    this.setState(() => ({ commentsArray: updatedComments(commentsCopy) }), console.log(this.state, "state"))
  }

  handleBlockSubmit = (parent, key, data) => {
    let commentsCopy = this.state.commentsArray.slice();
    let updatedComments = (arr) => {
      arr.map(comment => {
        if(parent === null && comment.key === key) {
          comment.blocked = !comment.blocked;
          comment.blockedWhy = data
        } else {
          comment.replies.map(reply => {
            if(reply.parent === parent && reply.key === key) {
              reply.blocked = !reply.blocked;
              reply.blockedWhy = data;
            }
          })
        }
      })
      return arr;
    }
    this.setState({ commentsArray: updatedComments(commentsCopy) })
  }

  handleReportSubmit = (parent, key, data) => {
    let commentsCopy = this.state.commentsArray.slice();
    let updatedComments = (arr) => {
      arr.map(item => {
        if(parent === null && item.key === key) {
          item.reported = true;
          item.reportedWhy = data
        } else {
          item.replies.map((item, index) => {
            if(item.parent === parent && item.key === key) {
              item.reported = true;
              item.reportedWhy = data
            }
          })
        }
      })
      return arr;
    }
    this.setState({ commentsArray: updatedComments(commentsCopy) })
  }

  handleSort = (e) => {
    let commentsArrayCopy = this.props.commentsArray;
    switch(e.target.name) {
      case "mostLiked" : this.setState({ sortBy: "mostLiked", commentsArray: commentsArrayCopy.sort((a, b) => { return b.likeCount - a.likeCount})})
      break;
      case "newest" : this.setState({ sortBy: "newest", commentsArray: commentsArrayCopy.sort((a, b) => { let newDateA = new Date(a.date); let newDateB = new Date(b.date); return newDateB - newDateA})})
      break;
      case "oldest" : this.setState({ sortBy: "oldest", commentsArray: commentsArrayCopy.sort((a, b) => { let newDateA = new Date(a.date); let newDateB = new Date(b.date); return newDateA - newDateB})})
      break;
      default : this.setState({ sortBy: "newest", commentsArray: byNewest })
    }
  }

  render() {
    return (
      <div>
        <SortControls onClick={this.handleSort} activeSort={this.state.sortBy}/>
        <button type="button" onClick={this.handleShowHide}>{this.state.commentsHidden ? "Show Comments" : "Hide Comments"}</button>
        {this.state.commentsHidden
          ? <CommentsProvider value={this.buildContextObj()}>
              <CommentList role={this.state.role} handleReplySubmit={this.handleReplySubmit} handleBlockSubmit={this.handleBlockSubmit} handleReportSubmit={this.handleReportSubmit}/>
            </CommentsProvider>
          : null}
      </div>
    );
  }
}

CommentsContainer.propTypes = {
  commentsArray: array,
  role: string,
}

export default CommentsContainer;

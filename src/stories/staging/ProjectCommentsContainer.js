import React, { Component } from "react";
import CommentActions from "../../components/comments/CommentActions";
import SortControls from "../../components/comments/SortControls";

class ProjectCommentsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      commentsHidden: true,
      sortBy: "newest",
    }
  }

  handleShowHide = () => {
    this.setState(prevState => ({
      commentsHidden: !prevState.commentsHidden,
    }))
  }

  handleSort = (e) => {
    switch(e.target.name) {
      case "newest" : this.setState({ sortBy: "newest" })
      break;
      case "oldest" : this.setState({ sortBy: "oldest" })
      break;
      case "mostLiked" : this.setState({ sortBy: "mostLiked" })
      break;
      default : this.setState({ sortBy: "newest" })
    }
  }

  render() {
    const { children } = this.props;
    return (
      <div>Comment container
        {/*this.state.commentsHidden ? children : null*/}
        <SortControls onClick={this.handleSort} activeSort={this.state.sortBy}/>
        <button type="button" onClick={this.handleShowHide}>{this.state.commentsHidden ? "Show Comments" : "Hide Comments"}</button>
        <CommentActions likeCount="10"/>
      </div>
    );
  }
}

export default ProjectCommentsContainer;

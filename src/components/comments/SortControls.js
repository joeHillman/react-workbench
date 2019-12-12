import React, { Component } from "react";

class SortControls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { activeSort, onClick } = this.props;
    return (
      <div className="pure-button-group">
        <button className="pure-button" type="button" onClick={onClick} name="newest">Newest (Now sorting by {activeSort})</button>
        <button className="pure-button" type="button" onClick={onClick} name="oldest">Oldest (Now sorting by {activeSort})</button>
        <button className="pure-button" type="button" onClick={onClick} name="mostLiked">Most Liked (Now sorting by {activeSort})</button>
      </div>
    );
  }
}

SortControls.propTypes = {

}

export default SortControls;

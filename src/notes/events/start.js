import React, { Component } from "react";
import ReactDOM from 'react-dom';

class Start extends Component {
  constructor(props){
    super(props);
    this.state = {
      isTabbingBackwards: false,
      isOpen: false,
      firstLast: null,
    }
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClickAway, false);
  }

  componentDidUpdate() {
    if(this.state.isOpen === false && this.state.isTabbingBackwards === true) {
      this.setState((prevState) => ({
        isTabbingBackwards: !prevState.isTabbingBackwards
      }))
    }
  }

  handleKeyDown = (e) => {
    console.log(e.keyCode, "TAB DOWN");
    if(e.keyCode === 16) {
      this.setState((prevState) => ({
        isTabbingBackwards: !prevState.isTabbingBackwards,
      }));
    }
  }

  handleFocus = (e) => {
    console.log(e.target.classList, "ClassList");
    if(e.target.classList.value.includes("first")) {
      this.setState({
        firstLast: "first"
      })
      if(this.state.isOpen === false) {
        this.setState((prevState) => ({
          isOpen: !prevState.isOpen
        }))
      }
    } else if (e.target.classList.value.includes("last")) {
      this.setState({
        firstLast: "last"
      })
      if(this.state.isOpen === false) {
        this.setState((prevState) => ({
          isOpen: !prevState.isOpen
        }))
      }
    } else {
      this.setState({
        firstLast: null,
        isOpen: true
      })
    }
  }

  handleKeyUp = (e) => {
    if(e.keyCode === 16) {
      this.setState((prevState) => ({
        isTabbingBackwards: !prevState.isTabbingBackwards,
      }));
    }
  }

  handleBlur = (e) => {
    if(
      // (this.state.isTabbingBackwards === false && this.state.firstLast === "last") ||
        (this.state.isTabbingBackwards === true && this.state.firstLast === "first" )) {
      this.setState((prevState) => ({
        isOpen: false,
      }))
    }
  }

  handleClickAway = (e) => {
    console.log(e);
    console.log(this);
    console.log(this.children);

    const region = ReactDOM.findDOMNode(this);
    console.log(region, "REGION");
    console.log(region.contains(e.target));
  }

  render() {
    return (
      <div className="PARENT">

        <div className="REGION">
          <button type="button" class="button one first" onFocus={this.handleFocus} onBlur={this.handleBlur} onKeyDown={this.handleKeyDown} onKeyUp={this.handleKeyUp}>one</button>
          <button type="button" class="button two" onFocus={this.handleFocus} onBlur={this.handleBlur} onKeyDown={this.handleKeyDown} onKeyUp={this.handleKeyUp}>two</button>
          <button type="button" class="button three last" onFocus={this.handleFocus} onBlur={this.handleBlur} onKeyDown={this.handleKeyDown} onKeyUp={this.handleKeyUp}>three</button>
        </div>
      </div>

    )
  }
}

export default Start;

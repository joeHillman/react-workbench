import React, { Component } from "react";
import PropTypes, { bool, func, string } from "prop-types";
import Button from "./Button";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      scriptedOpen: false
    }
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.openWithScript !== prevState.scriptedOpen) {
      return { isOpen: true }
    }
  }

  toggleOpen = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  handleOpen = () => {
    this.toggleOpen();
    if(this.props.handleOpen){
      this.props.handleOpen();
    }
  }

  handleBackDrop = () => {
    this.toggleOpen();
    if(this.props.handleBackDrop){
      this.props.handleBackDrop();
    }
  }

  handleCancel = () => {
    this.toggleOpen();
    if(this.props.handleCancel){
      this.props.handleCancel();
    }
  }

  lastModalStep = () => {
    if(this.props.confirmModal){
      this.props.confirmModal();
    }
    this.toggleOpen();
  }

  render() {
    let { bodyString, cancelString, children, confirmModal, confirmString, heading, onlyNotify, openWithScript, openLabel } = this.props;

    const modalContent = () => {
      return (
        <div className="c-modal__container">
          <div className="c-modal__backdrop" onClick={this.handleBackDrop}></div>
          <div className="c-modal__content">
            {heading ?
              <div className="c-modal__title">
                <h3 className="c-modal__heading">{heading}</h3>
              </div>
              : null
            }
            <p className="c-modal__body">
              {bodyString ? bodyString : children}
            </p>
            <div className="c-modal__buttons">
              <Button label={cancelString || "Cancel"} onClick={this.handleCancel}/>
              {!onlyNotify ?
                <Button primaryStyle label={confirmString || "Confirm"} onClick={this.lastModalStep}/>
                : null
              }
            </div>
          </div>
        </div>
      )
    };

    return (
      <div>
        <Button primaryStyle label={openLabel} onClick={this.handleOpen}/>
        {this.state.isOpen === true ? modalContent() : null}
      </div>
    );
  }
}

Modal.propTypes = {
  bodyString: string,
  cancelString: string,
  confirmModal: func,
  confirmString: string,
  handleBackDrop: func,
  handleCancel: func,
  heading: string,
  onlyNotify: bool,
  openLabel: string,
  openWithScript: bool
}

export default Modal;

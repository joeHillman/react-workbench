import React, { Component } from "react";
import PropTypes, { func, string } from "prop-types";
import Button from "./Button";
import ReactPortal from "./ReactPortal";

class ModalPortal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.toggleOpen = this.toggleOpen.bind(this);
    this.lastModalStep = this.lastModalStep.bind(this);
  }

  toggleOpen = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }))
  }

  lastModalStep = () => {
    this.props.confirmModal();
    this.toggleOpen();
  }

  render() {
    let { bodyString, children, heading, openLabel } = this.props;

    const modalContent = () => {
      return (
        <div className="modal__container">
          <div className="modal__backdrop" onClick={this.toggleOpen}></div>
          <div className="modal__content">
            {heading ?
              <div className="modal__title">
                <h3 className="modal__heading">{heading}</h3>
              </div>
              : null
            }
            <p className="modal__body">
              {bodyString ? bodyString : children}
            </p>
            <div className="modal__buttons">
              <Button label="Cancel" onClick={this.toggleOpen}/>
              <Button primaryStyle label="Proceed" onClick={this.lastModalStep}/>
            </div>
          </div>
        </div>
      )
    };

    return (
      <div>
        <Button primaryStyle label={openLabel} onClick={this.toggleOpen}/>
        {this.state.isOpen === true ? <ReactPortal>{modalContent()}</ReactPortal> : null}
      </div>
    );
  }
}

ModalPortal.propTypes = {
  bodyString: string,
  confirmModal: func,
  heading: string,
  openLabel: string
}

export default ModalPortal;

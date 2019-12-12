import React, { PureComponent } from "react";
import PropTypes, { func, string } from "prop-types";
import Button from "./Button";
import ReactPortal from "./ReactPortal";

class ModalPortal extends PureComponent {
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

  remoteDisable = () => {
    return this.props.remoteDisable || false
  }

  render() {
    let { bodyString, children, heading, openLabel, proceedLabel } = this.props;

    const modalContent = () => {
      return (
        <div className="c-modal__container">
          <div className="c-modal__backdrop" onClick={this.toggleOpen}></div>
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
              <Button label="Cancel" onClick={this.toggleOpen}/>
              <Button primaryStyle label={proceedLabel || "Proceed"} onClick={this.lastModalStep} disabled={this.remoteDisable()}/>
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

import React from "react";
import classNames from "classnames";
import PropTypes, {bool, func, string} from "prop-types";

const Button = ({ label, onClick, primaryStyle, submitButton }) => {
  let buttonClasses = ["pure-button"];
  let buttonType;

  if( !submitButton ) {
    buttonType = "button"
  } else {
    buttonType = "submit"
  }

  if( primaryStyle ) {
    buttonClasses.push("pure-button-primary")
  }

  return (
    <button className={classNames(buttonClasses)} type={buttonType} onClick={onClick}>{label}</button>
  );
}

Button.propTypes = {
  label: string.isRequired,
  onClick: func,
  primaryStyle: bool,
  submitButton: bool
}

export default Button;

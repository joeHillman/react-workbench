import React from "react";
import PropTypes, { bool, func, string } from "prop-types";

const Tab = ({ isActive, label, onClick, isFirst, isLast, onKeyDown, onKeyUp }) => {
  return (
    <button className={`c-tab ${isActive ? "c-tab--is-active" : ""} ${isFirst ? "c-tab--is-first" : ""} ${isLast ? "c-tab--is-last" : ""}`} type="button" onClick={onClick} onKeyDown={onKeyDown} onKeyUp={onKeyUp}>{label}</button>
  )
}

Tab.propTypes = {
  isActive: bool,
  label : string,
  onClick: func,
  isFirst: bool,
  isLast: bool,
  onKeyDown: func
}

export default Tab;

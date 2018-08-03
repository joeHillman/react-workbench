import React, { Component } from "react";
import PropTypes, { bool, func, string } from "prop-types";

const Tab = ({ isActive, label, onClick }) => {
  return (
    <button className={`c-tab ${isActive ? "c-tab--is-active" : ""}`} type="button" onClick={onClick}>{label}</button>
  )
}

Tab.propTypes = {
  isActive: bool,
  label : string,
  onClick: func
}

export default Tab;

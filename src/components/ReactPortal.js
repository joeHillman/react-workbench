import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
const AppRoot = document.getElementById("root");

const ReactPortal = ({ children }) => {
  return (
    ReactDOM.createPortal(children, AppRoot)
  );
}

export default ReactPortal;

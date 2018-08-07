import React from "react";
import PropTypes from "prop-types";
import { func, string } from "prop-types";

const Page = ({ isActive, label, onClick }) => {
  return (
    <button className={`c-pager__button pure-button ${isActive ? "c-pager__button--is-active" : ""}`} type="button" onClick={onClick}>{label}</button>
  );
}

Page.propType = {
  label: string.isRequired,
  onClick: func
}

export default Page;

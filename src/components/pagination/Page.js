import React from "react";
import PropTypes, { bool, func, string } from "prop-types";

const Page = ({ isActive, label, onClick }) => {
  return (
    <button className={`pure-button c-pager__button ${isActive ? "c-pager__button--is-active" : ""}`} type="button" onClick={onClick}>{label}</button>
  );
}

Page.propType = {
  isActive: bool,
  label: string.isRequired,
  onClick: func
}

export default Page;

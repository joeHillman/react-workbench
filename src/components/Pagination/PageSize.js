import React from "react";
import PropTypes, { array, func } from "prop-types";

const PageSize = ({ onChange, pageSizes }) => {
  const pageSizeOptions = (arr) => {
    const theseOptions = arr.map((item, index) => {
      console.log(item);
      return (
        <option key={index} value={item}>{item}</option>
      );
    });
    return theseOptions;
  }
  return (
    <div className="c-page-size">
      <label htmlFor="page-size">Page Size: </label>
      <select id="page-size" onChange={onChange}>
        {pageSizeOptions(pageSizes)}
      </select>
    </div>
  );
}

PageSize.propTypes = {
  onChange: func,
  pageSizes: array.isRequired
}

export default PageSize;

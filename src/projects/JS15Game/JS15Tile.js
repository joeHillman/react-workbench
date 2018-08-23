import React from "react";
import PropTypes, { number } from "prop-types";

const JS15Tile = (props) => {
  const { classes, dataPosition, tileNumber } = props;

  return (
    <div className={`js-15-tile ${classes}`} data-position={dataPosition}><span className="content">{tileNumber}</span></div>
  );
}

JS15Tile.propTypes = {
  tileNumber: number.isRequired
}

export default JS15Tile;

import React, { Component } from "react";

import Button from "../../components/Button";
import JS15Tile from "./JS15Tile";

const JS15Board = (props) => {
  const { children, emptyPosition, puzzleArray } = props;

  const createPuzzle = (obj) => {
   let thisPuzzle = Object.keys(obj).map((item, index) => {
     return (<JS15Tile classes={`${(emptyPosition === index) ? "hide" : ""}`} dataPosition={index} key={index} tileNumber={item}/>);
   });
   return thisPuzzle;
  }

  return (
    <div className="js-15-board">
      {createPuzzle(puzzleArray)}
    </div>
  );
}

export default JS15Board;

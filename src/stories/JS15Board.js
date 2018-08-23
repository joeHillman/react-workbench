import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/JS15Board.md";
import JS15Board from "../projects/JS15Game/JS15Board";

import { JS15Puzzle } from "./TestData/JS15Data";

storiesOf("Projects/JS 15 Game", module)
  .add("JS15 Board", withNotes(Notes)(() => {
    return (
      <div>
        <h3>A static board for mapping over the tiles.</h3>
        <JS15Board puzzleArray={JS15Puzzle}/>
      </div>
    );
}));

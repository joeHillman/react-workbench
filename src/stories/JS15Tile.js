import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/JS15Tile.md";
import JS15Tile from "../projects/JS15Game/JS15Tile";

import { JS15Puzzle } from "./TestData/JS15Data";

storiesOf("Projects/JS 15 Game", module)
  .add("JS15 Tile", withNotes(Notes)(() => {
    return (
      <div>
        <JS15Tile tileNumber={JS15Puzzle[0]}/>
      </div>
    );
}));

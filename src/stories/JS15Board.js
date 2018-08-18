import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/JS15Board.md";
import JS15Board from "../projects/JS15Game/JS15Board";

storiesOf("Projects/JS 15 Game", module)
  .add("JS15 Board", withNotes(Notes)(() => {
    return (
      <div>
        <h3>A 15 game that is under active development.</h3>
        <JS15Board>
          Children
        </JS15Board>
        <div>
          <p>TODO's</p>
          <ul>
            <li>State for showing instruction tooltips over buttons.</li>
            <li>Port functions over from my original vanilla JS game.</li>
            <li>Need a randomizer function from lodash/underscore or elsewhere.</li>
            <li>Build and style board and tiles, currently there are just shell components.</li>
            <li>Controls for moving the empty tile around.</li>
            <li>Keyboard access for controls.</li>
            <li>Listeners for keyboard access.</li>
          </ul>
          <p>Completed</p>
          <ul>
            <li>States for paused, won, and new</li>
            <li>Controls for paused and testing for a win.</li>
            <li>Move counter state and is wired up with reset.</li>
            <li>String swaps for games state, default is incorrect currently but is there to test the win function.</li>
          </ul>
        </div>
      </div>
    );
}));

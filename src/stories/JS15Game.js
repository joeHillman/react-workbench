import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/JS15Game.md";
import JS15Game from "../projects/JS15Game/JS15Game";

storiesOf("Projects/JS 15 Game", module)
  .add("JS15 Game", withNotes(Notes)(() => {
    return (
      <div>
        <h3>A completed 15 game.</h3>
        <JS15Game />
      </div>
    );
}));

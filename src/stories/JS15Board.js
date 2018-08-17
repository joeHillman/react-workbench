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
        <JS15Board>
          Children
        </JS15Board>
      </div>
    );
}));

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/MouseTracker.md";
import MouseTracker from "../notes/renderProps/MouseTracker";

storiesOf("Notes", module)
  .add("Render Props", withNotes(Notes)(() => {
    return (
      <div>
        <MouseTracker/>
      </div>
    );
}));

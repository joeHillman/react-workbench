import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/Context.md";
import Start from "../notes/events/start";

storiesOf("Notes", module)
  .add("Events", withNotes(Notes)(() => {
    return (
      <div>
        <Start/>
      </div>
    );
}));

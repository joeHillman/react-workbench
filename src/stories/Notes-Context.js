import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/Context.md";
import { ThemedButton, Toolbar, App } from "../notes/context/themeToggle";

storiesOf("Notes", module)
  .add("Context", withNotes(Notes)(() => {
    return (
      <div>
        <App/>
      </div>
    );
}));

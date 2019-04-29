import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/ThemedApp.md";
import ThemeApp from "../demonstrations/contextThemeSwitcher/ThemeApp";

storiesOf("Projects/ThemeApp", module)
  .add("ThemedApp", withNotes(Notes)(() => {
    return (
      <div>
        <ThemeApp/>
      </div>
    );
}));

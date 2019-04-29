import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/ThemedApp.md";
import ThemedSelectList from "../demonstrations/contextThemeSwitcher/ThemedSelectList";

storiesOf("Projects/ThemeApp", module)
  .add("ThemedSelectList", withNotes(Notes)(() => {
    return (
      <div>
        <ThemedSelectList/>
      </div>
    );
}));

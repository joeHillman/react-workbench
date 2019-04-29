import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/ThemedApp.md";
import ThemedButton from "../demonstrations/contextThemeSwitcher/ThemedButton";

storiesOf("Projects/ThemeApp", module)
  .add("ThemedButton", withNotes(Notes)(() => {
    return (
      <div>
        <ThemedButton/>
      </div>
    );
}));

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/Hooks.md";
import StateHook from "../notes/hooks/StateHook";

storiesOf("Notes", module)
  .add("React Hooks", withNotes(Notes)(() => {
    return (
      <div>
        <StateHook/>
      </div>
    );
}));

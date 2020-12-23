
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/FetchModule.md";
import FetchModule from "../notes/fetch/FetchModule";

storiesOf("Notes", module)
  .add("Fetch Module", withNotes(Notes)(() => {
    return (
      <div>
        <FetchModule/>
      </div>
    );
}));

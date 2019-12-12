import React from "react";
import { storiesOf } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/AxiosGet.md";
import FindAndLookup from "../notes/findAndLookup";

storiesOf("Notes", module)
  .add("Find and Lookup", withNotes(Notes)(() => {
    return (
      <div>
        <FindAndLookup/>
      </div>
    );
}));

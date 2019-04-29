import React from "react";
import { storiesOf } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";

// TODO: Notes
import Notes from "./markdown/PagerContainer.md";
import SortControls from "../components/comments/SortControls";


storiesOf("Components/Comments", module)
  .add("Comments - Sort Controls", withNotes(Notes)(() => {
    return (
      <div>
        <SortControls />
      </div>
    );
}));

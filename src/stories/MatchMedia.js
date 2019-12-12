import React from "react";
import { storiesOf } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";

// TODO: Notes
import Notes from "./markdown/PagerContainer.md";
import MatchMedia from "../demonstrations/MatchMedia/MatchMedia";

storiesOf("Demonstrations/Match Media", module)
  .add("Demonstrations - Match Media", withNotes(Notes)(() => {
    return (
      <div>
        <MatchMedia />
      </div>
    );
}));

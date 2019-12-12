import React from "react";
import { storiesOf } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";

// TODO: Notes
import Notes from "./markdown/PagerContainer.md";
import MorseCode from "../components/MorseCode";

storiesOf("Components", module)
  .add("Morse Code - Test", withNotes(Notes)(() => {
    return (
      <MorseCode />
    );
}));

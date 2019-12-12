import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/Context.md";
import SelectGameForm from "../projects/VirtualGamingHall/Components/SelectGameForm";

storiesOf("Gaming Hall", module)
  .add("Select Game Form", withNotes(Notes)(() => {
    return (
      <div>
        <SelectGameForm/>
      </div>
    );
}));

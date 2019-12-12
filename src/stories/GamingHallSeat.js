import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/Context.md";
import Seat from "../projects/VirtualGamingHall/Seat";

storiesOf("Gaming Hall", module)
  .add("Seat", withNotes(Notes)(() => {
    return (
      <div>
        <Seat name="Joe" token="black"/>
      </div>
    );
}));

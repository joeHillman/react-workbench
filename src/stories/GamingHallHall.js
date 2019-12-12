import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/Context.md";
import Hall from "../projects/VirtualGamingHall/Hall";

storiesOf("Gaming Hall", module)
  .add("Hall", withNotes(Notes)(() => {
    return (
      <div>
        <Hall/>
      </div>
    );
}));

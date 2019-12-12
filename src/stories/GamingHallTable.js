import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/Context.md";
import Table from "../projects/VirtualGamingHall/Table";

storiesOf("Gaming Hall", module)
  .add("Table", withNotes(Notes)(() => {
    return (
      <div>
        <Table/>
      </div>
    );
}));

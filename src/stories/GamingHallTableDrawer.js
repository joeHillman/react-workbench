import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/Context.md";
import TableDrawer from "../projects/VirtualGamingHall/Components/TableDrawer";
import { GameLibrary } from "../projects/VirtualGamingHall/Games/Library";

const risk = GameLibrary[0];

storiesOf("Gaming Hall", module)
  .add("Table Drawer", withNotes(Notes)(() => {
    return (
      <div>
        <TableDrawer gameDetails={risk}/>
      </div>
    );
}));

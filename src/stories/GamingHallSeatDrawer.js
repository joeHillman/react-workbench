import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/Context.md";
import SeatDrawer from "../projects/VirtualGamingHall/Components/SeatDrawer";
import { GameLibrary } from "../projects/VirtualGamingHall/Games/Library";

const risk = GameLibrary[0];

storiesOf("Gaming Hall", module)
  .add("Seat Drawer", withNotes(Notes)(() => {
    return (
      <div>
        <SeatDrawer playerObj={{name: "joe", token: "black"}}/>
      </div>
    );
}));

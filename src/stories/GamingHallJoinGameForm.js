import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/Context.md";
import JoinGameForm from "../projects/VirtualGamingHall/Components/JoinGameForm";
import { GameLibrary } from "../projects/VirtualGamingHall/Games/Library";

let handleJoiningPlayer = (obj) => {
  console.log("Join Player")
}

storiesOf("Gaming Hall", module)
  .add("Join Game Form", withNotes(Notes)(() => {

    return (
      <div>
        <JoinGameForm tokens={GameLibrary[0].tokens} joinPlayer={handleJoiningPlayer}/>
      </div>
    );
}));

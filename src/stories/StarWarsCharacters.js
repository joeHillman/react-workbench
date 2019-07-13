import React from "react";
import { storiesOf } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/CharacterForm.md";
import CharacterForm from "../projects/StarWarsCharacter/CharacterForm";

storiesOf("Projects/CharacterForm", module)
  .add("CharacterForm", withNotes(Notes)(() => {
    const onSubmitFailure = (e) => {
      e.preventDefault();
      document.body.classList.add("submission-failed")
    }

    return (
      <div>
      <CharacterForm/>
      <button className="character-submit toggle-failure" type="button" onClick={onSubmitFailure}>Toggle Failure State</button>
      </div>
    );
}));

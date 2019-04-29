import React from "react";
import { storiesOf } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";

// TODO: Notes
import Notes from "./markdown/PagerContainer.md";
import ActionsForm from "../components/comments/ActionsForm";


storiesOf("Components/Comments", module)
  .add("Comments - Actions Form", withNotes(Notes)(() => {
    return (
      <div>
        <ActionsForm name="replyForm" defaultValue="Default Label Here" id="replyForm" label="Reply Form"/>
      </div>
    );
}));

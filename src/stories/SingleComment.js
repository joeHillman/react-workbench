import React from "react";
import { storiesOf } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";

// TODO: Notes
import Notes from "./markdown/PagerContainer.md";
import SingleComment from "../components/comments/SingleComment";


storiesOf("Components/Comments", module)
  .add("Comments - Single Comment", withNotes(Notes)(() => {
    return (
      <div>
        <SingleComment content="This is a single solitary comment in all its glory!"/>
      </div>
    );
}));

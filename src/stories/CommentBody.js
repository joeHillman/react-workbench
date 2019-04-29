import React from "react";
import { storiesOf } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";

// TODO: Notes
import Notes from "./markdown/PagerContainer.md";
import CommentBody from "../components/comments/CommentBody";


storiesOf("Components/Comments", module)
  .add("Comments - Comment Body", withNotes(Notes)(() => {
    return (
      <div>
        <CommentBody content="Test Comment" likeCount="10"/>
      </div>
    );
}));

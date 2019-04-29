import React from "react";
import { storiesOf } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";

// TODO: Notes
import Notes from "./markdown/PagerContainer.md";
import CommentActions from "../components/comments/CommentActions";


storiesOf("Components/Comments", module)
  .add("Comments - Comment Actions", withNotes(Notes)(() => {
    return (
      <div>
        <CommentActions likeCount={Number(10)} />
      </div>
    );
}));

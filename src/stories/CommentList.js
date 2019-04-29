import React from "react";
import { storiesOf } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";

import { comments } from "./TestData/Comments";

// TODO: Notes
import Notes from "./markdown/PagerContainer.md";
import CommentList from "../components/comments/CommentList";


storiesOf("Components/Comments", module)
  .add("Comments - Comment List", withNotes(Notes)(() => {
    return (
      <div>
        <CommentList commentsArray={comments} />
      </div>
    );
}));

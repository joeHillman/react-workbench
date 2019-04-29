import React from "react";
import { storiesOf } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";

import CommentActions from "../components/comments/CommentActions";
import SortControls from "../components/comments/SortControls";

import { comments } from "./TestData/Comments";

// TODO: Notes
import Notes from "./markdown/PagerContainer.md";
import CommentsContainer from "../components/comments/CommentsContainer";


storiesOf("Components/Comments", module)
  .add("Comments - Comments Container", withNotes(Notes)(() => {
    return (
      <div>
        <CommentsContainer commentsArray={comments} role="moderator"/>
      </div>
    );
}));

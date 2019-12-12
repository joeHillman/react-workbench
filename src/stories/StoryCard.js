import React from "react";
import { storiesOf } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";

// TODO: Notes
import Notes from "./markdown/PagerContainer.md";
import StoryCard from "../components/StoryCard/StoryCard";


storiesOf("Components/StoryCard", module)
  .add("StoryCard - StoryCard", withNotes(Notes)(() => {
    return (
      <div>
        <StoryCard />
      </div>
    );
}));

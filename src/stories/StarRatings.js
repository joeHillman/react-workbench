import React from "react";
import { storiesOf } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";

// TODO: Notes
import Notes from "./markdown/PagerContainer.md";
import StarRatings from "../components/StarRatings";


storiesOf("Components", module)
  .add("Components - Star Ratings", withNotes(Notes)(() => {
    return (
      <div>
        <StarRatings stars="3.4"/>
      </div>
    );
}));

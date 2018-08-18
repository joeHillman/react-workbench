import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Welcome", module)
  .add("Welcome", () => {
    return (
      <div>
        <h3>This is my storybook for housing completed, in progress works and notes surrounding React.</h3>
        <p>Components will house largely completed pieces. It will show both static pieces for development purposes and a folder for demonstrations if it's a larger component like pagination, using those static pieces.</p>
        <p>Projects will house larger works but will likely stop there. Anything larger than that would likely require it's own repository.</p>
        <p>Notes will contain just demo examples from the wild and other things for my own sake.</p>
        <div>
        <p>If you haven't seen a storybook before, note below that there are a few tabs made available. These are for various plugins that are available for this ecosystem.</p>
        <ul>
          <li>Action Logger - If used in the story it will routes function output to this panel.</li>
          <li>Knobs - A plugin for development purposes. If used on the story you can set it up to test various string lengths and pass options to the component under test.</li>
          <li>Notes - If used, you can find a description of the component or demonstration as well a link to the source code that drives it. There are notes provided on almost all of these stories.</li>
          <li>Specifications - This is to author and run tests inside the story. There are only a few of these that have them currently and I'm considering just authoring tests as normal and including in the src directory.</li>
        </ul>
        </div>
      </div>
    );
});

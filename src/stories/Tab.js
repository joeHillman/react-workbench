import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/Tab.md";
import Tab from "../components/tabNavigation/Tab";

storiesOf("Components/Tab Navigation", module)
  .add("Tab", withNotes(Notes)(() => {
    return (
      <div>
        <Tab label="Tab1" onClick={action("Run onClick Function")} isActive={true}/>
        <Tab label="Tab2" onClick={action("Run onClick Function")} isActive={false}/>
        <Tab label="Tab3" onClick={action("Run onClick Function")} isActive={false}/>
      </div>
    );
}));

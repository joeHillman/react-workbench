import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/TabContainer.md";
import TabContainer from "../components/tabNavigation/TabContainer";

import { panelOne, panelTwo, panelThree } from "./TestData/TabNavData";

storiesOf("Components/Tab Navigation/Demonstrations", module)
  .add("Tab Container", withNotes(Notes)(() => {
    const tabMenu = [
      {
        label: "Tab One",
        onClick: (index) => { console.log(index) },
        content: panelOne
      },
      {
        label: "Tab Two",
        onClick: (index) => { console.log(index) },
        content: panelTwo
      },
      {
        label: "Tab Three",
        onClick: (index) => { console.log(index) },
        content: null
      },
      {
        label: "Tab Four",
        onClick: (index) => { console.log(index) },
        content: panelThree
      }
    ];

    return (
      <TabContainer menuObj={tabMenu}/>
    );
}));

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/Table.md";
import Table from "../components/Table";

import { PaginationData } from "./TestData/PaginationData";
import { waitstaffList } from "./TestData/WaitstaffList";

storiesOf("Components/Markup Containers and Utilities", module)
  .add("Table", withNotes(Notes)(() => {
    return (
      <Table headers={["First Name", "Last Name", "Position", "Clocked In"]} DATA={waitstaffList}/>
    );
}));

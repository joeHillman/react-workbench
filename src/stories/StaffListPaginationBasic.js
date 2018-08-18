import React from "react";
import { storiesOf } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/StaffListPaginationBasic.md";
import StaffListPaginationBasic from "../demonstrations/StaffListPaginationBasic";

import { waitstaffList } from "./TestData/WaitstaffList";

storiesOf("Components/Pagination/Demonstrations", module)
  .add("Staff List - Basic Pagination", withNotes(Notes)(() => {
    return (
      <StaffListPaginationBasic DATA={waitstaffList} pageSizes={[5, 10, 15]} classes="paged-table-data"/>
    );
}));

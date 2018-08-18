import React from "react";
import { storiesOf } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/PagerContainer.md";
import PagerContainer from "../components/pagination/PagerContainer";

import { PageButtons, PaginationData } from "./TestData/PaginationData";

storiesOf("Components/Pagination", module)
  .add("Pagination - Pager Container", withNotes(Notes)(() => {
    return (
      <div>
        <h3>This component test asssumes an array of data objects 25 large.</h3>
        <h4>Deprecated but kept for reference, use the PaginationControls and a render prop if possible. <br/>A demonstration of render props can be found at <code>Demonstrations > Staff List - Render Props Pagination</code></h4>
        <PagerContainer DATA={PaginationData} classes="paged-table-data" pageSizes={[5, 10, 15]} />
      </div>
    );
}));

import React from "react";
import { storiesOf } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/PagerContainer.md";
import RenderSizedData from "../components/pagination/PagedData";
import PagerContainer from "../components/pagination/PagerContainer";

import { PageButtons, PaginationData } from "./TestData/PaginationData";

storiesOf("Components", module)
  .add("Pagination - Pager Container", withNotes(Notes)(() => {
    return (
      <PagerContainer DATA={PaginationData} buttons={PageButtons} classes="paged-table-data" pageSizes={[5, 10, 15]} />
    );
}));

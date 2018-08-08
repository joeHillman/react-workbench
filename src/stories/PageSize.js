import React from "react";
import { storiesOf } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/PageSize.md";
import PageSize from "../components/pagination/PageSize";

storiesOf("Components", module)
  .add("Pagination - Page Size", withNotes(Notes)(() => {
    return (
      <PageSize onChange={(e) => console.log(Number(e.target.value))} pageSizes={[3, 5, 10, 15]}/>
    );
}));

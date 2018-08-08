import React from "react";
import { storiesOf } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/Page.md";
import Page from "../components/pagination/Page";

import { PageButtons } from "./TestData/PaginationData";

storiesOf("Components", module)
  .add("Pagination - Page Button", withNotes(Notes)(() => {
    const thesePageButtons = (arr) => {
      const theseButtons =  arr.map((item, index) => {
        return (
          <Page key={index} label={item.label} onClick={item.onClick} isActive={item.isActive}/>
        );
      });
      return theseButtons
    }

    return (
      <div>
        <span className="c-pager__flnp c-pager__fp">
          <Page label="<<" onClick={() => console.log("To First Page")} isActive={false}/>
          <Page label="<" onClick={() => console.log("To Previous Page")} isActive={false}/>
        </span>
        {thesePageButtons(PageButtons)}
        <span className="c-pager__flnp c-pager__ln">
          <Page label=">" onClick={() => console.log("To Next Page")} isActive={false}/>
          <Page label=">>" onClick={() => console.log("To Last Page")} isActive={false}/>
        </span>
      </div>
    );
}));

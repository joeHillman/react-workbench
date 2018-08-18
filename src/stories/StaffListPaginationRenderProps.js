import React from "react";
import { storiesOf } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/StaffListPaginationRenderProps.md";
import PaginationControls from "../components/pagination/PaginationControls";

import Table from "../components/Table";

import { PaginationData } from "./TestData/PaginationData";
import { waitstaffList } from "./TestData/WaitstaffList";

storiesOf("Components/Pagination/Demonstrations", module)
  .add("Staff List - Render Props Pagination", withNotes(Notes)(() => {
    return (
      <div className="demo-render-props" style={{ display: "flex" }}>
        <div style={{ minWidth: "500px", marginRight: "20px"}}>
          <PaginationControls DATA={waitstaffList} pageSizes={[5, 10, 15]} classes="paged-table-data" render={PaginationControls => (
            <Table headers={["First Name", "Last Name", "Position", "Clocked In"]} DATA={PaginationControls.sizedData}/>
          )}/>
        </div>
        <div style={{ minWidth: "530px" }}>
        <PaginationControls DATA={PaginationData} pageSizes={[5, 10, 15]} classes="paged-table-data" render={PaginationControls => (
          <Table headers={["First Name", "Last Name", "Favorite Movie"]} DATA={PaginationControls.sizedData}/>
        )}/>
        </div>
      </div>
    );
}));

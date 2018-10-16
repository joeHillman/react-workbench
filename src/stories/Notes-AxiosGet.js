import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/AxiosGet.md";
import AxiosGet from "../notes/axios/AxiosGet";

storiesOf("Notes", module)
  .add("Axios Get", withNotes(Notes)(() => {
    return (
      <div>
        <AxiosGet/>
      </div>
    );
}));

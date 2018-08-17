import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/Modal.md";
import Modal from "../components/Modal";

storiesOf("Components", module)
  .add("Modal", withNotes(Notes)(() => {
    return (
      <div>
        <div>
          <Modal openWithScript={false} openLabel="Open Alert" confirmModal={action("Run Alert Confirm Function")} bodyString="Simple String Message"/>
        </div>
        <div style={{marginTop: "10px"}}>
          <Modal openWithScript={false} openLabel="Open Modal" heading="Full Modal" confirmModal={action("Run Modal Confirm Function")}>With Children or string</Modal>
        </div>
      </div>
    );
}));

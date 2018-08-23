import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";

import ScriptedModal from "./staging/ScriptedModal";

import Notes from "./markdown/Modal.md";
import Modal from "../components/Modal";

storiesOf("Components/Modals", module)
  .add("Simple Notification and Dismiss", withNotes(Notes)(() => {
    return (
      <div>
        <Modal modalClasses="this-class" onlyNotify openWithScript={false} openLabel="Open Notification" confirmModal={action("Run Alert Confirm Function")} bodyString="Simple notification with dismissal."/>
      </div>
    )
  }))
  .add("Simple Alert", withNotes(Notes)(() => {
    return (
      <div>
        <Modal openWithScript={false} openLabel="Open Alert" confirmModal={action("Run Alert Confirm Function")} bodyString="Simple String Message"/>
      </div>
    )
  }))
  .add("Full Modal", withNotes(Notes)(() => {
    return (
      <div style={{marginTop: "10px"}}>
        <Modal openWithScript={false} openLabel="Open Modal" heading="Full Modal" confirmModal={action("Run Modal Confirm Function")}>With Children or string</Modal>
      </div>
    )
  }))
  .add("Script Activated", withNotes(Notes)(() => {
  return (
    <div style={{marginTop: "10px"}}>
      <ScriptedModal/>
    </div>
  )
}));

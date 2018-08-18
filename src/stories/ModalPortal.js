import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";

import Notes from "./markdown/ModalPortal.md";
import ModalPortal from "../components/ModalPortal";

storiesOf("Components/Modals", module)
.add("Using a React Portal", withNotes(Notes)(() => {
  return (
    <ModalPortal openLabel="Open Modal Portal" heading="Full Modal" confirmModal={action("Run Modal Confirm Function")}>The parent should be <code>div#root</code></ModalPortal>
  );
}));

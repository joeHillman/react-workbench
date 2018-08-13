import React from "react";
import { storiesOf } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";
import  { specs, describe, it } from "storybook-addon-specifications";
import { mount } from "enzyme";
import expect from "expect";

import Notes from "./markdown/Button.md";
import Button from "../components/Button";

storiesOf("Components/Buttons", module)
  .add("Primary", withNotes(Notes)(() => {
    const story = <Button submit primaryStyle onClick={() => {console.log("Click")}} label="Primary"/>;

    specs(() => describe("Button", function() {
      let output = mount(story);
      // console.log(["Symbol(enzyme.__node__)"].rendered.props.className, "Class");
      it("Should render the output text as 'Primary'", function() {
        expect(output.text()).toContain("Primary");
      }),
      it("Should have the string primary as a prop", function() {
        expect(output.prop("label")).toBe("Primary");
      }),
      it("Should return true to be a submit button", function() {
        expect(output.prop("submit")).toBeTruthy();
      }),
      it("Should have the correct classes applied", function() {
        expect(output.find(".pure-button").hasClass("pure-button")).toBeTruthy();
        expect(output.find(".pure-button").hasClass("pure-button-primary")).toBeTruthy();
      })
    }));
    return story;
}))
  .add("Secondary", withNotes(Notes)(() => {
    const story = <Button onClick={() => {console.log("Click")}} label="Secondary"/>;

    specs(() => describe("Button", function() {
      let output = mount(story);
      console.log(output.html());
      it("Should render the output text as 'Secondary'", function() {
        expect(output.text()).toContain("Secondary");
      }),
      it("Should have the string secondary as a prop", function() {
        expect(output.prop("label")).toBe("Secondary");
      }),
      it("Should return false to be a submit button", function() {
        expect(output.prop("submit")).toBeFalsy();
      }),
      it("Should have the correct classes applied", function() {
        expect(output.find(".pure-button").hasClass("pure-button")).toBeTruthy();
        expect(output.find(".pure-button").hasClass("pure-button-primary")).toBeFalsy();
      })
    }));
    return story;
  }));

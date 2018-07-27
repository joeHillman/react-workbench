import { configure } from "@storybook/react";
import "./base.css";
import "../src/stylesheets/styles";

const req = require.context("../src/stories/", true, /\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);

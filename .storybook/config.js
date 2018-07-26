import { configure } from "@storybook/react";
import "../src/stylesheets/styles.scss";

const req = require.context("../src/stories/", true, /\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);

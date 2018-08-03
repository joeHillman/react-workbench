import { configure } from "@storybook/react";
import { setOptions } from '@storybook/addon-options';
import "./base.css";
import "../src/stylesheets/styles";

const req = require.context("../src/stories/", true, /\.js$/)

setOptions({
  name: "Joe Hillman - React Work",
  url: "https://joehillman.github.io/react-workbench/"
});

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);

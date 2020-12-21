import { configure } from "@storybook/react";
import { setOptions } from '@storybook/addon-options';
// import { configure as enzymeConfigure } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";

// import { storybookImports } from "./baseConfig";

import "./base.css";
import "../src/stylesheets/styles";

const req = require.context("../src/stories/", true, /\.js$/)

setOptions({
  name: "Joe Hillman - React Work",
  url: "https://joehillman.github.io/react-workbench/"
});

// enzymeConfigure({ adapter: new Adapter() });

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);

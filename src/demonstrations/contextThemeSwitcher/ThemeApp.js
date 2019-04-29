import React, { Component } from "react";
import ThemedChild from "./ThemedChild";
import {ThemeContext} from "./ThemeContext";
import ThemedSelectList from "./ThemedSelectList";
import ThemedButton from "./ThemedButton";
import "./Themes.scss";

// const ThemeContext = React.createContext("default");

class ThemeApp extends Component {
  constructor(props) {
    super(props);
    this.toggleTheme = (event) => {
      this.setState({
        skin: event.target.value
      });
    }
    this.state = {
      skin: "default",
      toggleTheme: this.toggleTheme
    }
  }

  render() {
    return (
      <div>
      <ThemeContext.Provider value={this.state.skin}>
        <div className="themed-app">Theme App

          <ThemedSelectList toggleTheme={this.toggleTheme} />
          <ThemedButton className={`button--structure ${this.state.skin}--skin`} />
          <ThemedChild />
          <ThemedChild />
          <ThemedChild />
        </div>
      </ThemeContext.Provider>
      </div>

    );
  }
}

export default ThemeApp;

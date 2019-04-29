import React, { Component } from "react";
import ThemedButton from "./ThemedButton";
import { ThemeContext } from "./ThemeContext";

class ThemedChild extends Component {
  render () {
    return (
      <ThemeContext.Consumer>
      {({skin}) => {
          return (
            <div>Themed Child
              <ThemedButton className={`button--structure ${this.context}--skin`}/>
            </div>
          );
        }
      }
      </ThemeContext.Consumer>
    )
  }
}

ThemedChild.contextType = ThemeContext;

export default ThemedChild;

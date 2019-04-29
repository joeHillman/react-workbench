import React, { Component } from "react";

// Context lets us pass a value deep into the component tree
  // without expicitly threading it thru every component

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

// Create a context for the current theme with a default light value
const ThemeContext = React.createContext(themes.dark);

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button {...props} style={{backgroundColor: theme.background}}>Button</button>
    );
  }
}

ThemedButton.contextType = ThemeContext;


const Toolbar = (props) => {
  return (
    <div theme={props.theme}>Toolbar
      <button onClick={props.changeTheme}>Toggle Theme</button>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    }
    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    }
  }

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme}/>
          <ThemedButton />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export { ThemedButton, Toolbar, App };

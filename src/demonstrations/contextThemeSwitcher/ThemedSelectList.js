import React from "react";

const ThemedSelectList = (props) => {
  // let logEvent = () => {console.log(event)}
  // let changeTheme = () => {props.toggleTheme(event.target.value)}
  return (
    <select onChange={props.toggleTheme}>
      <option value="default">Default</option>
      <option value="red">Red</option>
      <option value="blue">Blue</option>
      <option value="orange">Orange</option>
    </select>
  );
}

export default ThemedSelectList;

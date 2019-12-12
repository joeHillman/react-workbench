import React, { Fragment, PureComponent } from "react";
import { GameLibrary } from "../Games/Library";
import SelectGameFormStrings from "./SelectGameFormStrings";
import Button from "../../../components/Button";

class SelectGameForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedGame: null,
    }
  }

  changeGameSelection = (e) => {
    this.setState({ selectedGame: e.target.value });
    this.props.updateTableGame(e.target.value);
  }

  buildOptions = (arr) => {
    return (
      arr.map((item) => {
        return (
          <option value={item.name}>{item.displayName}</option>
        );
      })
    );
  }

  // utility function
  filterGame = (arr, searchStr) => {
    return arr.filter(item => item.name === searchStr)[0]
  }

  // make a utility function...
  buildInfo = (arr) => {
    const DATA = this.filterGame(arr, this.state.selectedGame);
    const selectedGame = Object.assign({}, DATA)
    const renderContent = (arr) => {
      const gameStrings = arr.find((item) => { if (item.name === selectedGame.name){ return item } return null })
      const entries = Object.entries(gameStrings);
      const listItems = entries.slice(1).map((item) => { return (<li>{item[0]}: {item[1]}</li>) });
      return (<ul>{listItems}</ul>);
    }

    return (renderContent(SelectGameFormStrings));
  }

  buildForm = (domElements) => {
    return (
      <div>
        {domElements}
      </div>
    )
  }

  render() {
    return (
      <div>
        <h2>Select a Game</h2>
        <label>Game Choices: </label>
        <select onChange={this.changeGameSelection}>
          <option value="" disabled selected>Please Choose a Game</option>
          {this.buildOptions(GameLibrary)}
        </select>
        {this.state.selectedGame === null ? null : this.buildForm(this.buildInfo(GameLibrary))}
      </div>
    );
  }
}

SelectGameForm.propTypes = {

}

export default SelectGameForm;

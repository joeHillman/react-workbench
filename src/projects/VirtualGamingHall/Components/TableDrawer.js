import React, { Component } from "react";
import Button from "../../../components/Button";
// this needs to be passed from a parent...
import SelectGameFormStrings from "./SelectGameFormStrings";

class TableDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }

  toggleDrawer = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }))
  }

  // consider making a utility function...
  buildInfo = (obj) => {
    // const DATA = this.filterGame(arr, this.state.selectedGame);
    const selectedGame = Object.assign({}, obj)
    const renderContent = (arr) => {
      const gameStrings = arr.find((item) => { if (item.name === selectedGame.name){ return item } return null })
      const entries = Object.entries(gameStrings);
      const listItems = entries.slice(1).map((item) => { return (<li>{item[0]}: {item[1]}</li>) });
      return (<ul>{listItems}</ul>);
    }

    return (renderContent(SelectGameFormStrings));
  }

  render() {
    const { gameDetails } = this.props;
    return (
      <div>TableDrawer
        <Button label={this.state.isOpen ? "Hide Game Details" : "Show Game Details"} onClick={this.toggleDrawer}/>
        <div className={this.state.isOpen ? "show" : "hide"}>
          {this.buildInfo(gameDetails)}
        </div>
      </div>
    );
  }
}

TableDrawer.propTypes = {

}

export default TableDrawer;

import React, { Component } from "react";

import Modal from "../../components/Modal";

class ScriptedModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameIs: "new",
      numberOfMoves: 5,
      currentPuzzle: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      hasBeenWon: false
    }
  }

  handleReset = () => {
    if(this.state.hasBeenWon === true) {
      this.setState((prevState, props) => ({ hasBeenWon: !prevState.hasBeenWon, gameIs: "new", numberOfMoves: 0 }));
    } else { this.setState({ gameIs: "new", numberOfMoves: 0 })}
  }

  testForWin = () => {
    if(this.state.currentPuzzle.every((element, index) => element === index + 1)) {
      this.setState({ hasBeenWon: true, gameIs: "has been won" });
    }
  }

  render() {
    return (
      <div>
        <Modal onlyNotify useOpenScript openWithScript={this.state.hasBeenWon} openLabel="Script Test" bodyString="A script should open this modal." handleCancel={this.handleReset} handleBackDrop={this.handleReset} cancelString="Reset Game"></Modal>
        <button type="button" onClick={this.testForWin}>Programatically Opened Modal</button>
      </div>
    );
  }
}

export default ScriptedModal;

import React, { Component } from "react";

import Modal from "../../components/Modal";

class JS15Board extends Component {
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

  handlePause = () => {
    if(this.state.gameIs === "paused") {
      this.setState({
        gameIs: "inProgress"
      })
    } else if (this.state.gameIs !== "paused") {
      this.setState({
        gameIs: "paused"
      })
    }
  }

  testForWin = () => {
    if(this.state.currentPuzzle.every((element, index) => element === index + 1)) {
      this.setState({ hasBeenWon: true, gameIs: "has been won" });
    }
  }


  render() {
    const { children } = this.props;

    return (
      <div>
        <p>This game is {this.state.gameIs} and you have made {this.state.numberOfMoves} moves.</p>
        <Modal openWithScript={false} openWithScript={false} onlyNotify openLabel="Pause Game" bodyString="This game is paused" toggleOpen={this.handlePause} cancelString="Return to Game"></Modal>
        <Modal openWithScript={false} openLabel="Reset Game" bodyString="Are you sure you wish to reset this game?" handleOpen={this.handlePause} handleCancel={this.handlePause} cancelString="Return to Game" confirmString="Reset this Game" confirmModal={this.handleReset}></Modal>
        <Modal onlyNotify useOpenScript openWithScript={this.state.hasBeenWon} openLabel="Script Test" bodyString="Upon winning a script will open this modal to congratulate the user." handleCancel={this.handleReset} cancelString="Reset Game"></Modal>
        <button type="button" onClick={this.testForWin}>Test Win</button>
        <p></p>
      JS Board
        {children}
      </div>
    );
  }
}

export default JS15Board;

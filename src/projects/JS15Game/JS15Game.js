import React, { Component } from "react";

import Button from "../../components/Button";
import Modal from "../../components/Modal";
import JS15Board from "./JS15Board";
import JS15Tile from "./JS15Tile";

import { shuffle } from "underscore"

class JS15Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameIs: "new",
      numberOfMoves: 0,
      startingArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      thisPuzzle: {1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, 11: 11, 12: 12, 13: 13, 14: 14, 15: 15, 16: 16 },
      hasBeenWon: false,
      destination: 16,
      pausePressed: false,
      resetPressed: false,
      instructionsPressed: false
    }
  }

  componentDidMount() {
    this.attachEventListeners();
  }

  componentWillUmount() {
    this.removeEventListeners();
  }

  submitProposal = () => {
    let numberOfInversions = 0;
    let newNumListShuffled = shuffle(this.state.startingArray);
    let proposal = newNumListShuffled.slice(0);
    while(newNumListShuffled.length > 0){
      let key = newNumListShuffled[0];
      for (var i=1; i<newNumListShuffled.length; i++){
        if(key > newNumListShuffled[i]){
          numberOfInversions ++;
        }
      }
      newNumListShuffled.shift();
    }
    this.checkSolvability(proposal, numberOfInversions);
  }

  checkSolvability = (proposal, numberOfInversions) => {
    if(numberOfInversions % 2 === 0) {
      console.log("This puzzle is not solvable, reshuffling array.");
      this.submitProposal();
    } else {
      console.log("This puzzle is solvable, enjoy the game!");
      this.populateBoard(proposal);
    }
  }

  populateBoard = (proposal) => {
    let newPuzzle = proposal.map((item, index) => {
      this.state.thisPuzzle[index + 1] = item;
    })
  }

  handleReset = () => {
    this.attachEventListeners();
    this.submitProposal();
    if(this.state.hasBeenWon === true) {
      this.setState((prevState, props) => ({ hasBeenWon: !prevState.hasBeenWon, gameIs: "new", numberOfMoves: 0, resetPressed: false }));
    } else { this.setState({ gameIs: "new", numberOfMoves: 0, resetPressed: false })}
  }

  handlePause = () => {
    if(this.state.gameIs === "paused") {
      this.setState({
        gameIs: "inProgress",
        pausePressed: false,
        resetPressed: false,
        instructionsPressed: false
      });
      this.attachEventListeners();
    }

    if (this.state.gameIs !== "paused") {
      this.setState({
        gameIs: "paused"
      });
      this.removeEventListeners();
    }
  }

  testForWin = () => {
    if(Object.values(this.state.thisPuzzle).every((element, index) => element === index + 1)) {
      this.setState({ hasBeenWon: true, gameIs: "has been won" });
    }
  }

  incrementMoveCounter = () => {
    if(this.state.gameIs === "new") {
      this.setState({ gameIs: "inProgress" });
    }
    this.setState((prevState, props) => ({
      numberOfMoves: (prevState.numberOfMoves + 1)
    }))
  }

  moveDown = () => {
    if(this.state.destination < 13) {
      this.incrementMoveCounter();
      const changes = { [this.state.destination]:  this.state.thisPuzzle[this.state.destination + 4], [(this.state.destination + 4)]: 16 };
      const nextPuzzle = { ...this.state.thisPuzzle, ...changes};
      this.setState((prevState, props) => ({ thisPuzzle: nextPuzzle, destination: prevState.destination + 4 }));
      this.createPuzzle(nextPuzzle);
      this.testForWin();
    }
  }

  moveUp = () => {
    if(this.state.destination > 4) {
      this.incrementMoveCounter();
      const changes = { [this.state.destination]:  this.state.thisPuzzle[this.state.destination - 4], [(this.state.destination - 4)]: 16 };
      const nextPuzzle = { ...this.state.thisPuzzle, ...changes};
      this.setState((prevState, props) => ({ thisPuzzle: nextPuzzle, destination: prevState.destination - 4 }));
      this.createPuzzle(nextPuzzle);
      this.testForWin();
    }
  }

  moveLeft = () => {
    if(this.state.destination !== 1 && this.state.destination !== 5 && this.state.destination !== 9 && this.state.destination !== 13) {
      this.incrementMoveCounter();
      const changes = { [this.state.destination]:  this.state.thisPuzzle[this.state.destination - 1], [(this.state.destination - 1)]: 16 };
      const nextPuzzle = { ...this.state.thisPuzzle, ...changes};
      this.setState((prevState, props) => ({ thisPuzzle: nextPuzzle, destination: prevState.destination - 1 }));
      this.createPuzzle(nextPuzzle);
    }
  }

  moveRight = () => {
    if(this.state.destination !== 4 && this.state.destination !== 8 && this.state.destination !== 12 && this.state.destination !== 16) {
      this.incrementMoveCounter();
      const changes = { [this.state.destination]:  this.state.thisPuzzle[this.state.destination + 1], [(this.state.destination + 1)]: 16 };
      const nextPuzzle = { ...this.state.thisPuzzle, ...changes};
      this.setState((prevState, props) => ({ thisPuzzle: nextPuzzle, destination: prevState.destination + 1 }));
      this.createPuzzle(nextPuzzle);
    }
  }

  createPuzzle = () => {
   let thisPuzzle = Object.keys(this.state.thisPuzzle).map((item, index) => {
     return (<JS15Tile classes={`${(this.state.destination === (index + 1)) ? "hide" : ""}`} dataPosition={index} key={index} tileNumber={this.state.thisPuzzle[item]}/>);
   });
   return thisPuzzle;
  }

  attachEventListeners = () => {
    document.addEventListener("keydown", this.resolveKeyboardMove);
  }

  removeEventListeners = () => {
    document.removeEventListener("keydown", this.resolveKeyboardMove);
  }

  pressPause = () => {
    this.setState((prevState, props) => ({ pausePressed: !prevState.pausePressed }))
  }

  pressReset = () => {
    this.setState((prevState, props) => ({ gameIs: "paused", resetPressed: !prevState.resetPressed }))
  }

  pressInstructions = () => {
    this.setState((prevState, props) => ({ gameIs: "paused", instructionsPressed: !prevState.resetPressed }))
  }

  resolveKeyboardMove = (event) => {
    switch(event.keyCode) {
      case 38:
      event.preventDefault();
      this.moveUp();
      break;
      case 40:
      event.preventDefault();
      this.moveDown();
      break;
      case 37:
      event.preventDefault();
      this.moveLeft();
      break;
      case 39:
      event.preventDefault();
      this.moveRight();
      break;
      case 27:
      this.handlePause();
      this.pressPause();
      break;
      case 81:
      this.handleReset();
      this.pressReset();
      break;
      case 73:
      this.handlePause();
      this.pressInstructions();
      break;
      default: null
    }
  }

  render() {
    return (
      <div className="js-15-game">
        <p>This game is {this.state.gameIs} and you have made {this.state.numberOfMoves} moves.</p>
        <div className="game-controls">
          <div className="admin">
            <Modal onlyNotify modalClasses="pause-modal" openWithScript={this.state.pausePressed} openLabel="Pause Game" bodyString="This game is paused" handleOpen={this.handlePause} handleCancel={this.handlePause} cancelString="Return to Game"/>
            <Modal modalClasses="reset-modal" openWithScript={this.state.resetPressed} openLabel="Reset Game" bodyString="Are you sure you wish to reset this game?" handleOpen={this.handlePause} handleCancel={this.handlePause} cancelString="Return to Game" confirmString="Reset this Game" confirmModal={this.handleReset}/>
            <Modal modalClasses="win-modal" onlyNotify useOpenScript openWithScript={this.state.hasBeenWon} openLabel="Congratulations" bodyString="Congratulations! You have won the 15 game." handleCancel={this.handleReset} cancelString="Reset Game"/>
            <Modal onlyNotify modalClasses="instruction-modal" openWithScript={this.state.instructionsPressed} openLabel="Show Instructions" heading="Instructions" handleOpen={this.handlePause} handleCancel={this.handlePause} cancelString="Return to Game">
              <div>
              <p>The game will begin in a won state. Your goal is rearrange the numbers so they are in order. You will need to reset the game for a fresh puzzle.</p>
              <p>Controls</p>
              <ul>
                <li>Movement buttons are also mapped to the arrow keys.</li>
                <li>Pause Game - Pauses the game and is accessible via the escape key.</li>
                <li>Reset Game - Resets the game and is accessible via the Q key.</li>
                <li>Instructions - Shows this screen and is accessible via the I key.</li>
              </ul>
              </div>
            </Modal>
          </div>
          <div className="movement">
            <button className="up-control" type="button" onClick={this.moveUp} disabled={this.state.destination < 5 ? true : false}>&uarr;</button>
            <button className="down-control" type="button" onClick={this.moveDown} disabled={this.state.destination > 12 ? true : false}>&darr;</button>
            <button className="left-control" type="button" onClick={this.moveLeft} disabled={this.state.destination !== 1 && this.state.destination !== 5 && this.state.destination !== 9 && this.state.destination !== 13 ? false : true}>&larr;</button>
            <button className="right-control" type="button" onClick={this.moveRight} disabled={this.state.destination !== 4 && this.state.destination !== 8 && this.state.destination !== 12 && this.state.destination !== 16 ? false : true}>&rarr;</button>
          </div>
        </div>
        <div className="js-15-board">
          {this.createPuzzle()}
        </div>
      </div>
    );
  }
}

export default JS15Game;

import React, { PureComponent } from "react";
import Button from "../../components/Button";
import ModalPortal from "../../components/ModalPortal";
import SelectGameForm from "./Components/SelectGameForm";
import JoinGameForm from "./Components/JoinGameForm";
import TableDrawer from "./Components/TableDrawer";
import Seat from "./Seat";
import { GameLibrary } from "./Games/Library";

class Table extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isEmpty: true,
      remoteDisable: true,
      selectedGame: null,
      selectedGameData: null,
      joiningPlayer: null,
      players: [],
    }
  }

  handleSelectedGameUpdate = (str) => {
    const filteredLibrary = GameLibrary.filter(item => str === item.name ? item.name : null)[0];

    this.setState({
      selectedGame: str,
      selectedGameData: Object.assign({}, filteredLibrary),
      availableGameTokens: filteredLibrary.tokens,
      availableSeats : filteredLibrary.numberOfPlayers,
    });
  }

  handleChooseGameModal = () => {
    this.setState((prevState) => ({ isEmpty: !prevState.isEmpty }))
  }

  renderSeats = (arr) => {
    return arr.map( item => <Seat name={item.name} token={item.token}/>)
  }

  handleJoinGameModal = (obj) => {
    const filteredGameTokens = this.state.availableGameTokens.filter((item, index) => {if(item !== obj.token){ return item }})
    const joiningPlayer = this.state.joiningPlayer;
    this.setState({
      players: [...this.state.players, joiningPlayer],
      availableGameTokens: filteredGameTokens,
      availableSeats: this.state.availableSeats -= 1,
    })
  }

  handleJoiningPlayer = (obj) => {
    this.setState({
      joiningPlayer: obj
   })
  }

  render() {
    const { isEmpty, selectedGameData } = this.state;
    return (
      <div>{selectedGameData ? selectedGameData.displayName : "No game in progress"}{isEmpty ? "(available)" : `Remaining Seats: ${this.state.availableSeats}`}<br/>
        {isEmpty &&
          <ModalPortal openLabel="View Game Selection" proceedLabel="Choose Game" remoteDisable={!this.state.selectedGame}
            confirmModal={this.handleChooseGameModal}
          >
            <SelectGameForm updateTableGame={this.handleSelectedGameUpdate}/>
          </ModalPortal>
        }
        {
          // add a change game when we have a save option for the table
          // change game will prompt an are you sure?
        }
        {!isEmpty && <TableDrawer gameDetails={selectedGameData}/>
          // table has a game that is tied to a board
          // table has seats / players - that will be a singular component
          // table will broker exchanges between game and board
          // // think main menu, shouldn't have a bunch but will be important
          // table will broker exchanges between players and board
          // // cards exchange, army cash in, spoils, money, encounters, turn actions for history
          // table will notify other players of the game, board, player info
          // table reports back to the hall which houses the tables
        }
        {
          // join game needs to also be a modal??, we'll house the form there for token selection...
          !isEmpty && <ModalPortal openLabel="Join Game" confirmModal={() => this.handleJoinGameModal(this.state.joiningPlayer)}>
            <JoinGameForm tokens={this.state.availableGameTokens} joinPlayer={this.handleJoiningPlayer} />
          </ModalPortal>
        }
        {
          // this.state.players.length !== 0 && (this.state.players.map(item => <Seat name={item.name} token={item.token} />))
          this.renderSeats(this.state.players)
        }
        {
          // need to update selected game data based off joining players
          // need to double check that the join form is in sync with this data, based on state it should be

        }

      </div>
    );
  }
}

Table.propTypes = {

}

export default Table;

import React, { Component } from "react";
import Button from "../../../components/Button";
// this needs to be passed from a parent...
import SelectGameFormStrings from "./SelectGameFormStrings";

class SeatDrawer extends Component {
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
    // const renderContent = (obj) => {
    //   const entries = Object.entries(obj);
    //   const listItems = entries.slice(1).map((item) => { return (<li>{item[0]}: {item[1]}</li>) });
    //   return (<ul>{listItems}</ul>);
    // }

    // return (renderContent(obj));
    return (<ul>{Object.entries(obj).map((item) => { return(<li>{item[0]}: {item[1]}</li>) })}</ul>)
  }

  render() {
    const { playerObj } = this.props;
    return (
      <div>SeatDrawer
        <Button label={this.state.isOpen ? "Hide Player Details" : "Show Player Details"} onClick={this.toggleDrawer}/>
        <div className={this.state.isOpen ? "show" : "hide"}>
          {this.buildInfo(playerObj)}
        </div>
      </div>
    );
  }
}

SeatDrawer.propTypes = {

}

export default SeatDrawer;

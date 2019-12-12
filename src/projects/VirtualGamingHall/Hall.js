import React, { Component } from "react";

class Hall extends Component {
  render() {
    return (
      <div>
      -- this could be a single step modal for joining --
      The Hall is the room containing 3 tables to start
        -- displaying games available
        -- top down view, think RTS style
        -- shows friends flag if present
      | FRIENDS          |
      --------------------
        -- tables are buttons, pops a modal with details
      Tables for the games that has
        -- empty table -- hasNewGame -- choose from list...
        -- table awaiting
          -- displaying game, players, avaialble seats
          -- hasJoinGame
        -- table in progress
      Chairs for the players
        -- displaying player information
        -- avatar
        -- side bubble with piece color
        -- hasSaveAsFriend
      </div>
    );
  }
}

Hall.propTypes = {

}

export default Hall;

import React, { PureComponent } from "react";

class Seat extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {name, token} = this.props;
    
    return (
      <div>
        Player Name: {name} <br/>
        Player Token: {token}
      </div>
    );
  }
}

Seat.propTypes = {

}

export default Seat;

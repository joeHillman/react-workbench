import React, { PureComponent } from "react";

class JoinGameForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      token: null,
      thisPlayer: null,
    }
  }

  buildOptions = (arr) => {
    return arr.map(item => <option value={item}>{item}</option>)
  }

  buildPlayerObject = () => {
    if(typeof this.state.name === "string" && typeof this.state.token === "string") {
      this.setState({ thisPlayer: { name: this.state.name, token: this.state.token } }, () => { this.props.joinPlayer(this.state.thisPlayer) })
    }
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value }, () => { this.buildPlayerObject() })
  }

  handleGameChange = (e) => {
    this.setState({ token: e.target.value }, () => { this.buildPlayerObject() })
  }

  render() {
    const { tokens } = this.props;
    // this.buildPlayerObject();
    return (
      <div>JoinGameForm
        <label htmlFor="name">Name: </label>
        <input value={this.state.name} placeholder="What is your name?" id="name" onChange={this.handleNameChange}/>
        <select onChange={this.handleGameChange}>
          <option disabled value="Choose Token">Choose Token</option>
          {this.buildOptions(tokens)}
        </select>
      </div>
    );
  }
}

JoinGameForm.propTypes = {

}

export default JoinGameForm;

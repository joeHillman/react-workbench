import React, { Component } from 'react';

class FetchModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wisdom: 'loading...'
    }
  }

  getWisdomFromTaylorSwift = () => {
    fetch('https://api.taylor.rest').then(res => res.json()).then(data => this.setState({ wisdom: data.quote }))
  }

  componentDidMount() {
    this.getWisdomFromTaylorSwift();
  }

  render() {
    return (
    <div>Taylor Swift has some wisdom for you: {this.state.wisdom}</div>
    )
  }
}

export default FetchModule;
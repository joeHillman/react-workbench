import React, { Component } from "react";
import Axios from "axios";

class AxiosGet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null
    }
  }

  async componentDidMount() {
    const response = await Axios({
      url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
      headers: {"X-Mashape-Key": "5zqF2CDhoPmshvffcpNgGZXAzRlkp1CkX0ajsnFtjjTDiGz9ut"}
    });
    this.setState({ response: response });
  }

  render() {
    const { response } = this.state;
    return (
      <div>
      {
        response ?
        <ul style={{ listStyleType: "none" }} >
          <li>Quote: {response.data[0].quote} -- <b>{response.data[0].author}</b></li>
          <li>Category: {response.data[0].category}</li>
        </ul>
        : null
      }
      </div>
    )
  }
}

export default AxiosGet;

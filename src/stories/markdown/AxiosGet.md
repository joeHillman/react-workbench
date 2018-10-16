# Notes - Axios GET

Using Axios to interface with a public API.
A quick example of the Axios call
```
  async componentDidMount() {
    const response = await Axios({
      url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
      headers: {"X-Mashape-Key": "5zqF2CDhoPmshvffcpNgGZXAzRlkp1CkX0ajsnFtjjTDiGz9ut"}
    });
    this.setState({ response: response });
  }
```

[Source]()

[Axios](https://github.com/axios/axios)

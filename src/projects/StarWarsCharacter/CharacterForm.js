import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class CharacterForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      DATA: [],
      selectedCharacter: null,
      bgColor: "#ccc",
    }
  }

  getCharacters = (pages) => {
    const characters = [];
    // could map over but we dont need the array the map would return,
    // forEach is the desire way here
    Array(pages).fill(0).forEach((item, index) => {
      fetch(`https://swapi.co/api/people/?page=${index+1}`)
        .then((response) =>  {
          return response.json();
        })
        .then((myJson) => {
          myJson.results.forEach(item => characters.push(item))
          if(index + 1 === pages) { this.setState((prevState) => ({ DATA: characters })) }
        });
    });

    this.setState((prevState) => ({
      isLoading: !prevState.isLoading,
    }))
  }

  async componentDidMount() {
    await this.getCharacters(6);
  }

  populateCharacters = (arr) => {
     const options = arr.map((item, index) => {return (<option value={item.name} key={index} data-eyes={item.eye_color}>{item.name}</option>)})
     return options;
  }

  selectCharacter = (event) => {
    this.setState({ selectedCharacter: event.target.value });

    const thisBgColor = event.target.options[event.target.options.selectedIndex].dataset.eyes
    // check for support for backgroundColor keyword, a few eye colors are not keywords
    if(CSS.supports("background-color", thisBgColor)){
      this.setState({ bgColor: thisBgColor })
    } else {
      this.setState({ bgColor: "#ccc" })
    }
  }

  onSubmitSuccess = (e) => {
    e.preventDefault();
    document.body.classList.add("submission-successful")
  }

  onSubmit = (selectedCharacter) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'My Selected Character',
        body: `${this.state.selectedCharacter}`,
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then((json) => {console.log(json); document.body.classList.add("submission-successful"); document.body.classList.remove("submission-failed")})
    .catch((response) => {document.body.classList.add("submission-failed"); document.body.classList.remove("submission-successful")})
  }

  closeSuccessMessage = () => {
    document.body.classList.remove("submission-successful");
  }

  closeErrorMessage = () => {
    document.body.classList.remove("submission-failed");
  }

  render() {
    const style = { backgroundColor: this.state.bgColor }

    return (
      <div className="app-root">
        <div className="success"><button type="button" onClick={this.closeSuccessMessage} className="msg-close msg-success"><span className="sr-only">Close</span>X</button> <span className="msg-string">Your favorite character has been successfully submitted!</span></div>
        <div className="error"><button type="button" onClick={this.closeErrorMessage} className="msg-close msg-failure"><span className="sr-only">Close</span>X</button> <span className="msg-string">There was an error in your submission, please try again.</span></div>

        <form  style={style} method="post" id="favorite-character" className=" favorite-character bg-color-default">
          <ul className="form-controls">
            <li>
              <label className="character-label" htmlFor="character-select">Choose a character:</label>
              <select onChange={() => this.selectCharacter(event)} className="character-select" id="character-select" required autoFocus>
                <option disabled selected value="choose" data-eyes="none">Choose a character</option>
                {this.populateCharacters(this.state.DATA)}                }
              </select>
            </li>
            <li>
              <button className="character-submit" type="submit" onClick={this.onSubmitSuccess}>Submit</button>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

CharacterForm.propTypes = {

};

export default CharacterForm;

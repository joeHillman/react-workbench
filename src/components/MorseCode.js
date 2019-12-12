import React, { Component } from "react";
// import PropTypes, {bool, func, string} from "prop-types";
import { playOscillator } from "./WebAudio/Oscillator";
import { letterToMorse, wordToMorse, determineSpacing } from "../notes/Exercises/morseCode";

class MorseCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textField: "sunny"
    }
  }

  thisWord = (word) => determineSpacing(wordToMorse(word))

  renderWordMap = (arr) => { return (
    <div>
      {arr.map((item, index) => {
        // item.sound.map(item => item === "dot" ? playOscillator(1) : playOscillator(3))
        if(item.char.length !== 1 || item.spacing === "null") {
          return <p key={index}>{item.char + " "} <br/> {item.sound} </p>
        } else {
          return <p key={index}>{item.char} <br/> {item.sound} </p>
        }}
      )}
    </div>
  )}

  render() {
    return (
      <div>Morse Code:
        <div className="output">{this.renderWordMap(this.thisWord(this.state.textField).builtSequence)}</div>
        {console.log(this.thisWord(this.state.textField))}
        {console.log(this.thisWord("is it sunny out"))}
        {console.log(this.thisWord(".,?\'!/\(\)&:;=+-_/$@"))}
      </div>
    );
  }

}

// MorseCode.propTypes = {
//
// }

export default MorseCode;

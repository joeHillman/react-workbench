import React, { Component } from "react";

class FindAndLookup extends Component {

  findFirstEven = (arr) => {
    return arr.find(item => item % 2 === 0)
  }

  // as with all iteration, the first argument passed is the name of the item being handled
  findFruit = (arr, str) => arr.find( fruit => fruit.name === str )

  findMorseCode = (arr, character) => arr.find( letter => letter.char == character )

  setSpacing = (obj, space) => {
    let copy = Object.assign({}, obj);
    return Object.assign(copy, {spacing: space})
  }

  render() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let fruits = [
      {name: "apples", quantity: 2},
      {name: "bananas", quantity: 0},
      {name: "cherries", quantity: 5}
    ];

    let morseCode = [
      {
        char: "a",
        sound: ["dot", "dash"]
      },
      {
        char: "c",
        sound: ["dash", "dot", "dash", "dot"]
      },
      {
        char: "t",
        sound: ["dash"]
      }
    ];


    return (
      <div>
        <ul>
          <li>Find returns the first item that matches.</li>
          <li>First even number: {this.findFirstEven(numbers)}</li>
          <li>Lookup functions return the first found item with find.</li>
          <li>
            <code><pre>
            // as with all iteration, the first argument passed is the name of the item being handled <br/>
            findFruit = (arr, str) => arr.find( fruit => fruit.name === str )
            </pre></code>
          </li>
          <li><code>this.findFruit(fruites, "cherries").name</code></li>
          <li>{this.findFruit(fruits, "cherries").name}: {this.findFruit(fruits, "cherries").quantity}</li>
          <li>Again for my purposes&hellip;</li>
          <li>{this.findMorseCode(morseCode, "t").char}, {this.findMorseCode(morseCode, "t").sound}</li>
          <li>{this.setSpacing(this.findMorseCode(morseCode, "t")).char}
           {console.log(morseCode, "MORSE CODE")}
         </li>
        </ul>
      </div>
    )
  }
}

export default FindAndLookup;

import morseCodeLib from "./morseCodeLib";

export const letterToMorse = (letter) => {
  return morseCodeLib.find((item) => {
    if(item.char === letter) {
      return item.sound;
    }
  });
}

export const wordToMorse = (word) => {
  let thisWord = Array.from(word);
  let result = thisWord.map(item => letterToMorse(item))
  return result;
}

// object assign to add the last value and push into array
// build object that houses an array of objects containing the morse code object
  // and add appropriate spacing
export const determineSpacing = (arr) => {
  let sequence = [];
  let startingSignal = letterToMorse("startingSignal");
  let endOfWork = letterToMorse("endOfWork");
  arr.forEach((item, index) => {
    if(index === (arr.length -1)) {
      sequence.push([Object.assign({}, item), "null"]);
    } else if (arr[index].char === " ") {
      return null;
    } else if ((arr[index].char) !== " " && (arr[index + 1].char === " ")) {
      sequence.push([Object.assign({}, item), 7]);
    } else if((arr[index].char) === (arr[index + 1].char)) {
      sequence.push([Object.assign({}, item), 1]);
    } else {
      sequence.push([Object.assign({}, item), 3]);
    }
  });

  let builtSequence = sequence.map((item, index) => {
    return Object.assign(item[0], {spacing: item[1]})
  })

  builtSequence.unshift(startingSignal);
  builtSequence.push(endOfWork);

  return {sequence, builtSequence};
}

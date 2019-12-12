// find largest number in an array
// I'm sure there's a math function for this
export const findLargest = (arr) => {
  let largest = arr[0];
  arr.map(item => {if(item > largest){ largest = item }});
  return largest;
}

// reverse and array
// .reverse() -  array method otherwise...
export const reverseArray = (arr) => {
  let reversed;
  arr.map((item) => {
    reversed.unshift(item);
  });
  return reversed;
}

// check palindrome
checkPalindrome = (str) => {
  let control = str;
  let compare = reverseArray(str).join("");
  if(control === compare) {
    return true
  } else {
    return false
  }
}

// check for inclusion
// .includes()

// return odd positions
//
export const returnOdd = (arr) => {
  let oddItems = arr.filter((item, index) => {
    if(index % 2 !== 0) {
      return item;
    }
  });
  return oddItems;
}

// nested maps - multiple two arrays
export const multiplyArrays = (arr1, arr2) => {
  let product = (arr1, arr2) => {
    let result = arr1.map((item) => {
      return arr2.map(item2 => item * item2);
    });
    return result;
  };
  return product(arr1, arr2);
};

export const fibbonacci = (stop) => {
  // [n + (n-1)]
  let fibArr = [0, 1];
  while(fibArr.length < stop){
    fibArr.push((fibArr[fibArr.length -1]) + (fibArr[fibArr.length -2]));
  }
}

export const convertToFahrenheit = (num) => {
  return ((num * 1.800000) + 32)
}

export const fahrenheitToCelsius = (num) => {
  return ((num - 32) / 1.8000)
}

export const convert = (num) => {
  try {
    if(isNaN(num)) {
      throw "Value is not a number";
    }
  }
  catch(err) {
    console.log(err);
  }
  const toFahrenheit = (num) => {
    return ((num * 1.800000) + 32);
  }
  const toCelsius = (num) => {
    return ((num - 32) / 1.8000);
  }
  return { toFahrenheit, toCelsius }
}

/*

*/


const sumList = (stop) => {
  let list = Array(stop).fill(1);
  let populateArr = list.map((item, index) => {
    return item += index;
  });
  return populateArr.reduce((acc, currValue) => { return acc + currValue });
}

const sumDivis3And5 = (stop) => {
  let list = Array(stop).fill(1);
  let populateArr = list.map((item, index) => {
    return item += index;
  });

  return populateArr.reduce((acc, currValue) => {
    if(currValue % 3 === 0 || currValue % 5 === 0) {
      acc += currValue
    }
    return acc
  }, 0);
}

const multiplyList = (stop) => {
  let list = Array(stop).fill(1);
  let populateArr = list.map((item, index) => {
    return item += index;
  });
  return populateArr.reduce((acc, currValue) => { return acc * currValue});
}

let weaveArray = (arr, arr2) => {
  let copy1 = arr.slice();
  let copy2 = arr2.slice();
  let result = [];
  arr.map((item, index) => {
    result.push(copy1[index], copy2[index]);
  })
  return result;
}

let weaveArguments = (...arrs) => {
  let results = [];
  let tracker = Array(arrs.length).fill(0);
  tracker.map((item, index) => { arrs.map((item) => {results.push(item[index])}) })
  return results;
}

// return squares
calculateSquares = (stop) => {
  let squares =
    Array(stop)
    .fill(1)
    .map((item, index) => {return item + index})
    .map(item => item * item);
  return squares;
}

splitNum = (num) => {
  let numbers =
    Array.from(num.toString())
    .map(item => Number(item));
  return numbers;
}

// WIP

sumOrMultiply = () => {
	let number = Number(prompt("Choose an end value..."));
	let operationChoice = prompt("Sum or multiply?").toLowerCase();
console.log(operationChoice.toLowerCase());
  if(isNaN(number)) { number = Number(prompt("Please user a numeric value.")) }
	while(operationChoice !== "sum" || operationChoice !== "multiply") { console.log(operationChoice, "CONDIT"); operationChoice = prompt("Your choices are sum or multiply!").toLowerCase() }

	if(operationChoice === "sum") { return sumList(number) };
	if(operationChoice === "multiply") { return multiplyList(number) }

}


// find the smallest number missing from a series
let checkGap = (element, index, array) => {
  let gapValue;
  if(array[index] - array[index + 1] !== -1) {
    gapValue = array[index]; return gapValue
  }
}

let sortNums = (arr) => {
  return arr.sort((a, b) => { return a - b })
}

let checkNegation = (arr) => {
  if(Math.max(...arr) === 0) { return [0, 0, 0] }
}

let resolveCheck = (num) => {
    if(!num) {
      return 0
    }
  // find returns the smallest value, increment here to return the smallest missing value
  return num + 1
}

resolveCheck(sortNums(checkNegation([8, 9, 11, 12, 14, 15, 13])).find(checkGap))


let roll = {
  d4: () => (Math.floor(Math.random() * Math.floor(4))) + 1,
  d6: () => (Math.floor(Math.random() * Math.floor(6))) + 1,
  d8: () => (Math.floor(Math.random() * Math.floor(8))) + 1,
  d10: () => (Math.floor(Math.random() * Math.floor(10))) + 1,
  d12: () => (Math.floor(Math.random() * Math.floor(12))) + 1,
  d20: () => (Math.floor(Math.random() * Math.floor(20))) + 1,
  d100: () => (Math.floor(Math.random() * Math.floor(100))) + 1
}

// issues with rollGroup, needs to be sorted when passing to the comparison functions
// resolveGreaterComparison(results(rollGroup(3, 6)).sort(), results(rollGroup(3, 6)).sort())

let rollGroup = (num, sides) => {
  let group = Array(num).fill(0);

  return group.map(item => item + roll["d" + sides]())
}

let results = (arr) => {
  let array = () => { return arr };
  let sum = arr.reduce((acc, currentVal) => {return acc + currentVal});
  let sort = () => { return arr.sort((a, b) => { return a - b }) };
  let revSort = () => { return arr.sort((a, b) => { return b - a }) };
  return { array, sum, sort, revSort }
}

// these arent quite utility functions though returning the next one in line...
// //

// assume the first array is the active player/attacker/longer set, this will mean attacker...
// functions are based on the first array passed in as the attacker
let resolveComparison = (arr, arr2) => {
  return testSameAmount(arr, arr2)
}

let testSameAmount = (arr, arr2) => {
  if (arr.length === arr2.length) {
    return calculateWins(arr, arr2);
  } else { return {arr, arr2} }
}

let testMoreOrLess = (arr, arr2) => {
  let shorterArray = arr.length < arr2.length ? arr : arr2;
  let longerArray = arr.length > arr2.length ? arr : arr2;
  return {longerArray, shorterArray};
}

let normalizeComparison = (longer, shorter) => {
  let initiallyLonger = longer.slice(longer.length - shorter.length);
  // return longer.slice(longer.length - shorter.length);
  let initiallyShorter = shorter;
  return {initiallyLonger, initiallyShorter};
}

let resolveUnbalanced = (arr, arr2) => {
  return calculateWins(
      normalizeComparison(
      testMoreOrLess(
        testSameAmount(arr, arr2).arr,
        testSameAmount(arr, arr2).arr2
      ).longerArray,
      testMoreOrLess(
        testSameAmount(arr, arr2).arr,
        testSameAmount(arr, arr2).arr2
      ).shorterArray
    ).initiallyLonger,
    normalizeComparison(
      testMoreOrLess(
        testSameAmount(arr, arr2).arr,
        testSameAmount(arr, arr2).arr2
      ).longerArray,
      testMoreOrLess(
        testSameAmount(arr, arr2).arr,
        testSameAmount(arr, arr2).arr2
      ).shorterArray
    ).initiallyShorter
  )
}

// from attacker perspective
let resolveGreaterComparison = (arr, arr2) => {
  if (arr.length === arr2.length) {
    return calculateWins(arr, arr2);
  }
  return calculateWins(
      normalizeComparison(
      testMoreOrLess(
        testSameAmount(arr, arr2).arr,
        testSameAmount(arr, arr2).arr2
      ).longerArray,
      testMoreOrLess(
        testSameAmount(arr, arr2).arr,
        testSameAmount(arr, arr2).arr2
      ).shorterArray
    ).initiallyLonger,
    normalizeComparison(
      testMoreOrLess(
        testSameAmount(arr, arr2).arr,
        testSameAmount(arr, arr2).arr2
      ).longerArray,
      testMoreOrLess(
        testSameAmount(arr, arr2).arr,
        testSameAmount(arr, arr2).arr2
      ).shorterArray
    ).initiallyShorter
  )
}

// from attacker perspective
let resolveLesserComparison = (arr, arr2) => {
  if (arr.length === arr2.length) {
    return calculateLesserWins(arr, arr2);
  }
  return calculateLesserWins(
      normalizeComparison(
      testMoreOrLess(
        testSameAmount(arr, arr2).arr,
        testSameAmount(arr, arr2).arr2
      ).longerArray,
      testMoreOrLess(
        testSameAmount(arr, arr2).arr,
        testSameAmount(arr, arr2).arr2
      ).shorterArray
    ).initiallyLonger,
    normalizeComparison(
      testMoreOrLess(
        testSameAmount(arr, arr2).arr,
        testSameAmount(arr, arr2).arr2
      ).longerArray,
      testMoreOrLess(
        testSameAmount(arr, arr2).arr,
        testSameAmount(arr, arr2).arr2
      ).shorterArray
    ).initiallyShorter
  )
}

// calculateWins(resolveUnbalanced([4,5,6], [3,4]).initiallyLonger, resolveUnbalanced([4,5,6], [4,6]).initiallyShorter)


let calculateWins = (longer, shorter) => {
  let wins = 0;
  let ties = 0;
  // [4, 5], [5, 6]
  longer.forEach((item, index) => { if(item === shorter[index]) { ties++; } else if(item > shorter[index]) { wins++; } });
  return {wins, ties};
}

let calculateLesserWins = (longer, shorter) => {
  let wins = 0;
  let ties = 0;
  // [4, 5], [5, 6]
  longer.forEach((item, index) => { if(item === shorter[index]) { ties++; } else if(item < shorter[index]) { wins++; } });
  return {wins, ties};
}

// class game to house (basic game)
// // getters in a class calculate something (get a value)
// // used in conjunction with setters (set/store a value)
// // getters cannot be used to store at the same time
// // not sure where getters and setters are used in a class??

// // [X] name / string
// // roundNumber / number
// // [X] markers / identifiers / array
// // [X] state / string / calculating, paused, inProgress, new, over
// // historyRecord / array / {turn1: [{}, {}], turn2: [{}, {}]}

let Game = class {
  constructor(name, tokens, state, seats, turnOrderMethod, currentBoard) {
    this.name = name;
    this.tokens = tokens;
    this.state = state;
    this.seats = seats;
    this.currentBoard = currentBoard;
    this.turnOrderMethod = turnOrderMethod;
  }
  updateGameState(str){ this.state = str }
  saveBoard(cls){ this.currentBoard = cls }
}


// turn order method
// .sort((a, b) => { return a.turnRoll - b.turnRoll })
// push turn rolls into array, check for dupes, find first case with dupe
// // find only cares about the first
// // need to compare with the existing tie, not the other die rolls

// choose or set order...
// token is the only thing required to join a game, class will update with everything else
let Board = class {
  constructor() {
    this.players = [];
    this.roundNumber = 0;
    this.historyRecord = [];
  }
  // test new add player
  addPlayer(obj) { this.players.push(obj); this.updateAvailableTokens(obj.token); this.fillSeat(); }
  fillSeat(){ this.availableSeats -= 1 }
  nextRound(){ this.roundNumber += 1 }
  getTokens(obj){ this.availableTokens = obj }
  setAvailableSeats(num){ this.availableSeats = this.availableTokens.length }
  checkAvailableSeats(){ return this.availableSeats }
  // sort players by turnOrder
  // // hard code the turnOrder to test no dupes
  // method to check available seats
  // // if none, set turn orders
  // // // if ties, resolve ties in place on character
  // // // if no ties, save results as turn0 to history
  setTurnOrder(dSides){ this.players.sort((a, b) => { return b.turnRoll - a.turnRoll }) }
  // use sets to find dupes, find and reroll first dupe
  buildTurnArray(arr){ return arr.map(item => item.turnRoll) }
  // checkTies(arr){ let turnSet = new Set([...buildTurnArray]) }
  // instead of messing around with sets, toggle a won tie boolean? set a tieRoll?
  // double sort ==> Sort by roll first, sort by roll/tieRoll
  // ... or generate a series of unique random numbers and assign those
  // // if a.roll === b.roll {a.tieRoll - b.tieRoll}
  // {roll: 5, tieRoll: null} {roll: 3, tieRoll: 4} {roll: 3, tieRoll: 5}

  // // turnSet = new Set([...buildTurnArray])
  updateAvailableTokens(str){ this.availableTokens = this.availableTokens.filter((item, index) => { if(item !== str){ return item } } ) }
}

let Player = class {
  constructor(name) {
    this.name = name;
    this.token = null;
  }
  listTokens(obj){ return obj }
  chooseToken(str){ this.token = str }
  joinGame(cls, dSides){ this.turnRoll = roll[dSides](); this.game = cls; cls.addPlayer(this); }
  resolveTie(dSides){ this.turnRoll = roll[dSides]() }
}


// class board?
// // players array in constructor
// // players / array / arrayOfObjects?
// // whoseTurn / string
// // turnOrder (for round or game) / array
// // endOfTurnFunction // update Game.round // update Game.history

// extends class game (risk)
// // spoilsMarker-cardTradeIn / string?
// // country bonus as static property?
// // countryBonus / Obj / { northAmerica: 7, southAmerica: 4, europe: 5, africa: 3, asia: 7, austrailia: 4 }
// // countriesManifest / arrayOfObjects / {southAmerica: ["brazil", "mexico"]}
// // playersManifest / arrayOfObjects / {joe: function-getTerritoriesHeld }


// class person to house (basic game)
// // name / string
// // marker/identifier / string
// // turn number / number
// // score / number
// // turnActionsArray / arrayOfObjects / { player: string, actionNumber: number, action: string, result: array }
// // currentAction / string
// // currentResult / array

// extends class person (risk)
// // spoils / function-calculation / number
// // card sets / arrayOfObjects / { type1: string, type2: string, type3: string }
// // territories held array / arrayOfObjects / { northAmerica: [], europe: [], africa: [] }
// // totalTerritories / function-calucation / territories-forEach-reduce

// need to determine ties and re roll...
// // need to remember ranks of ties, first non tie rolls would be given preference
// // [1, 4, 6, 4, 4, 3, 3, 2, 1, 1]
// // 6, 4T, 4T, 4T, 3T, 3T, 2, 1T, 1T
// // [6, [4T, 4T, 4T], [3T, 3T], 2, [1T, 1T]]

// filter by but omit those that are empty
// think of this in terms of turnOrder as a position to be filled
// rename turnOrder as turnRoll
// use the index of the array as the turnOrder if it is the only value
// // [6, [4, 4, 4], 1] ==>
// // // 6 is only value and is first mark as resolved,
// // // 1 is only value and is last mark as resolved

// turnRolls.forEach((item, index) => { if(item.length === 1){ Object.assign(turnObject, {[index]: item}) } })
// fiveGroup = [5, 5, 5] ==> [6, [5, 5]] ==> [6, 4, [3]] ==> [6, 4, 3]
// // working = -1 / highest = [0] / highest = [arr.length]

// [4, 4, 4]
// let checkDupes = (arr, checks) => { let report = []; checks.forEach((item, index) => { if(arr.includes(item)){ report.push(item) } }); if(report.length === 1){ return true } else { return false } }
// // if false, find highest/lowest
// // count ties, while ties > 0, keep rerolling

// // let max = () => Math.max(...arr)
// index = (arr) => {return arr.indexOf(max(arr))} // max number


///////////////////////////////////////////////////
// pass in an array of sorted objects...
// dont do it in there, that's relying on a side effect
// findMax = (arr, turnArray) => {
//   let max;
//   max = arr.filter(item => item.turnRoll === arr[0].turnRoll);
//   turnArray.push(max);
//   // need to shift for each item in the max array
//   max.forEach(item => arr.shift())
//   return max;
// }

// pass in number of active seats... // as people are eliminated this count goes down...
// rebuild active array each turn?
// assume each is unique, if not, we can roll and sort within those existing positions
// Array(game.availableSeats).fill(0).forEach(item => findMax(playersQueue2))

////////
// checkDupes = (targetArray, turnArray, key, sides) => {
//  let results = [];
//  targetArray.sort((a, b) => { return b.turnRoll = a.turnRoll });
//  targetArray.forEach((item) => {
//    console.log(item.name, item.turnRoll, targetArray[0].name);
//    if(item.turnRoll === targetArray[0].turnRoll){
//      results.push(true)
//    } else {
//      results.push(false)
//    }}); console.log(results);
// // there's something wrong here... you'll need to add the -1 array
//  if(results.includes(false)){ findMax( targetArray, turnArray[-1]) }
// // roll, sort, find winner...
//  else { targetArray.forEach(item => item.turnRoll = roll[`d${sides}`]()) } }

//////////// resolve highest might not be needed
////////////
// resolveHighest = (arr, turnArray) => { if(arr.length === 1){ turnArray.push(arr) } }

////////////
// resolveQueue = (arr) => { arr.forEach((item) => { if(item.length === 0){ console.log('nobody rolled this') } else if(item.length === 1){ resolveHighest(item, playersQueue[-1]) } else { checkDupes(item, playersQueue[-1], "turnOrder", 6) } }) }

// find the max, filter on that value, push to array
// while multiple, reroll, when not, sort...
// -1: [6], [5, 5, 5] ==> [5, 4, 4] ==> find max, if only, push to -1

//


// working group [4T, 4T, 4T] ==> reroll ==> [5, 4T, 4T] ==> move highest to 4 group ==> [5]

// // [...6Group, ...5Group, ...4Group, ...3Group, ...2Group, ...1Group]
// // //
// // // dont sort like this, if you have multiple rounds of ties it wont work
// // // wrong: turnOrder = [...sixGroup.sort((a, b) => {return b.turnOrder - a.turnOrder})]
// // // remove highest and put into turn order to avoid being caught in the sort
// // // if same, reroll same [5, 4, 4]

// resolveTies(checkTies())
// while arr.length > X {resolveTies(checkTies())}

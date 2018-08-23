# Component - JS15 Game

The fully functional JS15 game.
It is keyboard accessible for movement, pause, reset, and instructions which is the whole game.

The component is class based and includes 10 pieces of state and 0 props.
There are 3 pices of state for helping to track keyboard controls.

Currently the game is set to a 4x4 grid so there is no need for props to be passed in.

The gameIs and hasBeenWon states are for game status functions.
The numberOfMoves is for the move counter.
The startingArray state is the array of numbers for the puzzle and begin in order as does the intial puzzle object.

The thisPuzzle object is what is updated thruout the game and the values are comapred for sequential order to trigger the win modal.

The destination state is to track where the number to be moved is heading/the current empty position.

## Background and Thoughts

The interesting part of the puzzle is being sure that it is solvable.
It is determined by the number of inversions in the number array.
I had found a few ways to go about this.

* [WikiPedia 15 Game](https://en.wikipedia.org/wiki/15_puzzle)
* [Solvability Article](https://www.cs.bham.ac.uk/~mdr/teaching/modules04/java2/TilesSolvability.html)
* [Sovability Article](http://mathworld.wolfram.com/15Puzzle.html)


Below is the link to the file that powers this component.

[JS 15 Game]()

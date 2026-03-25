import { Hex } from "../models/Hex";
import { Resource } from "../types/Resource";

// Generate the stack to represent the board and shuffle
let numbers: number[] = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12, 0]
let resources: Resource[] = [Resource.Ore, Resource.Ore, Resource.Ore, Resource.Brick, Resource.Brick, Resource.Brick, Resource.Sheep, Resource.Sheep, Resource.Sheep, Resource.Sheep, Resource.Wheat, Resource.Wheat, Resource.Wheat, Resource.Wheat, Resource.Wood, Resource.Wood, Resource.Wood, Resource.Wood, Resource.Desert]

// Need shuffle method
const simpleShuffle = (array: any[]): any[] => {
  return array.sort(() => Math.random() - 0.5);
};

// array to store initial hexes
const hexes: Hex[] = []

for (let i = 0; i < numbers.length; i++) {
    const newHex: Hex = new Hex(numbers[i], resources[i])
    hexes.push(newHex)
}

// shuffle hexes
const shuffledHexes = simpleShuffle(hexes)

// Board ==> array of hexes
const board: Hex[][] = [[], [], [], [], []]

for (let i = 0; i < shuffledHexes.length; i++) {
    // Does this suck? not sure
    // Two d array does logically represent board better though
    if (i < 3) {
        board[0].push(shuffledHexes[i])
    } else if (i < 7) {
        board[1].push(shuffledHexes[i])
    } else if (i < 12) {
        board[2].push(shuffledHexes[i])
    } else if (i < 16) {
        board[3].push(shuffledHexes[i])
    } else {
        board[4].push(shuffledHexes[i])
    }
}

console.log(board)

export default board;
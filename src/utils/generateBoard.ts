import { Hex } from "../models/Hex";
import { Resource } from "../types/Resource";

// Generate the stack to represent the board and shuffle
const numbers: number[] = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12, 0]
const resources: Resource[] = [Resource.Ore, Resource.Ore, Resource.Ore, Resource.Brick, Resource.Brick, Resource.Brick, Resource.Sheep, Resource.Sheep, Resource.Sheep, Resource.Sheep, Resource.Wheat, Resource.Wheat, Resource.Wheat, Resource.Wheat, Resource.Wood, Resource.Wood, Resource.Wood, Resource.Wood, Resource.Desert]
console.log(numbers.length)
console.log(resources.length)
// Need shuffle method

// Don't forget to add the desert

// Board ==> array of hexes
const board: Hex[][] = [[], [], [], [], []]

for (let i = 0; i < numbers.length; i++) {
    const newHex: Hex = new Hex(numbers[i], resources[i])

    // Does this suck? not sure
    // Two d array does logically represent board better though
    if (i < 3) {
        board[0].push(newHex)
    } else if (i < 7) {
        board[1].push(newHex)
    } else if (i < 12) {
        board[2].push(newHex)
    } else if (i < 16) {
        board[3].push(newHex)
    } else {
        board[4].push(newHex)
    }

    console.log(board[3])
    console.log(board[4])
}

export default board;
import './App.css'
import { HexRow } from './components/HexRow'
import board from './utils/generateBoard'

function App() {
  // const oreFiveHex = new Hex(5, Resource.Ore)
  // const brickEightHex = new Hex(8, Resource.Brick)
  // const sheepElevenHex = new Hex(11, Resource.Sheep)

  // const hexes: Hex[] = [oreFiveHex, brickEightHex, sheepElevenHex];

  return (
    <>
      <div style={{display: "flex", flexDirection: "column", height: "100vh", justifyContent: "center", alignItems: "center"}}>
        <HexRow hexes={board[0]} />
        <HexRow hexes={board[1]} />
        <HexRow hexes={board[2]} />
        <HexRow hexes={board[3]} />
        <HexRow hexes={board[4]} />
      </div>
    </>
  )
}

export default App

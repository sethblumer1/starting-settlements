import './App.css'
import { Hex } from './models/Hex'
import { HexRow } from './components/HexRow'
import { Resource } from './types/Resource'

function App() {
  const oreFiveHex = new Hex(5, Resource.Ore)
  const brickEightHex = new Hex(8, Resource.Brick)
  const sheepElevenHex = new Hex(11, Resource.Sheep)

  const hexes: Hex[] = [oreFiveHex, brickEightHex, sheepElevenHex];

  return (
    <>
      <div style={{display: "flex", height: "100vh", justifyContent: "center", alignItems: "center"}}>
        <HexRow hexes={hexes} />
      </div>
    </>
  )
}

export default App

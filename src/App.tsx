import './App.css'
import { Hex } from './models/Hex'
import { HexTile } from './components/HexTile'
import { Resource } from './types/Resource'

function App() {
  const oreFiveHex = new Hex(5, Resource.Ore)

  return (
    <>
      <div style={{display: "flex", height: "100vh", justifyContent: "center", alignItems: "center"}}>
        <HexTile hex={oreFiveHex} />
      </div>
    </>
  )
}

export default App

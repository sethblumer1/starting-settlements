// Types
import { Hex } from "../models/Hex"
import { HexTile } from "./HexTile"

// Styles
import "../styles/hex-row.css"

type HexTileProps = {
    hexes: Hex[]
}

export const HexRow = ({ hexes }: HexTileProps) => {
  return (
    <div className="hex-row-container">
        {hexes.map((hex) => {
            return <HexTile hex={hex} />
        })}
    </div>
  )
}
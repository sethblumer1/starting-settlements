// Types
import { Hex } from "../models/Hex"
import { HexTile } from "./HexTile"

// Styles
// import "../styles/hex-row.css"

type HexRowProps = {
    hexes: Hex[],
}

export const HexRow = ({ hexes }: HexRowProps) => {
  // Determine how many columns will be in the 'grid',
  // i.e. number of hexes in the row. If there are 4 hexes in the row,
  // the styling would look like grid-template-columns: auto auto auto auto;

  // maybe this should be in utils
  const auto = "auto"
  let gridStr = ""
  for (let i = 0; i < hexes.length; i++) {
    gridStr += auto
    if (i != hexes.length - 1) {
      gridStr += ' '
    }
  }

  return (
    <div style={{display: "inline-grid", gridTemplateColumns: gridStr, marginTop: "-61px"}}>
        {hexes.map((hex) => {
            return <HexTile hex={hex} />
        })}
    </div>
  )
}
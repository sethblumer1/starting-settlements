import { useEffect } from "react"
import { Hex } from "../models/Hex"
import "../styles/hex-tile.css"

type HexTileProps = {
  hex: Hex
}

export const HexTile = ({ hex }: HexTileProps) => { 
  const drawHex = () => {
    const hexCanvas = document.getElementById(`hexCtx${hex.num}${hex.resource}`) as HTMLCanvasElement
    const ctx = hexCanvas.getContext("2d")!
    const w = hexCanvas.width;
    const h = hexCanvas.height;

    // Fill in appropriate color
    // TODO: color should change based on resource type
    if (hex.resource === "Ore") {
      ctx.fillStyle = "#b8ccd6"
    } else if (hex.resource === "Brick") {
      ctx.fillStyle = "#ff6b4a"
    } else if (hex.resource === "Sheep") {
      ctx.fillStyle = "#39ff7a"
    } else if (hex.resource === "Wheat") {
      ctx.fillStyle = "#ffd43b"
    } else {
      ctx.fillStyle = "#2ecc71"
    }

    // Draw triangle
    ctx.beginPath();
    ctx.moveTo(w / 6, h / 4 + 1);
    ctx.lineTo(w / 2, 0);
    ctx.lineTo(w - h / 6, h / 4 + 1);
    ctx.fill();

    // Draw rectangle
    ctx.fillRect(w / 6 + 1, h / 4, w * .66666 - 2, h / 3 + 1)

   // Fill bottom triangle
    ctx.beginPath();
    ctx.moveTo(w / 6, h / 4 + h / 3);
    ctx.lineTo(w / 2, h - h / 6);
    ctx.lineTo(w - w / 6, h / 4 + h / 3);
    ctx.fill();
  }

  useEffect(() => {
    drawHex()
  }, [])

  // useEffect(() => {
  //   // get dimensions and put number in middle of hex
  //   const dimensions = document.getElementById("hexCtx")?.getBoundingClientRect()
  //   console.log(dimensions)

  //   const numberDiv = document.createElement("div")
  //   numberDiv.style.position = "absolute"
  //   const midPoint = ((dimensions!.right - dimensions!.left) / 2) + dimensions!.left  
  //   numberDiv.style.left = (midPoint - 5) + 'px'
  //   numberDiv.style.top = dimensions!.top.toString() + 'px'
  //   numberDiv.textContent = hex.num.toString()
  //   numberDiv.style.zIndex = "9999"

  //   const hexConatiner = document.getElementById("hexContainer")
  //   hexConatiner?.appendChild(numberDiv)

  // }, [])

  useEffect(() => {
    // if (document.getElementById("hexNumber")) return

    // const numberDiv = document.createElement("div")
    // numberDiv.id = "hexNumber"
    // numberDiv.className = `hexNumber${[6, 8].includes(hex.num) ? ' hot' : ''}`
    // numberDiv.textContent = hex.num.toString()

    // const hexContainer = document.getElementById("hexContainer")
    // hexContainer?.appendChild(numberDiv)
  }, [])

  return (
    <>
      {/* Testing out prop */}
      {/* <div>{hex.num}</div> */}

      <div className="hex-container" style={{display: "flex", alignItems: "center"}}>
        <canvas className="hex-context" id={`hexCtx${hex.num}${hex.resource}`} width="150" height="150" style={{zIndex: 1, padding: 0, marginRight: -47.5}}></canvas>
      </div>
    </>
  )
}
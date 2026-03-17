import { useEffect, useRef } from "react"
import { Hex } from "../models/Hex"
import "../styles/hex-tile.css"

type HexTileProps = {
  hex: Hex
}

export const HexTile = ({ hex }: HexTileProps) => { 
  // To save specific tile to add number elem; 
  // necessary because we are using the absolute positioning
  // const tileRef = useRef(null)

  // Id for hex canvas
  const hexCtxId: string = `hexCtx${hex.num}${hex.resource}`

  const drawHex = () => {
    const hexCanvas = document.getElementById(hexCtxId) as HTMLCanvasElement
    const ctx = hexCanvas.getContext("2d")!
    const w = hexCanvas.width;
    const h = hexCanvas.height;

    // set background color
    ctx.fillStyle = hex.color as string;

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
    // const dimensions = document.getElementById(hexCtxId)?.getBoundingClientRect()
    // console.log(dimensions)

    // const numberDiv = document.createElement("div")
    // numberDiv.style.position = "absolute"
    // const midPoint = ((dimensions!.right - dimensions!.left) / 2) + dimensions!.left  
    // numberDiv.style.left = (midPoint - 5) + 'px'
    // numberDiv.style.top = dimensions!.top.toString() + 'px'
    // numberDiv.textContent = hex.num.toString()
    // numberDiv.style.zIndex = "9999"

    // const hexConatiner = document.getElementById("hexContainer")
    // hexConatiner?.appendChild(numberDiv)

  // }, [])

  // useEffect(() => {
  //   if (document.getElementById("hexNumber")) return

  //   const numberDiv = document.createElement("div")
  //   numberDiv.id = "hexNumber"
  //   numberDiv.className = `hexNumber${[6, 8].includes(hex.num) ? ' hot' : ''}`
  //   numberDiv.textContent = hex.num.toString()

  //   const hexContainer = document.getElementById("hexContainer")
  //   hexContainer?.appendChild(numberDiv)
  // }, [])

  return (
    <>
      {/* Testing out prop */}
      {/* <div>{hex.num}</div> */}

      <div className="hex-container" style={{display: "flex", alignItems: "center"}}>
        <canvas className="hex-context" id={hexCtxId} width="150" height="150" style={{zIndex: 1, padding: 0, marginRight: -47.5}}></canvas>
      </div>
    </>
  )
}
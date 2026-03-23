import { useEffect, useRef } from "react"
import { Hex } from "../models/Hex"
import "../styles/hex-tile.css"
import { Resource } from "../types/Resource"

type HexTileProps = {
  hex: Hex
}

// To ensure each has a unique ID
function generateRandomString(length: number, charset: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'): string {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return result;
}

export const HexTile = ({ hex }: HexTileProps) => { 
  // To save specific tile to add number elem; 
  // necessary because we are using the absolute positioning
  const tileContainerRef = useRef(null); const tileRef = useRef(null)

  // Id for hex canvas
  const hexCtxId: string = `hexCtx${hex.num}${hex.resource}${generateRandomString(3)}`

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

    if (tileContainerRef.current && tileRef.current && hex.resource != Resource.Desert) {
      const tileElem = tileRef.current as HTMLElement
      const dimensions = tileElem.getBoundingClientRect()

      const numberDiv = document.createElement("div")

      numberDiv.className = "hex-number"
      numberDiv.textContent = hex.num.toString()

      // Todo: better way to do this?
      if (hex.num === 8 || hex.num === 6) {
        numberDiv.style.color = "#c0392b"
      }

      const tileContainerElem = tileContainerRef.current as HTMLElement
      tileContainerElem?.appendChild(numberDiv)

      // Old way; not sure why we ever used dimensions
      // numberDiv.style.position = "absolute" 
      // numberDiv.style.left = "65%"
      // numberDiv.style.top = "35%"
      // numberDiv.textContent = hex.num.toString()
      // numberDiv.style.zIndex = "9999"

      // const tileContainerElem = tileContainerRef.current as HTMLElement
      // tileContainerElem?.appendChild(numberDiv)
    }
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

      <div className="hex-container" ref={tileContainerRef} style={{display: "flex", alignItems: "center"}}>
        <canvas className="hex-context" id={hexCtxId} ref={tileRef} width="150" height="150" style={{zIndex: 1, marginRight: -47.5}}></canvas>
      </div>
    </>
  )
}
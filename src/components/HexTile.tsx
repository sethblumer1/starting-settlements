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

    // To save position of vertices, need base position + first point

    // console.log("first triangle coords: ")
    // console.log(w / 6, h / 4 + 1);

    ctx.moveTo(w / 6, h / 4 + 1);

    // console.log("second triangle coords: ")
    // console.log(w / 2, 0);

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

    // console.log(ctx)
    ctx.fill();
  }

  useEffect(() => {
    drawHex()

    if (tileContainerRef.current && tileRef.current && hex.resource != Resource.Desert) {
      const tileElem = tileRef.current as HTMLElement
      const dimensions = tileElem.getBoundingClientRect()

      // testing element at top  corner
      const top = document.createElement("div")
      top.style.backgroundColor = "white"
      top.style.width = "5px"
      top.style.height = "5px"
      top.style.borderRadius = "50%"

      top.style.left = "71.5%"
      top.style.top = "0%"
      top.style.zIndex = "9999"
      top.style.position = "absolute"
      
      // testing element at top left corner
      const topLeft = document.createElement("div")
      topLeft.style.backgroundColor = "white"
      topLeft.style.width = "5px"
      topLeft.style.height = "5px"
      topLeft.style.borderRadius = "50%"

      topLeft.style.left = "25%"
      topLeft.style.top = "25%"
      topLeft.style.zIndex = "9999"
      topLeft.style.position = "absolute"

      // testing element at top right corner
      const topRight = document.createElement("div")
      topRight.style.backgroundColor = "white"
      topRight.style.width = "5px"
      topRight.style.height = "5px"
      topRight.style.borderRadius = "50%"

      topRight.style.left = "120%"
      topRight.style.top = "25%"
      topRight.style.zIndex = "9999"
      topRight.style.position = "absolute"

      // testing element at bottom left corner
      const bottomLeft = document.createElement("div")
      bottomLeft.style.backgroundColor = "white"
      bottomLeft.style.width = "5px"
      bottomLeft.style.height = "5px"
      bottomLeft.style.borderRadius = "50%"

      bottomLeft.style.left = "25%"
      bottomLeft.style.top = "58%"
      bottomLeft.style.zIndex = "9999"
      bottomLeft.style.position = "absolute"

      // testing element at bottom right corner
      const bottomRight = document.createElement("div")
      bottomRight.style.backgroundColor = "white"
      bottomRight.style.width = "5px"
      bottomRight.style.height = "5px"
      bottomRight.style.borderRadius = "50%"

      bottomRight.style.left = "120%"
      bottomRight.style.top = "58%"
      bottomRight.style.zIndex = "9999"
      bottomRight.style.position = "absolute"

      // testing element at bottom corner
      const bottom = document.createElement("div")
      bottom.style.backgroundColor = "white"
      bottom.style.width = "5px"
      bottom.style.height = "5px"
      bottom.style.borderRadius = "50%"

      bottom.style.left = "71.5%"
      bottom.style.top = "80%"
      bottom.style.zIndex = "9999"
      bottom.style.position = "absolute"

      // div for number
      const numberDiv = document.createElement("div")

      numberDiv.className = "hex-number"
      numberDiv.textContent = hex.num.toString()

      // Todo: better way to do this?
      if (hex.num === 8 || hex.num === 6) {
        numberDiv.style.color = "#c0392b"
      }

      const tileContainerElem = tileContainerRef.current as HTMLElement
      tileContainerElem?.appendChild(numberDiv)

      // Dots to represent vertices
      tileContainerElem?.appendChild(top)
      tileContainerElem?.appendChild(topLeft)
      tileContainerElem?.appendChild(topRight)
      tileContainerElem?.appendChild(bottomLeft)
      tileContainerElem?.appendChild(bottomRight)
      tileContainerElem?.appendChild(bottom)
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
      <div className="hex-container" ref={tileContainerRef} style={{display: "flex", alignItems: "center"}}>
        <canvas className="hex-context" id={hexCtxId} ref={tileRef} width="150" height="150" style={{zIndex: 1, marginRight: -48.5}}></canvas>
      </div>
    </>
  )
}
import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */
const FileSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Icons"
    fill="#000"
    viewBox="0 0 32 32"
    {...props}
  >
    <G id="SVGRepo_iconCarrier">
      <Path d="M20 2.6V8h5.4z" />
      <Path d="M23.5 10H19c-.6 0-1-.4-1-1V2H7c-.6 0-1 .4-1 1v26c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V12.5c0-1.4-1.1-2.5-2.5-2.5zM15 19h-4c-.6 0-1-.4-1-1s.4-1 1-1h4c.6 0 1 .4 1 1s-.4 1-1 1zm3-4h-7c-.6 0-1-.4-1-1s.4-1 1-1h7c.6 0 1 .4 1 1s-.4 1-1 1z" />
    </G>
  </Svg>
)
export default FileSvg

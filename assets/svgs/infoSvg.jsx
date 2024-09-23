import * as React from "react"
import Svg, { Path } from "react-native-svg"
const InfoSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M29 16a13 13 0 1 1-26 0 13 13 0 0 1 26 0h0z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 14h1v9h1"
    />
    <Path fill="#000" d="M17.5 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
  </Svg>
)
export default InfoSvg

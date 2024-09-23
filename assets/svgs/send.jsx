import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SendSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon glyph"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      d="M21.66 12a2 2 0 0 1-1.14 1.81L5.87 20.75A2.08 2.08 0 0 1 5 21a2 2 0 0 1-1.82-2.82L5.46 13H11a1 1 0 0 0 0-2H5.46L3.18 5.87a2 2 0 0 1 2.68-2.62l14.65 6.94A2 2 0 0 1 21.66 12Z"
      style={{
        fill: "#231f20",
      }}
    />
  </Svg>
)
export default SendSvg

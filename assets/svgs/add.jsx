import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
const AddSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G stroke="#000" strokeLinecap="round" strokeWidth={1.5}>
      <Path d="M11.998 5.844V18.16M18.156 12.002H5.84" />
    </G>
  </Svg>
)
export default AddSvg

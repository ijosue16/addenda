import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */
const BellSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="_x32_"
    width={200}
    height={200}
    fill="#000"
    viewBox="0 0 512 512"
    {...props}
  >
    <G id="SVGRepo_iconCarrier">
      <Path
        d="M193.499 459.298A63.263 63.263 0 0 0 255.989 512a63.274 63.274 0 0 0 62.506-52.702l.32-1.86H193.179l.32 1.86zM469.782 371.98c-5.126-5.128-10.349-9.464-15.402-13.661-21.252-17.648-39.608-32.888-39.608-96.168v-50.194c0-73.808-51.858-138.572-123.61-154.81 2.876-5.64 4.334-11.568 4.334-17.655C295.496 17.718 277.777 0 255.995 0c-21.776 0-39.492 17.718-39.492 39.492 0 6.091 1.456 12.018 4.334 17.655-71.755 16.238-123.61 81.002-123.61 154.81v50.194c0 63.28-18.356 78.521-39.608 96.168-5.052 4.196-10.276 8.533-15.402 13.661l-.466.466v49.798h428.496v-49.798l-.465-.466z"
        className="st0"
      />
    </G>
  </Svg>
)
export default BellSvg

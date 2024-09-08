import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
const EyeSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G stroke="#1C274C" strokeWidth={1.7}
    {...props}
    >
      <Path
        strokeLinecap="round"
        d="M9 4.46A9.84 9.84 0 0 1 12 4c4.182 0 7.028 2.5 8.725 4.704C21.575 9.81 22 10.361 22 12c0 1.64-.425 2.191-1.275 3.296C19.028 17.5 16.182 20 12 20c-4.182 0-7.028-2.5-8.725-4.704C2.425 14.192 2 13.639 2 12c0-1.64.425-2.191 1.275-3.296A14.465 14.465 0 0 1 5 6.821"
      />
      <Path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </G>
  </Svg>
)
export default EyeSvg

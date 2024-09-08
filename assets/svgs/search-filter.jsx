import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SearchFilterSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M14 5h6M14 8h3M21 11.5c0 5.25-4.25 9.5-9.5 9.5S2 16.75 2 11.5 6.25 2 11.5 2M22 22l-2-2"
      {...props}
    />
  </Svg>
)
export default SearchFilterSvg

import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ChatSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#00"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#000"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.591l2.226-.595a1.634 1.634 0 0 1 1.149.133A9.958 9.958 0 0 0 12 22Z"
      {...props}
    />
    <Path
      fill="#fff"
      d="M15 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM7 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"
    />
  </Svg>
)
export default ChatSvg

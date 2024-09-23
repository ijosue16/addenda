import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
const BagSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <G fill="#333" fillRule="evenodd" clipRule="evenodd">
      <Path d="M24.043 4c-5.018 0-9.591 1.657-12.296 3.012a22.32 22.32 0 0 0-.685.358c-.42.229-.777.443-1.062.63l3.078 4.53 1.448.577c5.663 2.857 13.256 2.857 18.92 0l1.644-.853L38 8a17.227 17.227 0 0 0-1.876-1.063C33.43 5.597 28.969 4 24.044 4Zm-7.158 5.13a27.293 27.293 0 0 1-3.223-.81C16.197 7.193 19.974 6 24.043 6c2.82 0 5.485.573 7.69 1.3-2.584.364-5.341.98-7.968 1.74-2.066.597-4.482.531-6.88.09Z" />
      <Path d="m34.618 14.756-.272.137c-6.23 3.143-14.491 3.143-20.72 0l-.26-.13C4.01 25.03-5.808 44.284 24.043 43.996c29.83-.288 19.86-19.32 10.575-29.241ZM25.711 22H22.29v1.6a4.44 4.44 0 0 0-2.982 1.122 3.886 3.886 0 0 0-1.305 2.747 3.851 3.851 0 0 0 1.11 2.82 4.401 4.401 0 0 0 2.896 1.303l.28.008h3.423l.154.013a.87.87 0 0 1 .505.274.77.77 0 0 1 .199.513.77.77 0 0 1-.2.513.87.87 0 0 1-.504.274l-.154.013h-6.845v3.2h3.423V38h3.422v-1.6a4.44 4.44 0 0 0 2.982-1.122 3.886 3.886 0 0 0 1.305-2.747 3.851 3.851 0 0 0-1.11-2.82 4.401 4.401 0 0 0-2.896-1.303l-.28-.008h-3.423l-.154-.013a.87.87 0 0 1-.505-.274.77.77 0 0 1-.199-.513.77.77 0 0 1 .2-.513.87.87 0 0 1 .504-.274l.154-.013h6.845v-3.2H25.71V22Z" />
    </G>
  </Svg>
)
export default BagSvg

import { Path, Svg, SvgProps } from "react-native-svg"

function Play({
    width = 24,
    height = 24,
    ...rest
  }: SvgProps) {
    return (
      <Svg
        width={width}
        height={height}
        viewBox="0 0 35 40"
        fill="none"
        {...rest}
      >
        <Path
          d="M33.5 17.404c2 1.155 2 4.042 0 5.196L5 39.055C3 40.209.5 38.766.5 36.457V3.547C.5 1.239 3-.204 5 .95l28.5 16.454z"
          fill="currentColor"
        />
      </Svg>
    )
  }
  
  export default Play
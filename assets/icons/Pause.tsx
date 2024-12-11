import { Path, Svg, SvgProps } from "react-native-svg"

function Pause({
    width = 24,
    height = 24,
    ...rest
  }: SvgProps) {
    return (
      <Svg
        width={width}
        height={height}
        viewBox="0 0 24 41"
        fill="none"
        {...rest}
      >
        <Path
          d="M3.758 40.02A3.645 3.645 0 011.1 38.848 4.138 4.138 0 010 36.018V4.002c0-1.061.396-2.08 1.1-2.83A3.645 3.645 0 013.759 0c.996 0 1.952.422 2.657 1.172.704.75 1.1 1.769 1.1 2.83v32.016c0 1.061-.396 2.08-1.1 2.83a3.645 3.645 0 01-2.657 1.172zM20.242 40.02a3.645 3.645 0 01-2.657-1.172 4.138 4.138 0 01-1.1-2.83V4.002c0-1.061.396-2.08 1.1-2.83A3.645 3.645 0 0120.242 0c.997 0 1.953.422 2.657 1.172.705.75 1.1 1.769 1.1 2.83v32.016c0 1.061-.395 2.08-1.1 2.83a3.645 3.645 0 01-2.657 1.172z"
          fill="currentColor"
        />
      </Svg>
    )
  }
  
  export default Pause
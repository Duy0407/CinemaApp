import { Path, Svg, SvgProps } from "react-native-svg";

function ArrowUpIcon({ width = 24, height = 24, ...rest }: SvgProps) {
  return (
    <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    {...rest}
    >
      <Path
        d="M11.7256 4.25L11.7256 19.25"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.70124 10.2998L11.7252 4.2498L17.7502 10.2998"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ArrowUpIcon;

import { Path, Svg, SvgProps } from "react-native-svg";

function DoneIcon({ width = 24, height = 24, ...rest }: SvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...rest}
    >
      <Path
        d="M17.9951 6.00043C17.7353 6.00818 17.4888 6.11676 17.3076 6.30317L9.01467 14.5961L5.7217 11.3032C5.62956 11.2072 5.51919 11.1306 5.39706 11.0778C5.27493 11.025 5.1435 10.9971 5.01046 10.9958C4.87742 10.9944 4.74544 11.0196 4.62227 11.0699C4.49909 11.1202 4.38718 11.1946 4.29311 11.2886C4.19903 11.3827 4.12467 11.4946 4.07438 11.6178C4.02409 11.741 3.99888 11.8729 4.00023 12.006C4.00159 12.139 4.02947 12.2705 4.08226 12.3926C4.13504 12.5147 4.21167 12.6251 4.30764 12.7172L8.30764 16.7172C8.49518 16.9047 8.7495 17.01 9.01467 17.01C9.27984 17.01 9.53416 16.9047 9.7217 16.7172L18.7217 7.71723C18.8662 7.57677 18.9649 7.39593 19.0049 7.19841C19.0448 7.00089 19.0242 6.7959 18.9456 6.61032C18.8671 6.42473 18.7343 6.2672 18.5647 6.15838C18.3951 6.04955 18.1966 5.99449 17.9951 6.00043Z"
        fill="#637394"
      />
    </Svg>
  );
}

export default DoneIcon;

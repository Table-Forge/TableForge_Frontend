import { Path, Svg } from "react-native-svg";
import { IconsProps } from "./interface";

export const SlidersIcon = ({ color, size }: IconsProps) => {
  return (
    <Svg width={size || 18} height={size || 18} viewBox="0 0 18 18" fill="none">
      <Path
        d="M15.75 3H10.5"
        stroke={color || "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.5 3H2.25"
        stroke={color || "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.75 9H9"
        stroke={color || "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 9H2.25"
        stroke={color || "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.75 15H12"
        stroke={color || "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 15H2.25"
        stroke={color || "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.5 1.5V4.5"
        stroke={color || "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 7.5V10.5"
        stroke={color || "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 13.5V16.5"
        stroke={color || "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

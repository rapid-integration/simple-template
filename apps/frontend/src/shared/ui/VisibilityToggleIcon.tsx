"use client";

import { HiMiniEye, HiMiniEyeSlash } from "react-icons/hi2";

const style = {
  width: "var(--psi-icon-size)",
  height: "var(--psi-icon-size)",
} satisfies React.CSSProperties;

export type VisibilityToggleIconProps = {
  reveal: boolean;
};

export const VisibilityToggleIcon: React.FC<VisibilityToggleIconProps> = ({
  reveal,
}) => {
  return reveal ? (
    <HiMiniEyeSlash style={style} />
  ) : (
    <HiMiniEye style={style} />
  );
};

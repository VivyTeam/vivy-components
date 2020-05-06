export const hexToRGBA = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

const colors = {
  primary: "#03D4BF",
  destructive: "#E63644",
  affirmative: "#189F59",
  warning: "#D97508",
  white: "#FFFFFF",
  destructiveDim: "#FFE1E1",
  affirmativeDim: "#E8F5E5",
  warningDim: "#FFF6D1",
  textPrimary: "#353F41",
  textSecondary: "#7B7B7B",
  textInactive: "#BFBFBF",
  textActive: "#00BFAC",
  divider: "#E0E0E0",
  background: "#F8F7F5",
};

export default colors;

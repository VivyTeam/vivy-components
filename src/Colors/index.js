export const hexToRGBA = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

const primary = "#353F41";
const primaryHover = "#05e6c8";
const error = "#e94119";
const errorBackground = "#fce6e4";
const gray = "#cdcdcd";
const darkgray = "#4c4c4c";
const headerColor = "#575756";
const hint = "#898988";
const primarybackground = "#fff";
const secondarybackground = "#f7f7f7";
const cardbackground = "#fefefe";

// maintaining these names colors to avoid introducing breaking changes (for now).
export {
  primary,
  gray,
  darkgray,
  primarybackground,
  secondarybackground,
  error,
  errorBackground,
  primaryHover,
  headerColor,
  hint,
  cardbackground
};

// this is v2
const colors = {
  brandPrimary: "#03D4BF",
  brandAlternative: "#00BFAC",

  textPrimary: "#353F41",
  textSecondary: "#7B7B7B",
  textInactive: "#BFBFBF",
  divider: "#E0E0E0",

  backgroundPrimary: "#F5F5F5",
  backgroundSecondary: "#FAFAFA",
  backgroundBrand: "#F8F7F5",

  brandDestructive: "#EB5A47",
  brandAffirmative: "#61BD4F",
  brandWarning: "#FFBD00",

  white: "#FFFFFF"
};
export default colors;

/**
 * @deprecated
 * You can derive the Colors type from the DefaultChakraTheme:
 *
 * type Colors = DefaultChakraTheme["colors"]
 */
export type Colors = typeof colors

const colors = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000000",
  white: "#FFFFFF",

  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)",
  },

  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)",
  },

  gray: {
    25: "#F5F5F5", //ECE - ExtraLight
    50: "#E0E0E0", //ECE - Grey-Light
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#808080", //ECE - Grey-Medium
    600: "#474747", //ECE - Grey-Dark
    700: "#292929",
    800: "#1A202C",
    900: "#171923",
  },

  red: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C30000", //ECE - Error
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B",
  },

  orange: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19",
  },

  yellow: {
    50: "#FFFFF0",
    100: "#FEFCBF",
    200: "#FCE0A9", //ECE Yelow-graph-dimmed
    300: "#F6E05E",
    400: "#ECC94B",
    500: "#F9B122", //ECE - Yellow
    600: "#B7791F",
    700: "#975A16",
    800: "#744210",
    900: "#5F370E",
  },

  green: {
    50: "#F0FFF4",
    100: "#C6F6D5",
    200: "#9AE6B4",
    300: "#68D391",
    400: "#48BB78",
    500: "#50A759",
    600: "#2F855A",
    700: "#276749",
    800: "#22543D",
    900: "#1C4532",
  },

  blue: {
    50: "#E6EEF5",  //ECE - Blue-Light
    100: "#bee3f8",
    200: "#90BEE6",  //ECE - Blue-graph-dimmed
    300: "#4485BD",  // - gradient start
    400: "#3476AE",  //ECE - Text Disabled Blue 
    500: "#0B5A9D",  //ECE - Disabled Blue 
    600: "#005399",  //ECE - Blue
    700: "#003866",
    800: "#142533",
    900: "#001C33",
  },

  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666",
  },

  gradient: {
    "radial-blue-600-300": "radial-gradient(100% 351.56% at 100% 100%, #4485BD 0%, #005399 100%)"
  }
}

export default colors

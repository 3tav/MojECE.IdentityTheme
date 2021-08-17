const baseStyle = {
  fontFamily: "heading",
  fontWeight: "normal",
}

const sizes = {
  "4xl": {
    fontSize: ["lg", null, "2xl"],
    lineHeight: 1.5,
  },
  "3xl": {
    fontSize: ["lg", null, "xl"],
    lineHeight: 1.5,
  },
  "2xl": {
    fontSize: ["md", null, "lg"],
    lineHeight: 1.5,
  },
  xl: {
    fontSize: ["3xl", null, "4xl"],
    lineHeight: 1.5,
  },
  lg: {
    fontSize: ["2xl", null, "3xl"],
    lineHeight: 1.5,
  },
  md: { fontSize: "xl", lineHeight: 1.5 },
  sm: { fontSize: "md", lineHeight: 1.5 },
  xs: { fontSize: "sm", lineHeight: 1.5 },
}

const defaultProps = {
  size: "xl",
}

const style = { baseStyle, sizes, defaultProps }

export default style

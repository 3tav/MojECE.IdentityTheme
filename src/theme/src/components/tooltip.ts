import { mode } from "@chakra-ui/theme-tools"

function baseStyle(props: Record<string, any>) {
  return {
    px: "8px",
    py: "2px",
    bg: mode("blue.300", "blue.300")(props),
    color: mode("white", "white")(props),
    borderRadius: "none",
    fontWeight: "medium",
    fontSize: "sm",
    boxShadow: "input",
    maxW: "320px",
    zIndex: "tooltip",
  }
}

export default {
  baseStyle,
}

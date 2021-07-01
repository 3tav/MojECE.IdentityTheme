import { createBreakpoints } from "@chakra-ui/theme-tools"

/**
 * Breakpoints for responsive design
 */
const breakpoints = createBreakpoints({
  base: "0em" as const,
  sm: "30em",
  md: "48em",
  lg: "62em", // 372px
  xl: "80em", // 1280px
  "2xl": "96em", // 1536px
  "3xl": "112em", // 1792px
})

export default breakpoints

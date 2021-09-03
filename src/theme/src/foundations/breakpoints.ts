import { createBreakpoints } from "@chakra-ui/theme-tools"

/**
 * Breakpoints for responsive design
 */
const breakpoints = createBreakpoints({
  base: "0em" as const,
  sm: "30em", //      480 px
  md: "48em", //      768 px
  lg: "62em", //      992 px
  xl: "80em", //     1280 px
  "2xl": "96em", //  1536 px
  "3xl": "112em", // 1792 px
})

export default breakpoints

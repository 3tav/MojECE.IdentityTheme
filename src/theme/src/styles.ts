import { mode, Styles } from "@chakra-ui/theme-tools"

const styles: Styles = {
  global: (props) => ({
    body: {
      fontFamily: "body",
      color: mode("gray.800", "white")(props),
      bg: mode("white", "blue.600")(props),
      transition: "background-color 0.2s",
      lineHeight: "base",
    },
    "*::placeholder": {
      color: mode("gray.400", "white")(props),
    },
    "*, *::before, &::after": {
      borderColor: mode("gray.200", "wwhite")(props),
      wordWrap: "break-word",
    },
  }),
}

export default styles

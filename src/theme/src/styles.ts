import { mode, Styles } from "@chakra-ui/theme-tools";

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
    "#e0DAXhLcg7z4_to": {
      animation: "e0DAXhLcg7z4_to__to 3000ms linear infinite normal forwards",
      offsetPath: "path('M448.356423,216.968824L668.283638,216.966636')",
      offsetRotate: "0deg",
    },

    "#e0DAXhLcg7z6_to": {
      animation: "e0DAXhLcg7z6_to__to 3000ms linear infinite normal forwards",
      offsetPath: "path('M131.170868,216.968824L448.352794,216.966636')",
      offsetRotate: "0deg",
    },

    "@keyframes e0DAXhLcg7z4_to__to": {
      "0%": { offsetDistance: "0%" },
      "33%": { offsetDistance: "0%" },
      "66%": { offsetDistance: "100%" },
      "100%": { offsetDistance: "100%" },
    },

    "@keyframes e0DAXhLcg7z6_to__to": {
      "0%": { offsetDistance: "0%" },
      "66%": { offsetDistance: "0%" },
      "100%": { offsetDistance: "100%" },
    },
  }),
};

export default styles;

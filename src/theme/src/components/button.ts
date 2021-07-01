import { mode, transparentize } from "@chakra-ui/theme-tools"

type Dict = Record<string, any>

const baseStyle = {
  lineHeight: "1.5",
  borderRadius: "base",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "wider",
  _focus: {
    boxShadow: "outline",
  },
  _disabled: {
    opacity: 0.5,
    cursor: "not-allowed",
    boxShadow: "none",
  },
  _hover: {
    _disabled: {
      bg: "initial",
      boxShadow: "none",
    },
  },
}

function variantGhost(props: Dict) {
  const { colorScheme: c, theme } = props

  if (c === "gray") {
    return {
      color: mode(`inherit`, `whiteAlpha.900`)(props),
      _hover: {
        bg: mode(`gray.100`, `whiteAlpha.200`)(props),
      },
      _active: { bg: mode(`gray.200`, `whiteAlpha.300`)(props) },
    }
  }

  const darkHoverBg = transparentize(`${c}.200`, 0.12)(theme)
  const darkActiveBg = transparentize(`${c}.200`, 0.24)(theme)

  return {
    color: mode(`${c}.600`, `${c}.200`)(props),
    bg: "transparent",
    _hover: {
      bg: mode(`${c}.50`, darkHoverBg)(props),
    },
    _active: {
      bg: mode(`${c}.100`, darkActiveBg)(props),
    },
  }
}

function variantOutline(props: Dict) {
  const { colorScheme: c } = props
  const borderColor = mode(`blue.600`, `white`)(props)
  return {
    border: "1px solid",
    borderColor: c === "blue" ? borderColor : "currentColor",
    color: c === "blue" ? borderColor : "currentColor",
    _hover: {
      bg: mode("white", `blue-600`)(props),
      boxShadow: mode("btn-outline", `btn-solid-dark`)(props),
    },
    _disabled: {
      borderColor: mode("gray.50", `blue.400`)(props),
      color: mode("gray.50", `blue.400`)(props),
    },
  }
}

type AccessibleColor = {
  bg?: string
  color?: string
  hoverBg?: string
  activeBg?: string
}

/** Accessible color overrides for less accessible colors. */
const accessibleColorMap: { [key: string]: AccessibleColor } = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600",
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600",
  },
}

function variantSolid(props: Dict) {
  const { colorScheme: c } = props

  if (c === "blue") {
    const bg = mode(`blue.600`, `white`)(props)

    return {
      color: mode(`white`, `blue.600`)(props),
      bg,
      borderRadius: mode(`base`, `sm`)(props),
      _hover: {
        boxShadow: mode(`btn-solid`, `btn-solid-dark`)(props),
        bg: mode(`blue.600`, `white`)(props),
        _disabled: {
          bg: mode(`gray.50`, `blue.500`)(props),
        },
      },
      _disabled: {
        bg: mode(`gray.50`, `blue.500`)(props),
        color: mode(`white`, `blue.400`)(props),
      },
      _active: { bg: mode(`blue.600`, `whiteAlpha.400`)(props) },
    }
  }

  const {
    bg = `${c}.500`,
    color = "white",
    hoverBg = `${c}.600`,
    activeBg = `${c}.700`,
  } = accessibleColorMap[c] || {}

  const background = mode(bg, `${c}.200`)(props)

  return {
    bg: background,
    color: mode(color, `blue.600`)(props),
    _hover: {
      bg: mode(hoverBg, `${c}.300`)(props),
      _disabled: {
        bg: background,
      },
    },
    _active: { bg: mode(activeBg, `${c}.400`)(props) },
  }
}

function variantLink(props: Dict) {
  const { colorScheme: c } = props
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    fontWeight: "normal",
    textDecoration: "underline",
    textTransform: "none",
    color: mode(`${c}.600`, `white`)(props),
    letterSpacing: "normal",
    borderRadius: mode(`base`, `sm`)(props),
    _hover: {
      fontWeight: "bold",
      boxShadow: "btn-outline",
      _disabled: {
        fontWeight: "normal",
      },
    },
    _active: {
      color: mode(`${c}.700`, `${c}.500`)(props),
    },
    _disabled: {
      color: mode("gray.50", `blue.400`)(props),
    },
  }
}

function variantMenu(props: Dict) {
  const { colorScheme: c } = props

  return {
    bg: mode(`blackAlpha.100`, `whiteAlpha.100`)(props),
    border: "1px solid",
    borderColor: mode(`${c}.50`, `${c}.600`)(props),
    borderRadius: "none",
    color: mode(`black`, `white`)(props),
    _hover: {
      bg: mode(`blackAlpha.50`, `whiteAlpha.50`)(props),
      boxShadow: mode("btn-outline", `btn-solid-dark`)(props),
    },
    _disabled: {
      borderColor: "transparent",
      color: mode(`blackAlpha.600`, `whiteAlpha.600`)(props),
    },
  }
}

const variantUnstyled = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: 0,
  p: 0,
}

const variants = {
  ghost: variantGhost,
  outline: variantOutline,
  solid: variantSolid,
  link: variantLink,
  menu: variantMenu,
  unstyled: variantUnstyled,
}

const sizes = {
  lg: {
    h: "auto",
    minW: 10,
    lineHeight: 10,
    fontSize: "sm",
    px: 6,
  },
  md: {
    h: 10,
    minW: 10,
    fontSize: "2xs",
    px: 5,
  },
  sm: {
    h: 8,
    minW: 8,
    fontSize: "2xs",
    fontWeight: "600",
    px: 3,
    borderRadius: "sm",
  },
  xs: {
    h: 6,
    minW: 6,
    fontSize: "2xs",
    px: 2,
  },
}

const defaultProps = {
  variant: "solid",
  size: "md",
  colorScheme: "blue",
}

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
}

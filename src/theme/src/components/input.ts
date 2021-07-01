import { getColor, mode } from "@chakra-ui/theme-tools"

const parts = ["field", "addon"]

const baseStyle = {
  field: {
    width: "100%",
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transition: "all 0.2s",
  },
}

const size = {
  lg: {
    fontSize: "lg",
    px: 4,
    h: 14,
    borderRadius: "xs",
  },

  md: {
    fontSize: "md",
    px: 4,
    h: 12,
    borderRadius: "xs",
  },

  sm: {
    fontSize: "sm",
    px: 3,
    h: 8,
    borderRadius: "xs",
  },

  xs: {
    fontSize: "xs",
    px: 2,
    h: 6,
    borderRadius: "xs",
  },
}

const sizes = {
  lg: {
    field: size.lg,
    addon: size.lg,
  },
  md: {
    field: size.md,
    addon: size.md,
  },
  sm: {
    field: size.sm,
    addon: size.sm,
  },
  xs: {
    field: size.xs,
    addon: size.xs,
  },
}

function getDefaults(props: Record<string, any>) {
  const { focusBorderColor: fc, errorBorderColor: ec } = props
  return {
    focusBorderColor: fc || mode("blue.600", "blue.300")(props),
    errorBorderColor: ec || mode("red.600", "red.600")(props),
  }
}

function variantOutline(props: Record<string, any>) {
  const { theme } = props
  const { errorBorderColor: ec } = getDefaults(props) // focusBorderColor: fc, 

  return {
    field: {
      border: "1px solid",
      borderColor: mode("gray.500", "white")(props),
      bg: "inherit",
      letterSpacing: "wider",
      _placeholder: { color: mode("gray.500", "whiteAlpha.700")(props) },
      _hover: {
        boxShadow: "input",
        _disabled: {
          boxShadow: "none",
        },
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all",
        borderColor: mode("gray.400", "blue.500")(props),
        color: mode("black", "blue.500")(props),
        bg: mode("gray.25", "blue.600")(props),
        opacity: 0.6,
        _placeholder: { color: mode("gray.50", "blue.400")(props) },
      },
      _disabled: {
        cursor: "not-allowed",
        borderColor: mode("gray.400", "blue.500")(props),
        color: mode("black", "blue.500")(props),
        bg: mode("gray.25", "blue.600")(props),
        opacity: 0.6,
        _placeholder: { color: mode("gray.50", "blue.400")(props) },
      },
      _invalid: {
        borderColor: getColor(theme, ec),
        boxShadow: `0 0 0 1px ${getColor(theme, ec)}`,
      },
      _focus: {
        zIndex: 1,
        boxShadow: "input",
      },
    },
    addon: {
      border: "1px solid",
      borderColor: mode("inherit", "whiteAlpha.50")(props),
      bg: mode("gray.100", "whiteAlpha.300")(props),
    },
  }
}

function variantFilled(props: Record<string, any>) {
  const { theme } = props
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props)

  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode("gray.100", "whiteAlpha.50")(props),
      _hover: {
        bg: mode("gray.200", "whiteAlpha.100")(props),
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all",
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      _invalid: {
        borderColor: getColor(theme, ec),
      },
      _focus: {
        bg: "transparent",
        borderColor: getColor(theme, fc),
      },
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode("gray.100", "whiteAlpha.50")(props),
    },
  }
}

function variantFlushed(props: Record<string, any>) {
  const { theme } = props
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props)

  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: 0,
      pl: 0,
      pr: 0,
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all",
      },
      _invalid: {
        borderColor: getColor(theme, ec),
        boxShadow: `0px 1px 0px 0px ${getColor(theme, ec)}`,
      },
      _focus: {
        borderColor: getColor(theme, fc),
        boxShadow: `0px 1px 0px 0px ${getColor(theme, fc)}`,
      },
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: 0,
      paddingX: 0,
      bg: "transparent",
    },
  }
}

const variantUnstyled = {
  field: {
    bg: "transparent",
    pl: 0,
    pr: 0,
    height: "auto",
  },
  addon: {
    bg: "transparent",
    pl: 0,
    pr: 0,
    height: "auto",
  },
}

const variants = {
  outline: variantOutline,
  filled: variantFilled,
  flushed: variantFlushed,
  unstyled: variantUnstyled,
}

const defaultProps = {
  size: "md",
  variant: "outline",
}

export default {
  parts,
  baseStyle,
  sizes,
  variants,
  defaultProps,
}

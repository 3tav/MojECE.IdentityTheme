import { mode } from "@chakra-ui/theme-tools"

const parts = ["container", "control", "label", "icon"]

function baseStyleControl(props: Record<string, any>) {
  // , dot: d
  const { colorScheme: c } = props

  return {
    w: "100%",
    transition: "box-shadow 250ms",
    border: "1px solid",
    borderRadius: "sm",
    borderColor: mode("black", "white")(props),
    color: "white",
    

    _checked: {
      color: mode(`${c}`, "white")(props),

      _hover: {
        boxShadow: 'input'
      },

      _disabled: {
        borderColor: mode("gray.200", "transparent")(props),
        bg: mode("gray.200", "whiteAlpha.300")(props),
        color: mode("gray.500", "whiteAlpha.500")(props),
      },
    },

    _indeterminate: {
      color: mode("black", "white")(props),
    },

    _disabled: {
      borderColor: mode("gray.100", "transparent")(props),
      color: mode("gray.100", "white")(props),
    },

    _focus: {
      boxShadow: 'input',
    },

    _invalid: {
      borderColor: mode("red.500", "red.300")(props),
    },
  }
}

function baseStyleLabel(props: Record<string, any>) {
  // colorScheme: c,
  const { dot: d } = props
  var afterDot = 'none';
  if( d ) {
    afterDot = 'inline-block'
  }
  return {
    _before: {
      display: afterDot,
      content: `""`,
      bg: `${d}`,
      width: "6px",
      height: "6px",
      borderRadius: "50%",
      marginRight: "10px",
    },
    userSelect: "none",
    _disabled: { opacity: 0.4 },
  }
}

const baseStyle = (props: Record<string, any>) => ({
  control: baseStyleControl(props),
  label: baseStyleLabel(props),
})

const sizes = {
  sm: {
    control: { h: 3.5, w: 3.5 },
    label: { fontSize: "xs" },
    icon: { fontSize: "0.45rem" },
  },
  md: {
    control: { w: 4, h: 4 },
    label: { fontSize: "sm" },
    icon: { fontSize: "0.625rem" },
  },
  lg: {
    control: { w: 5, h: 5 },
    label: { fontSize: "md" },
    icon: { fontSize: "0.625rem" },
  },
}

const defaultProps = {
  size: "md",
  colorScheme: "black",
}


const style = { parts, baseStyle, sizes, defaultProps }

export default style

import { mode } from "@chakra-ui/theme-tools"
import { mergeWith as merge } from "@chakra-ui/utils"
import Input from "./input"

const parts = ["field", "icon"]

function baseStyleField(props: Record<string, any>) {
  return {
    ...Input.baseStyle.field,
    appearance: "none",
    paddingBottom: "1px",
    lineHeight: "normal",
    "> option": {
      bg: mode("white", "gray.600")(props),
    },
  }
}

const baseStyleIcon = {
  width: "1.5rem",
  height: "100%",
  right: "0.5rem",
  position: "relative",
  color: "currentColor",
  fontSize: "1.25rem",
  _disabled: {
    opacity: 0.5,
  },
}

const baseStyle = (props: Record<string, any>) => ({
  field: baseStyleField(props),
  icon: baseStyleIcon,
})

const sizes = merge({}, Input.sizes, {
  xs: {
    icon: {
      right: "0.25rem",
    },
  },
})

const style = {
  parts, 
  baseStyle,
  sizes,
  variants: Input.variants,
  defaultProps: Input.defaultProps
}

export default style

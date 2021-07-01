import Checkbox from "./checkbox"

const parts = ["container", "control", "label"]

function baseStyleControl(props: Record<string, any>) {
  const { control } = Checkbox.baseStyle(props)

  return {
    ...control,
    borderRadius: "full",
    _checked: {
      ...control["_checked"],
      _before: {
        content: `""`,
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "currentColor",
      },
    },
  }
}

const baseStyle = (props: Record<string, any>) => ({
  label: Checkbox.baseStyle(props).label,
  control: baseStyleControl(props),
})

const sizes = {
  md: {
    control: { w: 4, h: 4 },
    label: { fontSize: "sm" },
  },
  lg: {
    control: { w: 5, h: 5 },
    label: { fontSize: "md" },
  },
  sm: {
    control: { width: 3.5, height: 3.5 },
    label: { fontSize: "xs" },
  },
}

const defaultProps = {
  size: "md",
  colorScheme: "black",
}

export default {
  parts,
  baseStyle,
  sizes,
  defaultProps,
}

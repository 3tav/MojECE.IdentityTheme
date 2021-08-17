const baseStyle = {
  opacity: 0.6,
  borderColor: "inherit",
}

const variantSolid = {
  borderStyle: "solid",
}

const variantDashed = {
  borderStyle: "dashed",
}

const variants = {
  solid: variantSolid,
  dashed: variantDashed,
}

const defaultProps = {
  variant: "solid",
}

const style = { baseStyle, variants, defaultProps }

export default style

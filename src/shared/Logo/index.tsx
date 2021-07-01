import * as React from "react"
import { Icon, Link } from "@chakra-ui/react"
import { LayoutProps } from "@chakra-ui/styled-system/dist/types/config/layout"

type LogoComponent = {
  boxSize?: LayoutProps["boxSize"]
  url?: string
  theme?: "dark" | "light"
}

const Logo = (props: LogoComponent) => {
  const boxSize = props.boxSize || "80"

  const isDark = props.theme === "dark" ? true : false
  const primary= isDark ? "#fff" : "#005399"
  const secondary= "#F9B122"

  return (
    <Link _focus={{ boxShadow: "none" }} href="https://moj.ece.si">
    <Icon focusable={true} role="img" viewBox="0 0 80 80" boxSize={boxSize} fill={primary}><g fill="inherit"><path d="M13.7 57.9l3.6-2.7c-1.2-.9-3.2-2.5-5.1-4.5-5.8-6-5.4-9-5.4-9-1 2.3-1.8 4.5-.8 8s5.5 6.7 7.7 8.2M19.5 53.4c1.5-1.3 2.6-2.5 3.5-3.6-1.1-1-3.3-3.1-6.2-7-5.7-7.7-5.4-14.1-5.2-14.7-3.5 6.8-3.3 9.7-1.8 13.4 1.6 3.9 6 8.7 9.7 11.9M24.9 36.4L22 31c-4.3-8.7-1.5-15.7-1.5-15.7s-5.7 3.8-5.7 12.5c0 8.1 5.2 14.3 9.9 19.2 2.8-5.7.2-10.6.2-10.6M39.8 56.9c-2.3 0-3.4-.6-3.4-1.7v-1.7h3.4c4.6 0 6.8-1.7 6.8-5.1s-2.3-5.1-6.8-5.1-6.8 1.6-6.8 5v6.8c0 3.4 2.3 5.1 6.8 5.1s6.8-1.7 6.8-5.1h-3.4c.1 1.2-1.1 1.8-3.4 1.8m-3.4-8.6c0-1.1 1.1-1.7 3.4-1.7s3.4.6 3.4 1.7-1.1 1.7-3.3 1.7h-3.4l-.1-1.7zM61.8 55.2c0 3.4-2.3 5.1-6.8 5.1s-6.8-1.7-6.8-5.1v-6.8c0-3.4 2.3-5.1 6.8-5.1s6.8 1.7 6.8 5.1h-3.4c0-1.1-1.1-1.7-3.4-1.7s-3.4.6-3.4 1.7v6.8c0 1.1 1.1 1.7 3.4 1.7s3.4-.6 3.4-1.7zM70 56.9c-2.3 0-3.4-.6-3.4-1.7v-1.7H70c4.6 0 6.8-1.7 6.8-5.1s-2.3-5.1-6.8-5.1c-4.6 0-6.9 1.7-6.9 5.1v6.8c0 3.4 2.3 5.1 6.9 5.1s6.8-1.7 6.8-5.1h-3.4c0 1.1-1.1 1.7-3.4 1.7m-3.4-8.6c0-1.1 1.1-1.7 3.4-1.7s3.4.6 3.4 1.7S72.3 50 70 50h-3.4z"/></g><path fill={secondary} d="M28.2 51.3s.8 6.3-5.6 9.5c-3.9 2-9.7 1.7-9.7 1.7 4.5-1.5 6.4-2 9.8-4.4 3-2 4.8-4.4 5.5-6.8"/><path fill={secondary} d="M24.9 36.4s2.8 5.2-.5 11.2c-2.5 4.6-8.4 9.2-21.2 17 0 0 22.5-4.1 24.6-16.3a17 17 0 00-2.9-11.9"/></Icon>
    </Link>)
}

export default Logo

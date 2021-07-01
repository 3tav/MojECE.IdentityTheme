import { Text } from "@chakra-ui/react"
import { CompositionComponent } from "../types"

export default function Label({ children }: CompositionComponent) {
  return (
    <Text ml="4" textTransform="uppercase" fontWeight="bold" fontSize="sm">
      {children}
    </Text>
  )
}

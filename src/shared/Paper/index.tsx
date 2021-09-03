/**
 * Paper / Card
 * (unstyled)
 */

import { Container, Box, Flex, Text } from "@chakra-ui/react"
import { CompositionComponent } from "../types"

import { RESOURCES_PATH } from "App"
import Logo from "shared/Logo"

export default function Paper({ children }: CompositionComponent) {
  return (
    <Flex
      minHeight="100vh"
      flexDir={["column", "column", "row", "row"]}
      bg="blue.600"
    >
      <Flex
        flex="4"
        bgImage={RESOURCES_PATH + "login90.webp"}
        bgSize="cover"
        bgPosition="center"
        minH="50vh"
      >
        <Flex
          py="10"
          flex="1"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          h={{ base: "auto", md: "90vh" }}
          bgGradient="linear(to-b, blue.700, transparent)"
        >
          <Box color="white">
            <Logo theme="dark" boxSize={[28, 32, 32, 32, 40]} />
          </Box>
          <Text
            textAlign="center"
            fontSize={["2lg", "3lg", "2lg", "3lg", "4lg", "xl"]}
            lineHeight="shorter"
            maxW={["75%", "75%", "75%", "66%", "50%", "50%"]}
            color="white"
            fontWeight="light"
            sx={{ wordWrap: "initial" }}
          >
            Dobrodošli v spletni portal moj ECE
          </Text>
        </Flex>
      </Flex>
      <Box flex="5" bg="white">
        <Container maxW="container.sm">{children}</Container>
      </Box>
    </Flex>
  )
}

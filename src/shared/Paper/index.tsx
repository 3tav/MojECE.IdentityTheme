/**
 * Paper / Card
 * (unstyled)
 */

import { Container, Box, Flex, Text } from "@chakra-ui/react"
import { CompositionComponent } from "../types"

// import { RESOURCES_PATH } from "App"
import Logo from "shared/Logo"
import { getMessage } from "i18n/messages"

export default function Paper({ children }: CompositionComponent) {

  // TODO: https://github.com/3tav/MojECE.Identity/issues/38
  // const { kcLanguageTag } = useKcLanguageTag()
  // const lang = kcLanguageTag
  const lang = "sl"
  const welcomeMessage = getMessage(lang, "Welcome")

  // const BG_IMAGE = RESOURCES_PATH + "login90.webp"
  const BG_IMAGE = "https://login.ece.si/activations/images/intro90.webp"

  return (
    <Flex
      minHeight="100vh"
      flexDir={["column", "column", "row", "row"]}
      bg="blue.600"
    >
      <Flex
        flex="4"
        bgImage={BG_IMAGE}
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
            {welcomeMessage}
          </Text>
        </Flex>
      </Flex>
      <Box flex="5" bg="white">
        <Container maxW="container.sm">{children}</Container>
      </Box>
    </Flex>
  )
}

/**
 * Paper / Card
 * (unstyled)
 */

 import _ from "lodash"
// import { getMessage } from "i18n/messages"
import { Container, Box, Flex, SimpleGrid } from "@chakra-ui/react"
import { CompositionComponent } from "../types"

import BgWrap from "./BgWrap"
import Header from "./Header"
import PromoItem from "./PromoItem"
import WelcomeIntro from "./WelcomeIntro"
import type { Promo } from "./PromoItem/types"
import { promo } from "./content"

export default function Paper({ children }: CompositionComponent) {
  // TODO: https://github.com/3tav/MojECE.Identity/issues/38
  // const { kcLanguageTag } = useKcLanguageTag()
  // const lang = kcLanguageTag
  // const lang = "sl"
  // const welcomeMessage = getMessage(lang, "Welcome")

  return (
    <Flex
      align="stretch"
      minHeight="100vh"
      flexDir={{ base: "column", lg: "row" }}
      bg="blue.600"
    >
      <BgWrap>
        <Header />

        <SimpleGrid
          display={{ base: "none", lg: "grid" }}
          columns={{ base: 2, sm: 3, md: 3, lg: 2, "2xl": 3 }}
          spacingX={8}
          spacingY={12}
          fontSize={{ base: "sm", sm: "md" }}
          textAlign="center"
          pb="8"
          lineHeight="short"
        >
          {_.map(promo, (item: Promo, key: string) => (
            <PromoItem key={key} promo={item} />
          ))}
        </SimpleGrid>

      </BgWrap>
      <Box flex="5" bg="white">
        <Container maxW="container.sm">{children}</Container>
        <WelcomeIntro />
      </Box>
    </Flex>
  )
}

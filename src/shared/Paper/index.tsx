/**
 * Paper / Card
 * (unstyled)
 */

import { map } from "lodash";
import { useEffect, useState } from "react";
// import { getMessage } from "i18n/messages"
import { Container, Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { CompositionComponent } from "../types";

import BgWrap from "./BgWrap";
import Header from "./Header";
import PromoItem from "./PromoItem";
import WelcomeIntro from "./WelcomeIntro";
import type { Promo } from "./PromoItem/types";
import { ctx } from "./content";

export const ECE = "ECE";
export const ECEShop = "ECEShop";

type Content = (typeof ctx)["ECE"] | (typeof ctx)["ECEShop"];

export default function Paper({ children }: CompositionComponent) {
  // TODO: https://github.com/3tav/MojECE.Identity/issues/38
  // const { kcLanguageTag } = useKcLanguageTag()
  // const lang = kcLanguageTag
  // const lang = "sl"
  // const welcomeMessage = getMessage(lang, "Welcome")

  /**
   * Router
   */
  const searchParams = new URLSearchParams(document.location.search);

  const [clientId] = useState(searchParams.get("client_id"));
  const [content, setContent] = useState<Content>();

  useEffect(() => {
    if (clientId === ECE) {
      setContent(ctx["ECE"]);
    } else if (clientId === ECEShop) {
      setContent(ctx["ECEShop"]);
    }
  }, [clientId]);

  return (
    <Flex
      align="stretch"
      minHeight="100vh"
      flexDir={{ base: "column", lg: "row" }}
      bg="blue.600"
    >
      {content ? (
        <Flex
          flex={{ base: 0, lg: 4 }}
          bgImage={content["bgImage"]}
          bgSize="cover"
          bgPosition="center"
          minH={{ base: "0", lg: "90vh" }}
          color="white"
        >
          <BgWrap>
            <Header title={content["title"]} icon={clientId} url={content["url"]} />

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
              {map(content["promo"], (item: Promo, key: string) => (
                <PromoItem key={key} promo={item} />
              ))}
            </SimpleGrid>
          </BgWrap>
        </Flex>
      ) : (
        <Flex
          flex={{ base: 0, lg: 4 }}
          bgSize="cover"
          bgPosition="center"
          minH={{ base: "0", lg: "90vh" }}
          color="white"
        />
      )}
      <Box flex="5" bg="white">
        <Container maxW="container.sm">{children}</Container>
        <WelcomeIntro />
      </Box>
    </Flex>
  );
}

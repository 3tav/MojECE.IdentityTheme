import { memo } from "react"
import { Template } from "components/Template"
import type { KcProps, KcContextBase } from "keycloakify"
import { useKcMessage } from "keycloakify/lib/i18n/useKcMessage"
//import { cx } from "tss-react"

import { Button, Flex, Box, Text } from "@chakra-ui/react"
import EceIcons from "theme/parts/Icons"
import "./style.css"

export const Terms = memo(
  ({ kcContext, ...props }: { kcContext: KcContextBase.Terms } & KcProps) => {
    const { msg, msgStr } = useKcMessage()

    const { url } = kcContext

    return (
      <Template
        {...{ kcContext, ...props }}
        displayMessage={false}
        doFetchDefaultThemeResources={false}
        headerNode={msg("termsTitle")}
        formNode={
          <Flex flexDirection="column" paddingBottom="8" mt="8">
            <Box
              maxHeight="md"
              overflow="auto"
              textAlign="justify"
              pl="0"
              pr="2"
            >
              <Box className="terms">{msg("termsText")}</Box>
            </Box>
            <Box h="8" />
            <Box>
              <form
                className="form-actions"
                action={url.loginAction}
                method="POST"
              >
                <Flex justifyContent="center">
                  <Button
                    name="cancel"
                    id="kc-decline"
                    type="submit"
                    colorScheme="red"
                    size="lg"
                  >
                    <EceIcons name="close" boxSize="4" />
                    <Text ml="2">{msgStr("doDecline")}</Text>
                  </Button>
                  <Box w="8" />
                  <Button size="lg" name="accept" id="kc-accept" type="submit">
                    <EceIcons name="check" boxSize="4" />
                    <Text ml="2">{msgStr("doAccept")}</Text>
                  </Button>
                </Flex>
              </form>
            </Box>
          </Flex>
        }
      />
    )
  }
)

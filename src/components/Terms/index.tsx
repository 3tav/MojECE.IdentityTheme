import { memo } from "react"
import { Template } from "../Template"
import type { KcProps, KcContext } from "keycloakify"
import { useKcMessage } from "keycloakify/lib/i18n/useKcMessage"
//import { cx } from "tss-react"

import { Button, Flex, Box, Text } from "@chakra-ui/react"
import EceIcons from "theme/parts/Icons"

export const Terms = memo(
  ({ kcContext, ...props }: { kcContext: KcContext.Terms } & KcProps) => {
    const { msg, msgStr } = useKcMessage()

    const { url } = kcContext

    return (
      <Template
        {...{ kcContext, ...props }}
        displayMessage={false}
        doFetchDefaultThemeResources={false}
        headerNode={msg("termsTitle")}
        formNode={
          <Flex flexDirection="column" paddingBottom="8">
            <Box
              maxHeight="md"
              overflow="auto"
              textAlign="justify"
              pl="0"
              pr="2"
            >
              {msg("termsText")}
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
                    backgroundColor="red.600"
                    size="lg"
                  >
                    <EceIcons name="close" boxSize="4" />
                    <Text ml="2">{msgStr("doDecline")}</Text>
                  </Button>
                  <Box w="8" />
                  <Button size="lg" name="accept" id="kc-accept" type="submit">
                    <EceIcons name="check" boxSize="4" />
                    <Text ml="2">{msgStr("doRegister")}</Text>
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

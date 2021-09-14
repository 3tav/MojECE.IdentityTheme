import { memo } from "react"
import { Template } from "components/Template"
import { KcProps, KcContextBase, assert } from "keycloakify"
import { useKcMessage } from "keycloakify/lib/i18n/useKcMessage"
import { Box, Flex, Button, Text } from "@chakra-ui/react"
import EceIcons from "theme/parts/Icons"

export const Error = memo(
  ({ kcContext, ...props }: { kcContext: KcContextBase.Error } & KcProps) => {
    const { msg, msgStr } = useKcMessage()

    assert(kcContext.message !== undefined)

    const { message, client } = kcContext

    return (
      <Template
        {...{ kcContext, ...props }}
        doFetchDefaultThemeResources={false}
        displayMessage={false}
        headerNode={msg("errorTitle")}
        formNode={
          <Box mt="12">
            <Text textAlign="center">
              {msgStr(message.summary as any)
                ? msgStr(message.summary as any)
                : message.summary}
            </Text>
            {client !== undefined && client.baseUrl !== undefined && (
              <Flex
                justifyContent="center"
                alignItems="center"
                my="8"
                flexDir="column"
              >
                <Button
                  onClick={() => window.open(client.baseUrl)}
                  variant="ghost"
                  size="xs"
                >
                  <Box mr="1" mb="0.5">
                    <EceIcons name="chevronRight" boxSize="2" />
                  </Box>
                  <Text>{msg("backToApplication")}</Text>
                </Button>
              </Flex>
            )}
          </Box>
        }
      />
    )
  }
)

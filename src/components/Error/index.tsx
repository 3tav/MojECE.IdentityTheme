import { memo } from "react"
import { Template } from "components/Template"
import { KcProps, KcContextBase, assert } from "keycloakify"
import { useKcMessage } from "keycloakify/lib/i18n/useKcMessage"
import { Box, Link, Text } from "@chakra-ui/react"
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
              <Box flex="1" textAlign="right" mt="4">
                <Link color="blue.500" href={client.baseUrl}>
                  <Box as="span" mr="2">
                    <EceIcons name="arrowLeft" boxSize="2" />
                  </Box>
                  {msg("backToApplication")}
                </Link>
              </Box>
            )}
          </Box>
        }
      />
    )
  }
)

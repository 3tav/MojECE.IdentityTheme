import { memo } from "react"
import { Template } from "../Template"
import { KcProps, KcContextBase, assert } from "keycloakify"
import { useKcMessage } from "keycloakify/lib/i18n/useKcMessage"
import { Box, Flex, Link, Text } from "@chakra-ui/react"

export const Info = memo(
  ({ kcContext, ...props }: { kcContext: KcContextBase.Info } & KcProps) => {
    const { msg, msgStr } = useKcMessage()

    assert(kcContext.message !== undefined)

    const {
      messageHeader,
      message,
      requiredActions,
      skipLink,
      pageRedirectUri,
      actionUri,
      client,
    } = kcContext

    return (
      <Template
        {...{ kcContext, ...props }}
        doFetchDefaultThemeResources={false}
        displayMessage={false}
        headerNode={
          messageHeader !== undefined ? (
            <>{messageHeader}</>
          ) : (
            <>
              {msgStr(message.summary as any)
                ? msgStr(message.summary as any)
                : message.summary}
            </>
          )
        }
        formNode={
          <Box mt="12">
            {messageHeader !== undefined ? (
              <Text textAlign="center">
                {msgStr(message.summary as any)
                  ? msgStr(message.summary as any)
                  : message.summary}
                {requiredActions !== undefined && (
                  <b>
                    {requiredActions
                      .map((requiredAction) =>
                        msg(`requiredAction.${requiredAction}` as const)
                      )
                      .join(",")}
                  </b>
                )}
              </Text>
            ) : null}
            <Flex justifyContent="flex-end" mt="4">
              {!skipLink && pageRedirectUri !== undefined ? (
                <Text>
                  <Link color="blue.500" href={pageRedirectUri}>
                    {msg("backToApplication")}
                  </Link>
                </Text>
              ) : actionUri !== undefined ? (
                <Text>
                  <Link color="blue.500" href={actionUri}>
                    {msg("proceedWithAction")}
                  </Link>
                </Text>
              ) : (
                client.baseUrl !== undefined && (
                  <Text>
                    <Link color="blue.500" href={client.baseUrl}>
                      {msg("backToApplication")}
                    </Link>
                  </Text>
                )
              )}
            </Flex>
          </Box>
        }
      />
    )
  }
)

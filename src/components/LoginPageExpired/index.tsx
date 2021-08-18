import { memo } from "react"
import { KcContext } from "kcContext"
import { KcProps, useKcMessage } from "keycloakify"
import { Template } from "components/Template"
import { Flex, Link, Text } from "@chakra-ui/react"

type KcContext_LoginPageExpired = Extract<
  KcContext,
  { pageId: "login-page-expired.ftl" }
>

export const LoginPageExpired = memo(
  ({
    kcContext,
    ...props
  }: { kcContext: KcContext_LoginPageExpired } & KcProps) => {
    const { msg } = useKcMessage()
    const { url } = kcContext
    return (
      <Template
        {...{ kcContext, ...props }}
        doFetchDefaultThemeResources={false}
        displayMessage={false}
        headerNode={msg("pageExpiredTitle")}
        formNode={
          <Flex alignItems="center" mt="8" flexDirection="column">
            <Text>
              {msg("pageExpiredMsg1")}{" "}
              <Link
                id="loginRestartLink"
                color="blue.500"
                href={url.loginRestartFlowUrl}
              >
                {msg("doClickHere")}
              </Link>
              .
            </Text>
            <Text mt="2">
              {msg("pageExpiredMsg2")}{" "}
              <Link
                id="loginContinueLink"
                color="blue.500"
                href={url.loginAction}
              >
                {msg("doClickHere")}
              </Link>
              .
            </Text>
          </Flex>
        }
      />
    )
  }
)

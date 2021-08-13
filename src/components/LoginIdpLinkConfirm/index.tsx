import { memo } from "react"
import { Template } from "../Template"
import type { KcProps, KcContextBase } from "keycloakify"
import { useKcMessage } from "keycloakify/lib/i18n/useKcMessage"
import { Alert, Button, Flex, Text } from "@chakra-ui/react"
import { Alert as AlertIcon, Check, Info } from "theme/parts/Icons"

export const LoginIdpLinkConfirm = memo(
  ({
    kcContext,
    ...props
  }: { kcContext: KcContextBase.LoginIdpLinkConfirm } & KcProps) => {
    const { msg } = useKcMessage()

    const { url, idpAlias, message } = kcContext

    return (
      <Template
        {...{ kcContext, ...props }}
        doFetchDefaultThemeResources={false}
        headerNode={msg("confirmLinkIdpTitle")}
        formNode={
          <Flex flexDirection="column" mt="8">
            {message?.type === "error" ? (
              <Alert status="error" marginBottom="3" marginTop="3">
                <AlertIcon />
                <Text fontSize="xs" marginLeft="2" fontWeight="bold">
                  {message.summary}
                </Text>
              </Alert>
            ) : null}
            {message?.type === "success" ? (
              <Alert status="success" marginBottom="3" marginTop="3">
                <Check />
                <Text fontSize="xs" marginLeft="2" fontWeight="bold">
                  {message.summary}
                </Text>
              </Alert>
            ) : null}
            {message?.type === "info" ? (
              <Alert status="info" marginBottom="3" marginTop="3">
                <Info />
                <Text fontSize="xs" marginLeft="2" fontWeight="bold">
                  {message.summary}
                </Text>
              </Alert>
            ) : null}
            {message?.type === "warning" ? (
              <Alert status="warning" marginBottom="3" marginTop="3">
                <AlertIcon />
                <Text fontSize="xs" marginLeft="2" fontWeight="bold">
                  {message.summary}
                </Text>
              </Alert>
            ) : null}
            <form id="kc-register-form" action={url.loginAction} method="post">
              <Flex justifyContent="space-evenly">
                <Button
                  w="3xs"
                  type="submit"
                  name="submitAction"
                  id="updateProfile"
                  value="updateProfile"
                >
                  {msg("confirmLinkIdpReviewProfile")}
                </Button>
                <Button
                  w="3xs"
                  type="submit"
                  name="submitAction"
                  id="linkAccount"
                  value="linkAccount"
                >
                  {msg("confirmLinkIdpContinue", idpAlias)}
                </Button>
              </Flex>
            </form>
          </Flex>
        }
      />
    )
  }
)

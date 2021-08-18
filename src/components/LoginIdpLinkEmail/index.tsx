import { KcProps } from "keycloakify"
import { memo } from "react"
import { KcContext } from "kcContext"
import { Box, Link, Text } from "@chakra-ui/react"
import { Template } from "components/Template"
import { useKcMessage } from "keycloakify/lib/i18n/useKcMessage"

type KcContext_LoginIdpLinkEmail = Extract<
  KcContext,
  { pageId: "login-idp-link-email.ftl" }
>

export const LoginIdpLinkEmail = memo(
  ({
    kcContext,
    ...props
  }: { kcContext: KcContext_LoginIdpLinkEmail } & KcProps) => {
    const { msg } = useKcMessage()
    const { idpDisplayName, realm, brokerContext, url } = kcContext

    return (
      <Template
        {...{ kcContext, ...props }}
        doFetchDefaultThemeResources={false}
        displayMessage={false}
        headerNode={msg(
          "emailLinkIdpTitle",
          idpDisplayName ? idpDisplayName : ""
        )}
        formNode={
          <Box mt="8">
            <Text textAlign="center">
              {msg(
                "emailLinkIdp1",
                idpDisplayName ? idpDisplayName : "",
                brokerContext?.username ? brokerContext?.username : "",
                realm.displayName ? realm.displayName : ""
              )}
            </Text>
            <Text textAlign="center" mt="4">
              {msg("emailLinkIdp2")}{" "}
              <Link color="blue.500" href={url.loginAction}>
                {msg("doClickHere")}
              </Link>{" "}
              {msg("emailLinkIdp3")}
            </Text>
            <Text textAlign="center">
              {msg("emailLinkIdp4")}{" "}
              <Link color="blue.500" href={url.loginAction}>
                {msg("doClickHere")}
              </Link>{" "}
              {msg("emailLinkIdp5")}
            </Text>
          </Box>
        }
      />
    )
  }
)

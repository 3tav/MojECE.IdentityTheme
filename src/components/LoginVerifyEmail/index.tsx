import { Box, Link, Text } from "@chakra-ui/react"
import { KcContextBase, KcProps } from "keycloakify"
import { useKcMessage } from "keycloakify/lib/i18n/useKcMessage"
import { memo } from "react"
import { Template } from "components/Template"

export const LoginVerifyEmail = memo(
  ({
    kcContext,
    ...props
  }: { kcContext: KcContextBase.LoginVerifyEmail } & KcProps) => {
    const { msg } = useKcMessage()

    const { url } = kcContext

    return (
      <Template
        {...{ kcContext, ...props }}
        doFetchDefaultThemeResources={false}
        displayMessage={false}
        headerNode={msg("emailVerifyTitle")}
        formNode={
          <Box mt="12">
            <Text textAlign="center">{msg("emailVerifyInstruction1")}</Text>
            <Text textAlign="center">
              {msg("emailVerifyInstruction2")}{" "}
              <Link color="blue.500" href={url.loginAction}>
                {msg("doClickHere")}
              </Link>{" "}
              {msg("emailVerifyInstruction3")}
            </Text>
          </Box>
        }
      />
    )
  }
)

import { memo } from "react"
import { Template } from "../Template"
import type { KcProps, KcContextBase } from "keycloakify"
import { useKcMessage } from "keycloakify/lib/i18n/useKcMessage"

import { Button, Flex, Box, Link, Text, Input, VStack } from "@chakra-ui/react"
import EceIcons from "theme/parts/Icons"

type KcContext_LoginResetPassword = Extract<
  KcContextBase,
  { pageId: "login-reset-password.ftl" }
>

export const LoginResetPassword = memo(
  ({
    kcContext,
    ...props
  }: { kcContext: KcContext_LoginResetPassword } & KcProps) => {
    const { msg, msgStr } = useKcMessage()

    const { url, realm, auth } = kcContext

    return (
      <Template
        {...{ kcContext, ...props }}
        doFetchDefaultThemeResources={false}
        displayMessage={false}
        headerNode={msg("emailForgotTitle")}
        formNode={
          <Box mt="4">
            <form
              id="kc-reset-password-form"
              action={url.loginAction}
              method="post"
            >
              <VStack spacing={12} mt="16" alignItems="stretch">
                <Text textAlign="center">{msg("emailInstruction")}</Text>

                {/* username */}
                <Box>
                  <Input
                    id="username"
                    name="username"
                    autoComplete="username"
                    defaultValue={
                      auth !== undefined && auth.showUsername
                        ? auth.attemptedUsername
                        : undefined
                    }
                    placeholder={
                      !realm.loginWithEmailAllowed
                        ? msgStr("username")
                        : !realm.registrationEmailAsUsername
                        ? msgStr("usernameOrEmail")
                        : msgStr("email")
                    }
                  />
                </Box>

                <VStack spacing={16} alignItems="flex-end">
                  {/* doSubmit */}
                  <Flex flex="1" justifyContent="flex-end">
                    <Button type="submit" size="lg">
                      <Text mr="2">{msgStr("doSubmit")}</Text>
                      <EceIcons name="arrowRight" boxSize="4" />
                    </Button>
                  </Flex>

                  {/* backToLogin */}
                  <Box flex="1" textAlign="right">
                    <Link color="blue.500" href={url.loginUrl}>
                      <Box as="span" mr="2">
                        <EceIcons name="arrowLeft" boxSize="2" />
                      </Box>
                      {msg("backToLogin")}
                    </Link>
                  </Box>
                </VStack>
              </VStack>
            </form>
          </Box>
        }
        infoNode={null}
      />
    )
  }
)

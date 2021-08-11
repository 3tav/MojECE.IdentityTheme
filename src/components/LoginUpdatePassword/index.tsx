import { memo } from "react"
import { Template } from "components/Template"
import { KcProps, assert } from "keycloakify"
import { useKcMessage } from "keycloakify/lib/i18n/useKcMessage"
import { Alert, Box, Button, Flex, Input, Text, VStack } from "@chakra-ui/react"
import { KcContext } from "kcContext"
import { cx } from "tss-react"
import Label from "shared/Label"
import EceIcons, { Alert as AlertIcon, Info } from "theme/parts/Icons"

type KcContext_LoginUpdatePassword = Extract<
  KcContext,
  { pageId: "login-update-password.ftl" }
>

export const LoginUpdatePassword = memo(
  ({
    kcContext,
    ...props
  }: { kcContext: KcContext_LoginUpdatePassword } & KcProps) => {
    const { msg, msgStr } = useKcMessage()

    assert(kcContext.message !== undefined)

    const { message, username, messagesPerField, url } = kcContext

    return (
      <Template
        {...{ kcContext, ...props }}
        doFetchDefaultThemeResources={false}
        displayMessage={false}
        headerNode={msg("updatePasswordTitle")}
        formNode={
          <Flex
            mt="4"
            id="kc-form"
            flexDir={["column", "column", "column", "row"]}
          >
            <Box flex="1">
              <form
                id="kc-passwd-update-form"
                className={cx(props.kcFormClass)}
                action={url.loginAction}
                method="post"
              >
                <Input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  autocomplete="username"
                  readonly="readonly"
                  style={{ display: "none" }}
                />
                <Input
                  type="password"
                  id="password"
                  name="password"
                  autocomplete="current-password"
                  style={{ display: "none" }}
                />
                {message?.type === "error" ? (
                  <Alert status="error" marginBottom="3" marginTop="3">
                    <AlertIcon />
                    <Text fontSize="xs" marginLeft="2" fontWeight="bold">
                      {message.summary}
                    </Text>
                  </Alert>
                ) : null}

                {message?.type === "success" ? (
                  <Alert
                    status="info"
                    marginBottom="3"
                    marginTop="3"
                    bgColor="blue.100"
                  >
                    <Info />
                    <Text fontSize="xs" marginLeft="2" fontWeight="bold">
                      {message.summary}
                    </Text>
                  </Alert>
                ) : null}
                <VStack spacing={8} alignItems="stretch">
                  <Box>
                    <Label>{msg("passwordNew")}</Label>
                    <Input
                      type="password"
                      id="password-new"
                      name="password-new"
                      autocomplete="new-password"
                      isInvalid={
                        messagesPerField &&
                        messagesPerField.printIfExists("password", "error")
                          ? true
                          : false
                      }
                    />
                  </Box>
                  <Box>
                    <Label>{msg("passwordNewConfirm")}</Label>
                    <Input
                      type="password"
                      id="password-confirm"
                      name="password-confirm"
                      autocomplete="new-password"
                      isInvalid={
                        messagesPerField &&
                        messagesPerField.printIfExists(
                          "password-confirm",
                          "error"
                        )
                          ? true
                          : false
                      }
                    />
                  </Box>
                </VStack>
                <Flex flex="1" justifyContent="flex-end" mt="16">
                  <Button type="submit" size="lg">
                    <Text mr="2">{msgStr("doSubmit")}</Text>
                    <EceIcons name="arrowRight" boxSize="4" />
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

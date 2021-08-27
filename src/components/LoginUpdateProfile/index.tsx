import { Alert, Box, Button, Flex, Input, Text, VStack } from "@chakra-ui/react"
import { Template } from "components/Template"
import { KcContextBase, KcProps, useKcMessage } from "keycloakify"
import { memo } from "react"
import Label from "shared/Label"
import EceIcons, { Alert as AlertIcon } from "theme/parts/Icons"
import { cx } from "tss-react"

export const LoginUpdateProfile = memo(
  ({
    kcContext,
    ...props
  }: { kcContext: KcContextBase.LoginUpdateProfile } & KcProps) => {
    const { msg, msgStr } = useKcMessage()

    const { url, user, messagesPerField, isAppInitiatedAction, message } =
      kcContext

    const errMessage: String[] = []
    if (message?.type === "error") {
      for (const err of message.summary.split("<br>")) {
        errMessage.push(msgStr(err as any) ? msgStr(err as any) : err)
      }
    }
    const oneLineErr = errMessage.join(" ")
    return (
      <Template
        {...{ kcContext, ...props }}
        doFetchDefaultThemeResources={false}
        headerNode={msg("loginProfileTitle")}
        formNode={
          <Box flex="1" mt="8">
            <form
              id="kc-update-profile-form"
              className={cx(props.kcFormClass)}
              action={url.loginAction}
              method="post"
            >
              <VStack
                spacing={8}
                alignItems="stretch"
                pr={[0, 0, 0, 8]}
                mb={[8, 8, 8, 0]}
              >
                {user.editUsernameAllowed && (
                  <Box>
                    <Label>{msg("username")}</Label>
                    <Input
                      isInvalid={
                        messagesPerField.printIfExists(
                          "username",
                          "Napaka pri vnosu uporabniskega imena"
                        )
                          ? true
                          : false
                      }
                      id="username"
                      defaultValue={user.username ?? ""}
                      name="username"
                    />
                  </Box>
                )}
                <Box>
                  <Label>{msg("email")}</Label>
                  <Input
                    isInvalid={
                      messagesPerField.printIfExists(
                        "email",
                        "Napaka pri vnosu emaila"
                      )
                        ? true
                        : false
                    }
                    id="email"
                    defaultValue={user.email ?? ""}
                    name="email"
                  />
                </Box>

                <Box>
                  <Label>{msg("firstName")}</Label>
                  <Input
                    isInvalid={
                      messagesPerField.printIfExists(
                        "firstName",
                        "Napaka pri vnosu imena"
                      )
                        ? true
                        : false
                    }
                    id="firstName"
                    defaultValue={user.firstName ?? ""}
                    name="firstName"
                  />
                </Box>

                <Box>
                  <Label>{msg("lastName")}</Label>
                  <Input
                    isInvalid={
                      messagesPerField.printIfExists(
                        "lastName",
                        "Napaka pri vnosu priimka"
                      )
                        ? true
                        : false
                    }
                    id="lastName"
                    defaultValue={user.lastName ?? ""}
                    name="lastName"
                  />
                </Box>
              </VStack>

              {message?.type === "error" ? (
                <Alert status="error" marginTop="8">
                  <Flex>
                    <AlertIcon />
                    <Box width="2" />
                    <Text fontSize="xs" fontWeight="bold" margin-left="2">
                      {oneLineErr}
                    </Text>
                  </Flex>
                </Alert>
              ) : null}
              {isAppInitiatedAction ? (
                <Flex
                  justifyContent="space-between"
                  mt={message?.type === "error" ? "4" : "16"}
                >
                  <Button
                    type="submit"
                    name="cancel-aia"
                    value="true"
                    size="lg"
                    colorScheme="red"
                  >
                    <EceIcons name="close" boxSize="4" />
                    <Text ml="2">{msgStr("doCancel")}</Text>
                  </Button>
                  <Button type="submit" size="lg">
                    <Text mr="2">{msgStr("doSubmit")}</Text>
                    <EceIcons name="arrowRight" boxSize="4" />
                  </Button>
                </Flex>
              ) : (
                <Flex
                  mt={message?.type === "error" ? "4" : "16"}
                  justifyContent="flex-end"
                >
                  <Button type="submit" size="lg">
                    <Text mr="2">{msgStr("doSubmit")}</Text>
                    <EceIcons name="arrowRight" boxSize="4" />
                  </Button>
                </Flex>
              )}
            </form>
          </Box>
        }
      />
    )
  }
)

import { memo } from "react"
import { Template } from "../Template"
import type { KcProps, KcContext } from "keycloakify"
import { useKcMessage } from "keycloakify/lib/i18n/useKcMessage"
import { cx } from "tss-react"

import {
  Button,
  Flex,
  Box,
  Link,
  Text,
  Input,
  VStack,
  Alert,
} from "@chakra-ui/react"
import Label from "shared/Label"
import EceIcons, { Alert as AlertIcon } from "theme/parts/Icons"

type KcContext_Register = Extract<KcContext, { pageId: "register.ftl" }>

// TODO: isInvalid w/ messagesPerField

export const Register = memo(
  ({ kcContext, ...props }: { kcContext: KcContext_Register } & KcProps) => {
    const { msg, msgStr } = useKcMessage()

    const {
      url,
      message,
      messagesPerField,
      register,
      realm,
      passwordRequired,
      recaptchaRequired,
      recaptchaSiteKey,
    } = kcContext

    return (
      <Template
        {...{ kcContext, ...props }}
        doFetchDefaultThemeResources={false}
        headerNode={msg("registerTitle")}
        formNode={
          <Flex
            mt="4"
            id="kc-form"
            flexDir={["column", "column", "column", "row"]}
          >
            <Box flex="1">
              <form
                id="kc-register-form"
                className={cx(props.kcFormClass)}
                action={url.registrationAction}
                method="post"
              >
                <Flex
                  mt="4"
                  id="kc-form"
                  flexDir={["column", "column", "column", "row"]}
                >
                  <VStack
                    spacing={8}
                    alignItems="stretch"
                    pr={[0, 0, 0, 8]}
                    mb={[8, 8, 8, 0]}
                  >
                    {/* firstName */}
                    <Box>
                      <Label>{msg("firstName")}</Label>

                      <Input
                        isInvalid={
                          messagesPerField.printIfExists(
                            "firstName",
                            "Napaka pri vnosu priimka"
                          )
                            ? true
                            : false
                        }
                        id="firstName"
                        name="firstName"
                        // isInvalid={false}
                        autoComplete="firstName"
                        defaultValue={register.formData.firstName ?? ""}
                      />
                    </Box>

                    {/* lastName */}
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
                        name="lastName"
                        autoComplete="lastName"
                        defaultValue={register.formData.lastName ?? ""}
                      />
                    </Box>
                    {/* email */}
                    <Box>
                      <Label>{msg("email")}</Label>
                      <Input
                        isInvalid={
                          messagesPerField.printIfExists(
                            "email",
                            "Napaka pri vnosu priimka"
                          )
                            ? true
                            : false
                        }
                        id="email"
                        name="email"
                        autoComplete="email"
                        defaultValue={register.formData.email ?? ""}
                      />
                    </Box>

                    {/* username */}
                    {!realm.registrationEmailAsUsername && (
                      <Box>
                        <Label>{msg("username")}</Label>
                        <Input
                          isInvalid={
                            messagesPerField.printIfExists(
                              "username",
                              "Napaka pri vnosu priimka"
                            )
                              ? true
                              : false
                          }
                          id="username"
                          name="username"
                          autoComplete="username"
                          defaultValue={register.formData.username ?? ""}
                        />
                      </Box>
                    )}
                  </VStack>

                  {/* password */}
                  <VStack spacing={8} alignItems="stretch" pl={[0, 0, 0, 8]}>
                    {passwordRequired && (
                      <>
                        <Box>
                          <Label>{msg("password")}</Label>
                          <Input
                            isInvalid={
                              messagesPerField.printIfExists(
                                "password",
                                "Napaka pri vnosu priimka"
                              )
                                ? true
                                : false
                            }
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="new-password"
                          />
                        </Box>

                        <Box>
                          <Label>{msg("passwordConfirm")}</Label>
                          <Input
                            isInvalid={
                              messagesPerField.printIfExists(
                                "password-confirm",
                                "Napaka pri vnosu priimka"
                              )
                                ? true
                                : false
                            }
                            id="password-confirm"
                            name="password-confirm"
                            type="password"
                          />
                        </Box>
                      </>
                    )}

                    {/* recaptcha */}
                    {recaptchaRequired && (
                      <div className="form-group">
                        <div className={cx(props.kcInputWrapperClass)}>
                          <div
                            className="g-recaptcha"
                            data-size="compact"
                            data-sitekey={recaptchaSiteKey}
                          ></div>
                        </div>
                      </div>
                    )}
                  </VStack>
                </Flex>

                {/* error alert */}
                {message?.type === "error" ? (
                  <Alert status="error" marginTop="8">
                    <Flex>
                      <AlertIcon />
                      <Box width="2" />
                      <Text fontSize="xs" fontWeight="bold" margin-left="2">
                        {message.summary.split("<br>").join(" ")}
                      </Text>
                    </Flex>
                  </Alert>
                ) : null}
                {/* Register */}
                <Flex
                  mt={message?.type === "error" ? "4" : "16"}
                  flexDir={["column", "column", "column", "row"]}
                >
                  <Box flex="1"></Box>

                  {/* doRegister */}
                  <Flex flex="1" justifyContent="flex-end">
                    <Button type="submit" size="lg">
                      <Text mr="2">{msgStr("doRegister")}</Text>
                      <EceIcons name="arrowRight" boxSize="4" />
                    </Button>
                  </Flex>
                </Flex>

                {/* backToLogin */}
                <Flex mt="16" flexDir={["column", "column", "column", "row"]}>
                  <Box flex="1">
                    <Link color="blue.500" href="https://www.ece.si/gdpr/">
                      Politika varovanja
                    </Link>
                    <Text>osebnih podatkov ECE</Text>
                  </Box>

                  <Box flex="1" textAlign="right">
                    <Text>Digitalni profile ECE že imam.</Text>
                    <Link color="blue.500" href={url.loginUrl}>
                      {msg("backToLogin")}
                    </Link>
                  </Box>
                </Flex>
              </form>
            </Box>
          </Flex>
        }
      />
    )
  }
)

import React, { memo, useState } from "react"
import { Template } from "../Template"
import type { KcProps, KcContextBase } from "keycloakify"
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
  Tooltip,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react"
import Label from "shared/Label"
import PassLabel from "./TooltipLabel"
import EceIcons, { Alert as AlertIcon } from "theme/parts/Icons"
type KcContext_Register = Extract<KcContextBase, { pageId: "register.ftl" }>

// TODO: isInvalid w/ messagesPerField

export const Register = memo(
  ({ kcContext, ...props }: { kcContext: KcContext_Register } & KcProps) => {
    const { msg, msgStr } = useKcMessage()
    const regex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_+?.,-])(?=.{8,})"
    )

    const [pass, setpass] = useState("")
    const [open, setopen] = useState(false)
    const [accaptable, setaccaptable] = useState(false)
    const [showPass, setshowPass] = useState(false)
    const [showPassConfirm, setshowPassConfirm] = useState(false)
    const handlePassChange = (event: any) => {
      setpass(event.target.value)
      setaccaptable(regex.test(event.target.value))
    }

    const handleFocus = () => {
      setopen(true)
    }

    const handleBlur = () => {
      setopen(false)
    }

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

                          <Tooltip
                            backgroundColor="blue.500"
                            paddingTop="2"
                            paddingBottom="2"
                            paddingLeft="2"
                            paddingRight="2"
                            isOpen={open}
                            label={PassLabel(pass, accaptable)}
                            placement="top"
                            closeOnClick={false}
                            offset={[0, 24]}
                            borderRadius="md"
                          >
                            <InputGroup>
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
                                type={showPass ? "text" : "password"}
                                autoComplete="new-password"
                                onFocus={handleFocus}
                                onChange={handlePassChange}
                                onBlur={handleBlur}
                              />
                              <InputRightElement
                                onClick={() => setshowPass(!showPass)}
                                pr="2"
                              >
                                <EceIcons
                                  boxSize={showPass ? "35px" : "26px"}
                                  name={showPass ? "show" : "hidePassword"}
                                />
                              </InputRightElement>
                            </InputGroup>
                          </Tooltip>
                        </Box>

                        <Box>
                          <Label>{msg("passwordConfirm")}</Label>
                          <InputGroup>
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
                              type={showPassConfirm ? "text" : "password"}
                            />
                            <InputRightElement
                              onClick={() =>
                                setshowPassConfirm(!showPassConfirm)
                              }
                              pr="2"
                            >
                              <EceIcons
                                boxSize={showPassConfirm ? "35px" : "26px"}
                                name={showPassConfirm ? "show" : "hidePassword"}
                              />
                            </InputRightElement>
                          </InputGroup>
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
                        {oneLineErr}
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
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  my="8"
                  flexDir="column"
                  textAlign="center"
                >
                  <Text>Digitalni profile ECE že imam.</Text>
                  <Button
                    onClick={() => window.open(url.loginUrl, "_top")}
                    variant="ghost"
                    size="xs"
                  >
                    <Box mr="1" mb="0.5">
                      <EceIcons name="chevronRight" boxSize="2" />
                    </Box>
                    <Text>{msg("backToLogin")}</Text>
                  </Button>

                  <Text
                    color="gray.500"
                    mt="8"
                    fontSize="sm"
                    textAlign="center"
                  >
                    <Link
                      color="gray.500"
                      href="https://www.ece.si/gdpr/"
                      target="_blank"
                    >
                      Politika varovanja osebnih podatkov ECE.
                    </Link>
                  </Text>
                </Flex>
              </form>
            </Box>
          </Flex>
        }
      />
    )
  }
)

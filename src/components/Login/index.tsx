import { useState, memo } from "react"
// import { Template } from "keycloakify"
import type { KcProps, KcContextBase } from "keycloakify"
// import type { KcProps } from "./KcProps"
// import { cx } from "tss-react"
import { useConstCallback } from "powerhooks"

// TODO: messages
import { useKcMessage } from "keycloakify/lib/i18n/useKcMessage"

import {
  Button,
  Flex,
  Box,
  Link,
  Text,
  Checkbox,
  Input,
  VStack,
  HStack,
  Alert,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react"

import { Template } from "components/Template"
import Label from "shared/Label"
import EceIcons, { Alert as AlertIcon, Check, Info } from "theme/parts/Icons"

const VERTICAL_LINE =
  "linear-gradient(90deg, transparent 48%, #E0E0E0 49%, #E0E0E0 51%, transparent 52%, transparent 100%)"
const HORIZONTAL_LINE =
  "linear-gradient(0deg, transparent 48%, #E0E0E0 49%, #E0E0E0 51%, transparent 52%, transparent 100%)"

export const Login = memo(
  ({ kcContext, ...props }: { kcContext: KcContextBase.Login } & KcProps) => {
    const { msg, msgStr } = useKcMessage()

    const {
      social,
      realm,
      url,
      usernameEditDisabled,
      login,
      message,
      auth,
      registrationDisabled,
    } = kcContext

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false)
    const [showPass, setshowPass] = useState(false)

    const onSubmit = useConstCallback(() => {
      setIsLoginButtonDisabled(true)
      return true
    })

    return (
      <Template
        {...{ kcContext, ...props }}
        doFetchDefaultThemeResources={false}
        displayInfo={social.displayInfo}
        displayWide={realm.password && social.providers !== undefined}
        headerNode={msg("doLogIn")}
        formNode={
          <Flex
            mt="4"
            id="kc-form"
            flexDir={["column", "column", "column", "row"]}
          >
            {/* Credentials */}
            <Box flex="1">
              {realm.password && (
                <form
                  id="kc-form-login"
                  onSubmit={onSubmit}
                  action={url.loginAction}
                  method="post"
                >
                  <Text
                    h={
                      message?.type === "error" ||
                      message?.type === "success" ||
                      message?.type === "info" ||
                      message?.type === "warning"
                        ? "6"
                        : "12"
                    }
                  >
                    Prijava z elektronsko pošto
                  </Text>
                  {message?.type === "error" ? (
                    <Alert status="error" marginBottom="3" marginTop="3">
                      <AlertIcon />
                      <Text fontSize="xs" marginLeft="2" fontWeight="bold">
                        {msgStr(message.summary as any)
                          ? msgStr(message.summary as any)
                          : message.summary}
                      </Text>
                    </Alert>
                  ) : null}

                  {message?.type === "success" ? (
                    <Alert status="success" marginBottom="3" marginTop="3">
                      <Check />
                      <Text fontSize="xs" marginLeft="2" fontWeight="bold">
                        {msgStr(message.summary as any)
                          ? msgStr(message.summary as any)
                          : message.summary}
                      </Text>
                    </Alert>
                  ) : null}

                  {message?.type === "info" ? (
                    <Alert status="info" marginBottom="3" marginTop="3">
                      <Info />
                      <Text fontSize="xs" marginLeft="2" fontWeight="bold">
                        {msgStr(message.summary as any)
                          ? msgStr(message.summary as any)
                          : message.summary}
                      </Text>
                    </Alert>
                  ) : null}

                  {message?.type === "warning" ? (
                    <Alert status="warning" marginBottom="3" marginTop="3">
                      <AlertIcon />
                      <Text fontSize="xs" marginLeft="2" fontWeight="bold">
                        {msgStr(message.summary as any)
                          ? msgStr(message.summary as any)
                          : message.summary}
                      </Text>
                    </Alert>
                  ) : null}

                  {/* Username */}
                  <VStack spacing={8} alignItems="stretch">
                    <Box>
                      <Label>
                        {!realm.loginWithEmailAllowed
                          ? msg("username")
                          : !realm.registrationEmailAsUsername
                          ? msg("usernameOrEmail")
                          : msg("email")}
                      </Label>
                      <Input
                        tabIndex={1}
                        id="username"
                        name="username"
                        defaultValue={login.username ?? ""}
                        type="text"
                        isRequired
                        {...(usernameEditDisabled
                          ? { isDisabled: true }
                          : { autoFocus: true, autoComplete: "off" })}
                      />
                    </Box>
                    <Box>
                      <Label>{msg("password")}</Label>
                      <InputGroup>
                        <Input
                          tabIndex={2}
                          id="password"
                          name="password"
                          type={showPass ? "text" : "password"}
                          autoComplete="off"
                          isRequired
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
                    </Box>
                  </VStack>

                  <HStack my="8" spacing={4} alignItems="center">
                    {/* ForgotPassword */}
                    <Box
                      flex="1"
                      textAlign="right"
                      fontSize="xs"
                      color="blue.500"
                    >
                      {realm.resetPasswordAllowed && (
                        <Link tabIndex={5} href={url.loginResetCredentialsUrl}>
                          {msg("doForgotPassword")}
                        </Link>
                      )}
                    </Box>

                    {/* Submit */}
                    <Box flex="1">
                      <Button
                        flex="1"
                        variant="solid"
                        tabIndex={4}
                        name="login"
                        id="kc-login"
                        type="submit"
                        isDisabled={isLoginButtonDisabled}
                      >
                        <Box as="span" mr="4">
                          {msgStr("doLogIn")}
                        </Box>
                        <EceIcons name="arrowRight" boxSize="4" />
                      </Button>
                    </Box>
                  </HStack>

                  {/* Remember me */}
                  {realm.rememberMe && !usernameEditDisabled && (
                    <HStack mt="8" spacing={4}>
                      <Box flex="1"></Box>
                      <Box flex="1">
                        <Checkbox
                          defaultChecked={login.rememberMe}
                          size="sm"
                          tabIndex={3}
                          id="rememberMe"
                          name="rememberMe"
                          aria-describedby="rememberMe"
                          value="on"
                        >
                          {msg("rememberMe")}
                        </Checkbox>
                      </Box>
                    </HStack>
                  )}
                  <input
                    type="hidden"
                    id="id-hidden-input"
                    name="credentialId"
                    {...(auth?.selectedCredential !== undefined
                      ? { value: auth.selectedCredential }
                      : {})}
                  />
                </form>
              )}
            </Box>

            {/* Separator */}
            {realm.password && social.providers !== undefined && (
              <Flex
                flexDir={["row", "row", "row", "column"]}
                justifyContent="center"
                alignItems="center"
                w={["auto", "auto", "auto", "32px"]}
                mx="8"
                my={[10, 10, 10, 0]}
                bgImage={[
                  HORIZONTAL_LINE,
                  HORIZONTAL_LINE,
                  HORIZONTAL_LINE,
                  VERTICAL_LINE,
                ]}
                bgSize={["200px", "500px", "340px", "32px"]}
              >
                <Text
                  bg="white"
                  w="32px"
                  textAlign="center"
                  fontSize="xs"
                  py="2"
                >
                  ali
                </Text>
              </Flex>
            )}

            {realm.password && social.providers !== undefined && (
              <Box flex="1" id="kc-social-providers">
                <Text h="12">Prijava s pomočjo z družbenih omrežij</Text>
                <VStack mt="6" spacing={8} alignItems="stretch">
                  {social.providers.map((p) => (
                    <Button
                      key={p.providerId}
                      onClick={() => window && window.open(p.loginUrl, "_self")}
                      id={`zocial-${p.alias}`}
                      variant="outline"
                      color="gray.500"
                    >
                      {p.providerId === "google" && (
                        <EceIcons name="zocialGoogle" boxSize="3" />
                      )}
                      {p.providerId === "facebook" && (
                        <EceIcons name="zocialFacebook" boxSize="3" />
                      )}
                      <Box as="span" ml="4" textTransform="none">
                        {p.displayName}
                      </Box>
                    </Button>
                  ))}
                </VStack>
              </Box>
            )}
          </Flex>
        }
        infoNode={
          realm.password &&
          realm.registrationAllowed &&
          !registrationDisabled && (
            <Flex
              my={[10, 10, 10, 2]}
              borderTopWidth={["1px", "1px", "1px", "0"]}
              borderTopColor="gray.50"
              pt={[10, 10, 10, 0]}
              flex="1"
              textAlign="center"
              flexDir="column"
              alignItems="center"
            >
              <Text>{msg("noAccount")}</Text>
              <Button
                onClick={() => window.open(url.registrationUrl, "_top")}
                variant="ghost"
                size="xs"
              >
                <Box mr="1" mb="0.5">
                  <EceIcons name="add" boxSize="2" />
                </Box>
                <Text>{msg("doRegister")}</Text>
              </Button>
            </Flex>
          )
        }
      />
    )
  }
)

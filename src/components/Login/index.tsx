import { useState, memo } from "react"
// import { Template } from "keycloakify"
import type { KcProps, KcContext } from "keycloakify"
// import type { KcProps } from "./KcProps"
// import type { KcContextBase } from 'keycloakify'
// import { cx } from "tss-react"
import { useConstCallback } from "powerhooks"

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
} from "@chakra-ui/react"

import { Template } from "components/Template"
import Label from "shared/Label"
import EceIcons from "theme/parts/Icons"

// TODO: messages
import { useKcMessage } from "keycloakify/lib/i18n/useKcMessage"

export const Login = memo(
  ({ kcContext, ...props }: { kcContext: KcContext.Login } & KcProps) => {
    const { msg, msgStr } = useKcMessage()

    const {
      social,
      realm,
      url,
      usernameEditDisabled,
      login,
      auth,
      registrationDisabled,
    } = kcContext

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false)

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
          <Flex mt="4" id="kc-form" flexDir={["column", "column", "column", "row"]}>
            {/* Credentials */}
            <Box flex="1">
              {realm.password && (
                <form
                  id="kc-form-login"
                  onSubmit={onSubmit}
                  action={url.loginAction}
                  method="post"
                >
                  <Text h="12">Prijava z elektronsko pošto</Text>

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
                      <Input
                        tabIndex={2}
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="off"
                        isRequired
                      />
                    </Box>
                  </VStack>

                  <HStack my="8" spacing={4} alignItems="center">
                    {/* ForgotPassword */}
                    <Box
                      flex="1"
                      textAlign="right"
                      fontSize="x-small"
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
                    <HStack my="8" spacing={4}>
                      <Box flex="1"></Box>
                      <Box flex="1">
                        <Checkbox
                          size="sm"
                          tabIndex={3}
                          id="rememberMe"
                          name="rememberMe"
                          aria-describedby="rememberMe"
                          isChecked={login.rememberMe ? true : false}
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
            <Flex
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              display={["none", "flex"]}
              w="32px"
              mx="8"
              bgImage="linear-gradient(90deg, transparent 48%, #E0E0E0 49%, #E0E0E0 51%, transparent 52%, transparent 100%)"
              bgSize="32px"
            >
              <Text bg="white" w="32px" textAlign="center" fontSize="xs" py="2">
                ali
              </Text>
            </Flex>

            {realm.password && social.providers !== undefined && (
              <Box flex="1" id="kc-social-providers">
                <Text h="12">Prijava s pomočjo z družbenih omrežij</Text>
                <VStack mt="6" spacing={8} alignItems="stretch">
                  {social.providers.map((p) => (
                    <Button
                      key={p.providerId}
                      href={p.loginUrl}
                      id={`zocial-${p.alias}`}
                      variant="outline"
                      color="gray.500"
                    >
                      {p.providerId === "google" && <EceIcons name="zocialGoogle" boxSize="3" />}
                      {p.providerId === "facebook" && <EceIcons name="zocialFacebook" boxSize="3" />}
                      <Box as="span" ml="4" textTransform="none">{p.displayName}</Box>
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
            <Box>
              <Text>{msg("noAccount")}</Text>
              <Link color="blue.500" tabIndex={6} href={url.registrationUrl}>
                {msg("doRegister")}
              </Link>
            </Box>
          )
        }
      />
    )
  }
)

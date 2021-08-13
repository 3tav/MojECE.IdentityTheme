import { memo, useState } from "react"
import { Template } from "components/Template"
import { KcProps } from "keycloakify"
import { useKcMessage } from "keycloakify/lib/i18n/useKcMessage"
import {
  Alert,
  Box,
  Button,
  Flex,
  Input,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react"
import { KcContext } from "kcContext"
import { cx } from "tss-react"
import Label from "shared/Label"
import EceIcons, { Alert as AlertIcon, Check, Info } from "theme/parts/Icons"
import PassLabel from "components/Register/TooltipLabel"

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

    const regex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_+?.,-])(?=.{8,})"
    )

    const [pass, setpass] = useState("")
    const [open, setopen] = useState(false)
    const [accaptable, setaccaptable] = useState(false)

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

    const { message, username, messagesPerField, url } = kcContext

    return (
      <Template
        {...{ kcContext, ...props }}
        doFetchDefaultThemeResources={false}
        displayMessage={false}
        headerNode={msg("updatePasswordTitle")}
        formNode={
          <Flex
            mt={
              message?.type === "error" ||
              message?.type === "success" ||
              message?.type === "info" ||
              message?.type === "warning"
                ? "8"
                : "16"
            }
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
                  autoComplete="username"
                  readOnly={true}
                  style={{ display: "none" }}
                />
                <Input
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  style={{ display: "none" }}
                />

                {message?.type === "error" ? (
                  <Alert
                    status="error"
                    marginBottom="3"
                    marginTop="3"
                    opacity={open ? 0.5 : 1}
                  >
                    <AlertIcon />
                    <Text fontSize="xs" marginLeft="2" fontWeight="bold">
                      {msgStr(message.summary as any)
                        ? msgStr(message.summary as any)
                        : message.summary}
                    </Text>
                  </Alert>
                ) : null}
                {message?.type === "success" ? (
                  <Alert
                    status="success"
                    marginBottom="3"
                    marginTop="3"
                    opacity={open ? 0.5 : 1}
                  >
                    <Check />
                    <Text fontSize="xs" marginLeft="2" fontWeight="bold">
                      {msgStr(message.summary as any)
                        ? msgStr(message.summary as any)
                        : message.summary}
                    </Text>
                  </Alert>
                ) : null}
                {message?.type === "info" ? (
                  <Alert
                    status="info"
                    marginBottom="3"
                    marginTop="3"
                    opacity={open ? 0.5 : 1}
                  >
                    <Info />
                    <Text fontSize="xs" marginLeft="2" fontWeight="bold">
                      {msgStr(message.summary as any)
                        ? msgStr(message.summary as any)
                        : message.summary}
                    </Text>
                  </Alert>
                ) : null}
                {message?.type === "warning" ? (
                  <Alert
                    status="warning"
                    marginBottom="3"
                    marginTop="3"
                    opacity={open ? 0.5 : 1}
                  >
                    <AlertIcon />
                    <Text fontSize="xs" marginLeft="2" fontWeight="bold">
                      {msgStr(message.summary as any)
                        ? msgStr(message.summary as any)
                        : message.summary}
                    </Text>
                  </Alert>
                ) : null}
                <VStack spacing={8} alignItems="stretch">
                  <Box>
                    <Label>{msg("passwordNew")}</Label>
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
                      <Input
                        type="password"
                        id="password-new"
                        name="password-new"
                        autoComplete="new-password"
                        isInvalid={
                          messagesPerField &&
                          messagesPerField.printIfExists("password", "error")
                            ? true
                            : false
                        }
                        onFocus={handleFocus}
                        onChange={handlePassChange}
                        onBlur={handleBlur}
                      />
                    </Tooltip>
                  </Box>
                  <Box>
                    <Label>{msg("passwordNewConfirm")}</Label>
                    <Input
                      type="password"
                      id="password-confirm"
                      name="password-confirm"
                      autoComplete="new-password"
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

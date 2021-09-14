import { useEffect } from "react"
import { ChakraProvider } from "@chakra-ui/react"
import {
  defaultKcProps,
  // getKcContext,
  kcMessages,
  useKcLanguageTag,
} from "keycloakify"
import Fonts from "./theme/parts/Fonts"
import theme from "./theme/theme"
import { kcContext } from "./kcContext"
import { KcApp } from "./KcApp"

//import TOS_EN_URL from "./tos/tos_en.md"
import TOS_SLO_URL from "./tos/tos_slo.md"

// kcLoginContext kcRegisterContext kcLoginResetPasswordContext kcTermsContext
// const kcContext = process.env.NODE_ENV === "development"
//   ? kcContextMocks.kcLoginContext
//   : keycloakContext

export const RESOURCES_PATH = kcContext
  ? kcContext.url?.resourcesPath + "/build/"
  : "/"

if (process.env.NODE_ENV === "development" && kcContext !== undefined) {
  console.debug(kcContext)
}

export default function App() {
  if (kcContext === undefined) {
    throw new Error()
  }

  const { kcLanguageTag } = useKcLanguageTag()

  //Lazily download the therms and conditions in the appropriate language
  //if we are on the terms.ftl page.
  useEffect(() => {
    if (kcContext!.pageId !== "terms.ftl") {
      return
    }

    kcMessages[kcLanguageTag].termsTitle = ""

    fetch(
      (() => {
        switch (kcLanguageTag) {
          // case "en":
          //   return TOS_EN_URL
          default:
            return TOS_SLO_URL
        }
      })()
    )
      .then((response) => response.text())
      .then(
        (rawMarkdown) => (kcMessages[kcLanguageTag].termsText = rawMarkdown)
      )
  }, [kcLanguageTag])

  // console.debug((kcMessages as any)["si"])

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <KcApp kcContext={kcContext} {...defaultKcProps} />
    </ChakraProvider>
  )
}

import { useEffect } from "react"
import { ChakraProvider } from "@chakra-ui/react"
import {
  defaultKcProps,
  kcContext as realKcContext,
  kcContextMocks,
  kcMessages,
  useKcLanguageTag,
} from "keycloakify"
import Fonts from "./theme/parts/Fonts"
import theme from "./theme/theme"

import { KcApp } from "./KcApp"

//import tos_en_url from "./tos/tos_en.md"
//import tos_fr_url from "./tos/tos_fr.md"
import tos_slo_url from "./tos/tos_slo.md"

// kcLoginContext kcRegisterContext kcLoginResetPasswordContext kcTermsContext
const kcContext = realKcContext ?? kcContextMocks.kcTermsContext

export const RESOURCES_PATH = realKcContext
  ? kcContext.url?.resourcesPath + "/build/"
  : "/"

if (kcContext !== undefined) {
  console.log(kcContext)
}

export default function App() {
  if (kcContext === undefined) {
    throw new Error()
  }

  const { kcLanguageTag } = useKcLanguageTag()
  //const kcLanguageTag: string = "si"

  //Lazily download the therms and conditions in the appropriate language
  //if we are on the terms.ftl page.
  useEffect(() => {
    if (kcContext!.pageId !== "terms.ftl") {
      return
    }

    ;(kcMessages as any)[kcLanguageTag].termsTitle = ""

    fetch(
      (() => {
        switch (kcLanguageTag) {
          case "fr":
            return tos_slo_url
          default:
            return tos_slo_url
        }
      })()
    )
      .then((response) => response.text())
      .then(
        (rawMarkdown) =>
          ((kcMessages as any)[kcLanguageTag].termsText = rawMarkdown)
      )
  }, [kcLanguageTag])
  console.log((kcMessages as any)["si"])
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <KcApp kcContext={kcContext} {...defaultKcProps} />
    </ChakraProvider>
  )
}

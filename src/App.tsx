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
// import { css } from "tss-react"

import { KcApp } from "./KcApp"

import tos_en_url from "./tos/tos_en.md"
import tos_fr_url from "./tos/tos_fr.md"

// replace kcLoginContext by kcRegisterContext and the register page will be loaded instead
const kcContext = realKcContext ?? kcContextMocks.kcLoginContext

if (kcContext !== undefined) {
  console.log(realKcContext ? "> realKcContext" : "> kcContextMocks")
  console.log(kcContext)
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
          case "fr":
            return tos_fr_url
          default:
            return tos_en_url
        }
      })()
    )
      .then((response) => response.text())
      .then(
        (rawMarkdown) => (kcMessages[kcLanguageTag].termsText = rawMarkdown)
      )
  }, [kcLanguageTag])

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <KcApp kcContext={kcContext} {...defaultKcProps} />
    </ChakraProvider>
  )
}

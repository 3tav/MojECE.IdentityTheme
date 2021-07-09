import { KcContext, KcLanguageTag, LanguageLabel } from "keycloakify"

export type ExtraLogin = KcContext.Login & {
  messagesPerField: {
    printIfExists<T>(
      key: "username" | "email" | "password",
      x: T
    ): T | undefined
  }
}

import { getKcContext } from "keycloakify"

export const { kcContext } = getKcContext<
  | {
      pageId: "register.ftl"
      /**
       * Defined when you use the keycloak-mail-whitelisting keycloak plugin
       * (https://github.com/micedre/keycloak-mail-whitelisting)
       */
    }
  //NOTE: A 'keycloakify' field must be added
  //in the package.json to generate theses pages
  | {
      pageId: "login-update-password.ftl"
      username: string
      messagesPerField?: {
        printIfExists<T>(
          key: "password" | "password-confirm",
          x: T
        ): T | undefined
      }
    }
>({
  // uncomment for develepment
  //
  // mockPageId: "login-update-password.ftl",
  // mockData: [
  //   {
  //     pageId: "login-update-password.ftl",
  //     username: "testni.user@3tav.si",
  //   },
  // ],
})

export type KcContext = NonNullable<typeof kcContext>

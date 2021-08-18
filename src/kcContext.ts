import { getKcContext } from "keycloakify"

export const { kcContext } = getKcContext<
  | {
      pageId: "register.ftl"
    }
  //NOTE: A 'keycloakify' field must be added
  //in the package.json to generate theses pages
  | {
      pageId: "login-page-expired.ftl"
    }
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
  // mockPageId: "info.ftl",
  // mockData: [
  //   {
  //     pageId: "login-update-password.ftl",
  //     username: "testni.user@3tav.si",
  //   },
  // ],
})

export type KcContext = NonNullable<typeof kcContext>

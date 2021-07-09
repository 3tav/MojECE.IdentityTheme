export type ExtraLogin = {
  messagesPerField: {
    printIfExists<T>(
      key: "username" | "email" | "password",
      x: T
    ): T | undefined
  }
}

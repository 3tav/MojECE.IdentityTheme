import { memo } from "react"
import { defaultKcProps } from "keycloakify"
import { Info } from "keycloakify/lib/components/Info"
import { LoginVerifyEmail } from "keycloakify/lib/components/LoginVerifyEmail"
import { LoginOtp } from "keycloakify/lib/components/LoginOtp"
import { LoginIdpLinkConfirm } from "keycloakify/lib/components/LoginIdpLinkConfirm"

import { LoginUpdateProfile } from "keycloakify/lib/components/LoginUpdateProfile"
//import { Terms } from "keycloakify/lib/components/Terms"
import type { KcContextBase } from "keycloakify"

import { Register } from "./components/Register"
import { Login } from "./components/Login"
import { Terms } from "components/Terms"
import { Error } from "components/Error"
import { LoginResetPassword } from "./components/LoginResetPassword"

export type Props = {
  kcContext: KcContextBase
}

export const KcApp = memo((props: Props) => {
  const { kcContext } = props

  const kcProps = defaultKcProps

  // console.log("KcApp kcContext.pageId", kcContext.pageId);

  switch (kcContext.pageId) {
    case "login.ftl":
      return <Login {...{ kcContext, ...kcProps }} />
    case "register.ftl":
      return <Register {...{ kcContext, ...kcProps }} />
    case "terms.ftl":
      return <Terms {...{ kcContext, ...kcProps }} />
    case "info.ftl":
      return <Info {...{ kcContext, ...kcProps }} />
    case "error.ftl":
      return <Error {...{ kcContext, ...kcProps }} />
    case "login-reset-password.ftl":
      return <LoginResetPassword {...{ kcContext, ...kcProps }} />
    case "login-verify-email.ftl":
      return <LoginVerifyEmail {...{ kcContext, ...kcProps }} />
    case "login-otp.ftl":
      return <LoginOtp {...{ kcContext, ...kcProps }} />
    case "login-update-profile.ftl":
      return <LoginUpdateProfile {...{ kcContext, ...kcProps }} />
    case "login-idp-link-confirm.ftl":
      return <LoginIdpLinkConfirm {...{ kcContext, ...kcProps }} />
  }
})

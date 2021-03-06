import { memo } from "react"
import { defaultKcProps } from "keycloakify"
import { LoginOtp } from "keycloakify/lib/components/LoginOtp"

//import type { KcContextBase } from "keycloakify"

import { Register } from "./components/Register"
import { Login } from "./components/Login"
import { Terms } from "components/Terms"
import { Error } from "components/Error"
import { LoginIdpLinkConfirm } from "components/LoginIdpLinkConfirm"
import { Info } from "components/Info"
import { LoginResetPassword } from "./components/LoginResetPassword"
import { LoginVerifyEmail } from "./components/LoginVerifyEmail"
import type { KcContext } from "./kcContext"
import { LoginUpdatePassword } from "components/LoginUpdatePassword"
import { LoginPageExpired } from "components/LoginPageExpired"
import { LoginIdpLinkEmail } from "components/LoginIdpLinkEmail"
import { LoginUpdateProfile } from "components/LoginUpdateProfile"

export const KcApp = memo(({ kcContext }: { kcContext: KcContext }) => {
  const kcProps = defaultKcProps

  // console.debug("KcApp kcContext.pageId", kcContext.pageId);

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
    case "login-update-password.ftl":
      return <LoginUpdatePassword {...{ kcContext, ...kcProps }} />
    case "login-page-expired.ftl":
      return <LoginPageExpired {...{ kcContext, ...kcProps }} />
    case "login-idp-link-email.ftl":
      return <LoginIdpLinkEmail {...{ kcContext, ...kcProps }} />
  }
})

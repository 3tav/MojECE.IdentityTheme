/* eslint-disable jsx-a11y/anchor-is-valid */

import { useReducer, useEffect, memo } from "react"
import type { ReactNode } from "react"
import { useKcMessage } from "keycloakify/lib/i18n/useKcMessage"
import { useKcLanguageTag } from "keycloakify/lib/i18n/useKcLanguageTag"
import { assert } from "tsafe/assert"
import { cx } from "tss-react"
import { getBestMatchAmongKcLanguageTag } from "keycloakify/lib/i18n/KcLanguageTag"
// import { useConstCallback } from "powerhooks"
import type { KcTemplateProps } from "keycloakify"
// import { Header } from "app/components/shared/Header"
// import { logoMaxWidthInPercent } from "app/components/App"
// import { createUseClassNames, IconButton } from "app/theme"
// import { useDomRect } from "onyxia-ui"
// import { useWindowInnerSize } from "powerhooks"

import Paper from "shared/Paper"
import { getStatus } from "lib/constants/status"

import { appendHead } from "keycloakify/lib/tools/appendHead"
import { join as pathJoin } from "path"
import type { KcContext } from "keycloakify"

import {
  Flex,
  Box,
  Alert,
  Text,
  CloseButton,
  Button,
  Link,
} from "@chakra-ui/react"
import EceIcons from "theme/parts/Icons"

export type TemplateProps = {
  doFetchDefaultThemeResources: boolean
  className?: string
  displayInfo?: boolean
  displayMessage?: boolean
  displayRequiredFields?: boolean
  displayWide?: boolean
  showAnotherWayIfPresent?: boolean
  headerNode: ReactNode
  showUsernameNode?: ReactNode
  formNode: ReactNode
  infoNode?: ReactNode
  onClickCross?(): void
} & { kcContext: KcContext } & KcTemplateProps

export const Template = memo((props: TemplateProps) => {
  // className,
  const { kcContext, doFetchDefaultThemeResources, onClickCross } = props  

  /**
   * Language
   */
  const { kcLanguageTag } = useKcLanguageTag()

  useEffect(
    () => {
      if (!kcContext.realm.internationalizationEnabled) {
        return
      }

      assert(kcContext.locale !== undefined)

      if (
        kcLanguageTag ===
        getBestMatchAmongKcLanguageTag(kcContext.locale.current)
      ) {
        return
      }

      window.location.href = kcContext.locale.supported.find(
        ({ languageTag }) => languageTag === kcLanguageTag
      )!.url
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [kcLanguageTag]
  )

  // const {
  //   domRect: { width: rootWidth },
  //   ref: rootRef,
  // } = useDomRect()

  // const logoMaxWidth = Math.floor((rootWidth * logoMaxWidthInPercent) / 100)

  // const { windowInnerWidth, windowInnerHeight } = useWindowInnerSize()

  // const { classNames } = useClassNames({
  //   windowInnerWidth,
  //   aspectRatio: windowInnerWidth / windowInnerHeight,
  //   windowInnerHeight,
  // })

  // const onHeaderLogoClick = useConstCallback(
  //   () => (window.location.href = "https://docs.sspcloud.fr")
  // )

  /**
   * ExtraCSS
   */
  const [isExtraCssLoaded, setExtraCssLoaded] = useReducer(() => true, false)

  useEffect(
    () => {
      if (!doFetchDefaultThemeResources) {
        setExtraCssLoaded()
        return
      }

      let isUnmounted = false
      const cleanups: (() => void)[] = []

      const toArr = (x: string | readonly string[] | undefined) =>
        typeof x === "string" ? x.split(" ") : x ?? []

      Promise.all(
        [
          ...toArr(props.stylesCommon).map((relativePath) =>
            pathJoin(kcContext.url.resourcesCommonPath, relativePath)
          ),
          ...toArr(props.styles).map((relativePath) =>
            pathJoin(kcContext.url.resourcesPath, relativePath)
          ),
        ].map((href) =>
          appendHead({
            type: "css",
            href,
          })
        )
      ).then(() => {
        if (isUnmounted) {
          return
        }

        setExtraCssLoaded()
      })

      toArr(props.scripts).forEach((relativePath) =>
        appendHead({
          type: "javascript",
          src: pathJoin(kcContext.url.resourcesPath, relativePath),
        })
      )

      if (props.kcHtmlClass !== undefined) {
        const htmlClassList = document.getElementsByTagName("html")[0].classList

        const tokens = cx(props.kcHtmlClass).split(" ")

        htmlClassList.add(...tokens)

        cleanups.push(() => htmlClassList.remove(...tokens))
      }

      return () => {
        isUnmounted = true

        cleanups.forEach((f) => f())
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.kcHtmlClass]
  )

  if (!isExtraCssLoaded) {
    return null
  }

  //  <div ref={rootRef} className={cx(classNames.root, className)}>
  //   <Header
  //     type="keycloak"
  //     className={classNames.header}
  //     logoMaxWidth={logoMaxWidth}
  //     onLogoClick={onHeaderLogoClick}
  //   />
  //   <section>
  //     <Page
  //       {...props}
  //       className={classNames.page}
  //       onClickCross={onClickCross}
  //     />
  //   </section>
  // </div>

  return <Page {...props} onClickCross={onClickCross} />
})

const { Page } = (() => {
  type Props = {
    className?: string
    displayInfo?: boolean
    displayMessage?: boolean
    displayRequiredFields?: boolean
    displayWide?: boolean
    showAnotherWayIfPresent?: boolean
    headerNode: ReactNode
    showUsernameNode?: ReactNode
    formNode: ReactNode
    infoNode?: ReactNode
    onClickCross: (() => void) | undefined
  } & { kcContext: KcContext } & KcTemplateProps

  // const { useClassNames } = createUseClassNames<{
  //   isPaperBiggerThanContainer: boolean
  // }>()((theme, { isPaperBiggerThanContainer }) => ({
  //   root: {
  //     display: "flex",
  //     justifyContent: "center",
  //     alignItems: isPaperBiggerThanContainer ? undefined : "center",
  //   },
  //   paper: {
  //     padding: theme.spacing(4),
  //     width: 490,
  //     height: "fit-content",
  //     marginBottom: theme.spacing(3),
  //     borderRadius: 8,
  //   },
  //   alert: {
  //     alignItems: "center",
  //   },
  //   crossButtonWrapper: {
  //     display: "flex",
  //   },
  // }))

  const Page = memo((props: Props) => {
    const {
      className,
      displayInfo = true,
      displayMessage = false,
      displayRequiredFields = false,
      displayWide = true,
      showAnotherWayIfPresent = true,
      headerNode,
      showUsernameNode = null,
      formNode,
      infoNode = null,
      kcContext,
      onClickCross,
      ...kcProps
    } = props

    // const {
    //   ref: containerRef,
    //   domRect: { height: containerHeight },
    // } = useDomRect()
    // const {
    //   ref: paperRef,
    //   domRect: { height: paperHeight },
    // } = useDomRect()

    // const { classNames } = useClassNames({
    //   isPaperBiggerThanContainer: paperHeight > containerHeight,
    // })

    return (
      // ref={containerRef}
      // className={cx(classNames.root, className)}
      <Box className="kct-paper">
        {/* className={classNames.paper} */}
        {/* ref={paperRef} */}
        <Paper>
          {onClickCross !== undefined && (
            // className={classNames.crossButtonWrapper}
            <Flex>
              <CloseButton id="close" onClick={onClickCross} />
            </Flex>
          )}
          <Head
            {...{ kcContext, ...kcProps }}
            displayRequiredFields={displayRequiredFields}
            headerNode={headerNode}
            showUsernameNode={showUsernameNode}
          />
          <Main
            {...{ kcContext, ...kcProps }}
            displayMessage={displayMessage}
            formNode={formNode}
            showAnotherWayIfPresent={showAnotherWayIfPresent}
            displayWide={displayWide}
            displayInfo={displayInfo}
            infoNode={infoNode}
          />
        </Paper>
      </Box>
    )
  })

  const { Head } = (() => {
    type Props = {
      displayRequiredFields: boolean
      headerNode: ReactNode
      showUsernameNode?: ReactNode
    } & { kcContext: KcContext } & KcTemplateProps

    // const { useClassNames } = createUseClassNames()((theme) => ({
    //   root: {
    //     textAlign: "center",
    //     marginTop: theme.spacing(2),
    //     marginBottom: theme.spacing(2),
    //   },
    // }))

    const Head = memo((props: Props) => {
      const {
        kcContext,
        displayRequiredFields,
        headerNode,
        showUsernameNode,
        // ...kcProps
      } = props

      const { msg } = useKcMessage()

      // const { classNames } = useClassNames({})

      return (
        <Box className="kct-head">
          {/* Form Title */}
          <Flex
            mt={[8, 16, 32, 32]}
            justifyContent="space-between"
            color="blue.500"
          >
            {/* TODO: Back-Button */}
            {/* <Button variant="link" textTransform="uppercase">
              <Box mr="2">
                <EceIcons name="arrowLeft" boxSize="2" />
              </Box>
              Nazaj
            </Button> */}

            {/* Title */}
            <Text fontSize="lg" flex="1" fontWeight="bold" textAlign="center">
              {headerNode!}
            </Text>

            {/* <Box /> */}
          </Flex>

          {/* Requred fields */}
          {displayRequiredFields && (
            <Text fontSize="xs" color="gray.500" textAlign="right" mx="4">
              * {msg("requiredFields")}
            </Text>
          )}

          {/* Restart Flow */}
          {kcContext.auth !== undefined &&
            kcContext.auth.showUsername &&
            !kcContext.auth.showResetCredentials && (
              <Box p="4">
                {showUsernameNode}
                <Box my="2" fontSize="sm">
                  <Text>{kcContext.auth?.attemptedUsername}</Text>
                  <Box textTransform="uppercase">
                    <Link
                      color="blue.500"
                      id="reset-login"
                      href={kcContext.url.loginRestartFlowUrl}
                    >
                      <Box as="span" mr="2">
                        <EceIcons name="arrowRight" boxSize="3" />
                      </Box>
                      {msg("restartLoginTooltip")}
                    </Link>
                  </Box>
                </Box>
              </Box>
            )}
        </Box>
      )
    })

    return { Head }
  })()

  const { Main } = (() => {
    type Props = {
      displayMessage?: boolean
      formNode: ReactNode
      showAnotherWayIfPresent?: boolean
      displayWide?: boolean
      displayInfo?: boolean
      infoNode?: ReactNode
    } & { kcContext: KcContext } & KcTemplateProps

    // const { useClassNames } = createUseClassNames()(() => ({
    //   alert: {
    //     alignItems: "center",
    //   },
    // }))

    const Main = memo((props: Props) => {
      const {
        displayMessage,
        showAnotherWayIfPresent,
        displayInfo,
        // displayWide,
        kcContext,
        formNode,
        infoNode,
        // ...kcProps
      } = props

      // const onTryAnotherWayClick = useConstCallback(() => {
      //   document.forms["kc-select-try-another-way-form" as never].submit()
      //   return false
      // })

      const { msg } = useKcMessage()

      // const { classNames } = useClassNames({})

      return (
        <Box px="4">
          {/* displayMessage */}
          {/* App-initiated actions should not see warning messages about the need to complete the action during login.*/}
          {displayMessage &&
            kcContext.message !== undefined &&
            (kcContext.message.type !== "warning" ||
              !kcContext.isAppInitiatedAction) && (
              <Alert my="4" status={getStatus(kcContext.message.type)}>
                {kcContext.message.summary}
              </Alert>
            )}

          {/* formNode */}
          {formNode}

          {/* try-another-way */}
          {kcContext.auth !== undefined &&
            kcContext.auth.showTryAnotherWayLink &&
            showAnotherWayIfPresent && (
              <Box my="4">
                <form
                  id="kc-select-try-another-way-form"
                  action={kcContext.url.loginAction}
                  method="post"
                >
                  <input type="hidden" name="tryAnotherWay" value="on" />
                  {/* onClick={onTryAnotherWayClick} */}
                  <Button type="submit" id="try-another-way" variant="outline">
                    {msg("doTryAnotherWay")}
                  </Button>
                </form>
              </Box>
            )}

          {/* infoNode */}
          {displayInfo && <>{ infoNode }</>}
        </Box>
      )
    })

    return { Main }
  })()

  return { Page }
})()

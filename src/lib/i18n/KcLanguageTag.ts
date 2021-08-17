import { objectKeys } from "tsafe/objectKeys"
import { kcMessages } from "keycloakify/lib/i18n/kcMessages/login"
import {
  KcLanguageTag as KcLanguageTagKeycloakify,
  LanguageLabel as LanguageLabelKeycloakify,
} from "keycloakify/lib/i18n/KcLanguageTag"

export type LanguageLabel =
  /* spell-checker: disable */
  LanguageLabelKeycloakify | "Slovenščina"
/* spell-checker: enable */

export type KcLanguageTag = KcLanguageTagKeycloakify | "sl"

const availableLanguages = objectKeys(kcMessages)

/**
 * WARN: Fork of the original function, with added "sl" locale.
 * Pass in "fr-FR" or "français" for example, it will return the AvailableLanguage
 * it corresponds to: "fr".
 * If there is no reasonable match it's guessed from navigator.language.
 * If still no matches "en" is returned.
 */
export function getBestMatchAmongKcLanguageTag(
  languageLike: string
): KcLanguageTag {
  const iso2LanguageLike = languageLike.split("-")[0].toLowerCase()

  const kcLanguageTag = availableLanguages.find(
    (language) =>
      language.toLowerCase().includes(iso2LanguageLike) ||
      getKcLanguageTagLabel(language).toLocaleLowerCase() ===
        languageLike.toLocaleLowerCase()
  )

  if (kcLanguageTag !== undefined) {
    return kcLanguageTag
  }

  if (languageLike !== navigator.language) {
    return getBestMatchAmongKcLanguageTag(navigator.language)
  }

  return "en"
}

export function getKcLanguageTagLabel(language: KcLanguageTag): LanguageLabel {
  switch (language) {
    /* spell-checker: disable */
    case "es":
      return "Español"
    case "it":
      return "Italiano"
    case "fr":
      return "Français"
    case "ca":
      return "Català"
    case "en":
      return "English"
    case "de":
      return "Deutsch"
    case "no":
      return "Norsk"
    case "pt-BR":
      return "Português (Brasil)"
    case "ru":
      return "Русский"
    case "sk":
      return "Slovenčina"
    case "ja":
      return "日本語"
    case "pl":
      return "Polski"
    case "zh-CN":
      return "中文简体"
    case "sv":
      return "Svenska"
    case "lt":
      return "Lietuvių"
    case "cs":
      return "Čeština"
    case "nl":
      return "Nederlands"
    case "tr":
      return "Türkçe"
    case "sl":
      return "Slovenščina"
    /* spell-checker: enable */
  }

  return language
}

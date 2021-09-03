export const messages = {
  sl: {
    Welcome: "Dobrodošli v spletni portal moj ECE",
  },
  en: {
    Welcome: "Dobrodošli v spletni portal moj ECE",
  },
}

type Lang = "sl" | "en"

type MsgKey = "Welcome"

export const getMessage = (lang: Lang, key: MsgKey) => {
  const msg = messages[lang] && messages[lang][key] ? messages[lang][key] : ""
  return msg
}

export const messages = {
  sl: {
    Welcome: "Dobrodošli na vpisni strani v aplikaciji Moj ECE in ECE shop",
  },
  en: {
    Welcome: "Dobrodošli na vpisni strani v aplikaciji Moj ECE in ECE shop",
  },
}

type Lang = "sl" | "en"

type MsgKey = "Welcome"

export const getMessage = (lang: Lang, key: MsgKey) => {
  const msg = messages[lang] && messages[lang][key] ? messages[lang][key] : ""
  return msg
}

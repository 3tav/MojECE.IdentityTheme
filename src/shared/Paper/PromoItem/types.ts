import { IconName } from "../../../theme/parts/Icons"

export type Promo = {
  icon: IconName
  title1: string
  title2: string
  body: string
}

export type PromoItemComponent = {
  promo: Promo
}

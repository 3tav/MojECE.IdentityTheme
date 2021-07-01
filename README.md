# Keycloak Theme

Narejeno po predlogi [keycloakify-demo-app](https://github.com/garronej/keycloakify-demo-app).
Uporablja [keycloakify](https://github.com/InseeFrLab/keycloakify).

## Inštalacija

1. Poženi `yarn`, da se inštalirajo moduli
2. [Poženi](https://github.com/InseeFrLab/keycloakify/issues/5#issuecomment-832296432) `yarn build`, da se inštalirajo statične vsebine
3. [Poženi](https://github.com/InseeFrLab/keycloakify#some-pages-still-have-the-default-theme-why) `yarn test`, da dobiš template fajle
4. Poženi `yarn start` in odpri [http://localhost:3000/](http://localhost:3000/)

## Dizajn teme

Keycloak temo je se naredi po opisu v navodilih za urejanje "template fajlov in CSS-ja".

Za navodila in koncept urejanja glej:

- [Advanced pages configuration](https://github.com/InseeFrLab/keycloakify#advanced-pages-configuration)
- poglavje [Keycloak theme only](https://github.com/garronej/keycloakify-demo-app#keycloak-theme-only)
- komentar [how it works](https://github.com/InseeFrLab/keycloakify/issues/5#issuecomment-832296432)

### Opombe za delo

**Fonti**: linkamo na externe resource

**Support for Terms and conditions**: [glej](https://github.com/InseeFrLab/keycloakify#support-for-terms-and-conditions)

**Preklaplanje templatov**: Pri dizajniranju nastaviš temp-context (to je fake vsebina določene Keycloak strani, ki jo dizajniraš) in potem urejaš template za ta kontext.

**Dark Mode**: You can implement your own mechanism to pass the states in the URL and restore it on the other side but we recommend using `powerhooks/useGlobalState` from the library [powerhooks](https://www.npmjs.com/package/powerhooks) that provide an elegant way to handle states such as `isDarkModeEnabled` or `selectedLanguage`.

## Build

Repozitorij vsebuje CI/CD GitHub Actions. Ob vsakem kommitu in spremembi verzije se izvede build in pod Release nastane `jar` datoteka teme, ki se jo naloži na Keycloak strežnik.

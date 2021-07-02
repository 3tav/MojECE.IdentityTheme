# Keycloak Theme

Custom theme for [Keycloak](https://www.keycloak.org/) Open Source Identity and Access Management.

- based on the CI/CD and Template [keycloakify-demo-app](https://github.com/garronej/keycloakify-demo-app).
- which uses [keycloakify](https://github.com/InseeFrLab/keycloakify)
- project setup inspiration [onyxia-web](https://github.com/InseeFrLab/onyxia-web)

## Instalation

Follow **keycloakify demo app** for detailed instructions.

In short:

1. Run `yarn` to install dependancies
2. [Run](https://github.com/InseeFrLab/keycloakify/issues/5#issuecomment-832296432) `yarn build` to create static files (required in local development)
3. [Run](https://github.com/InseeFrLab/keycloakify#some-pages-still-have-the-default-theme-why) `yarn test`
4. To start development, run `yarn start` and open [http://localhost:3000/](http://localhost:3000/)

## Major changes compared to the template app

- HTML/SCSS in templates is replaced with React design library [Chakra-UI](https://github.com/chakra-ui/chakra-ui)
- Removed keycloak default classes from HTML templates
- Most of the layout is different (e.g. we have two column design)

### Concept

**Fonts**: linked to external resources

**Support for Terms and conditions**: [included](https://github.com/InseeFrLab/keycloakify#support-for-terms-and-conditions)

**Moc-Context**: Development flow consists of setting up context-mock variable in the `App.tsx` file to whatever page you are currently working on.

```js
const kcContext = kcContextMocks.kcLoginContext
```

**Dark Mode**: You can implement your own mechanism to pass the states in the URL and restore it on the other side but we recommend using `powerhooks/useGlobalState` from the library [powerhooks](https://www.npmjs.com/package/powerhooks) that provide an elegant way to handle states such as `isDarkModeEnabled` or `selectedLanguage`.

## Build

Se details in the [Demo app](https://github.com/garronej/keycloakify-demo-app) instructions.

> To release don't create a tag manually, the CI do it for you. Just update the `package.json`'s version field and push.
> The `.jar` files that bundle the Keycloak theme will be attached as an asset with every GitHub release.

## More info

- [Advanced pages configuration](https://github.com/InseeFrLab/keycloakify#advanced-pages-configuration)
- [Customize Keycloak theme only](https://github.com/garronej/keycloakify-demo-app#keycloak-theme-only)
- [How it works](https://github.com/InseeFrLab/keycloakify/issues/5#issuecomment-832296432)

## License

MIT License, except for all non-keycloak media assets (image and icons) and artwork (logo).

Media Assets: All Rights Reserved. Copyright 3 Tav d.o.o.

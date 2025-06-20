# Codex UI Library

This project provides a React component library built with Vite and TypeScript.
It comes configured with **Tailwind CSS v4**, **Radix UI** primitives and
**Storybook** for local development and documentation. Components are built as a
library so they can be published to npm.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

## Building the library

```bash
npm run build
```

The compiled files will be emitted to the `dist` directory and can be
published to npm using `npm publish`.

## Theming

The library exposes a set of CSS variables defined in `src/index.css`. Each
theme provides values for these variables using the `@theme` directive. By
default the variables are defined on `:root`, but additional blocks such as
`.dark`, `.brand-a` and `.brand-b` override them.

To apply a theme, add the desired class to the root element of your
application:

```html
<body class="brand-a">
  <div id="root"></div>
</body>
```

Consumers can also extend the theme by providing their own class and setting the
variables they wish to override.

```css
.my-brand {
  --color-primary: #ff9900;
  --color-primary-hover: #cc7a00;
}
```

Import your custom CSS after the library styles to take precedence.

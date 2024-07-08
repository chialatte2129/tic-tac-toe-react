import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    settings: {
      react: {
        version: "detect"
      }
    }
  },
  { ignores: ["dist/**/*"] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReactConfig,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off"
    }
  }
];
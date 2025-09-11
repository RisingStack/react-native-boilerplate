// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");
const simpleImportSort = require("eslint-plugin-simple-import-sort");
const unusedImports = require("eslint-plugin-unused-imports");
const tailwindcss = require("eslint-plugin-tailwindcss");
const checkFile = require("eslint-plugin-check-file");

module.exports = defineConfig([
  expoConfig,
  ...tailwindcss.configs["flat/recommended"],
  {
    files: ["src/**/*.ts", "src/**/*.tsx", "src/**/*.js", "src/**/*.jsx"],
    plugins: {
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
      "check-file": checkFile,
    },
    rules: {
      "tailwindcss/no-custom-classname": "error",
      "tailwindcss/classnames-order": "off",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "check-file/filename-naming-convention": [
        "error",
        { "src/!(app)/**/*.{jsx,tsx,js,ts}": "KEBAB_CASE" },
        { ignoreMiddleExtensions: true },
      ],
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "tsconfig.json",
        },
      },
    },
  },
  {
    ignores: ["dist/*"],
  },
  eslintPluginPrettierRecommended,
]);

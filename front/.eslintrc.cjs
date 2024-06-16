/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:jsx-a11y/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "import", "jsx-a11y", "react", "react-hooks"],
  settings: {
    react: { version: "detect" },
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling"],
          "object",
          "type",
          "index",
        ],
        "newlines-between": "always",
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: { order: "asc", caseInsensitive: true },
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
      },
    ],
  },
};

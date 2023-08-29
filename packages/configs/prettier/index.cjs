module.exports = {
  bracketSpacing: true,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,
  importOrder: ["^[./]", "^@/(.*)$"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      options: {
        parser: "typescript",
        importOrderParserPlugins: ["typescript", "jsx"],
      },
    },
  ],
};

module.exports = {
  env: {
    node: true,
  },
  extends: ["auto"],
  root: true,
  rules: {
    "class-methods-use-this": "off",
    "eslint-comments/disable-enable-pair": "off",
    "eslint-comments/no-unused-disable": "error",
    "import/no-cycle": "off",
    "import/prefer-default-export": "off",
    "max-classes-per-file": "off",
    "no-param-reassign": "off",
    "no-secrets/no-secrets": "off",
    "sonarjs/prefer-immediate-return": "off",
    "unicorn/import-style": ["error", { styles: { path: { named: true } } }],
    "unicorn/no-static-only-class": "off",
    "unicorn/numeric-separators-style": [
      "error",
      { onlyIfContainsSeparator: true },
    ],
    "unicorn/prefer-module": "off",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      { accessibility: "no-public" },
    ],
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/member-ordering": [
      "error",
      {
        default: {
          memberTypes: [
            // Index signature
            "signature",

            // Fields
            "public-field",
            "protected-field",
            "private-field",

            "field",

            // Constructors
            "public-constructor",
            "protected-constructor",
            "private-constructor",

            "constructor",

            // Methods
            "public-method",
            "protected-method",
            "private-method",

            "method",
          ],
          order: "alphabetically",
        },
      },
    ],
  },
};

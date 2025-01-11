module.exports = {
  env: {
    browser: true, // Enable browser globals
    node: true, // Enable Node.js globals
    jest: true, // Enable Jest globals for testing
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended", // Use Prettier for formatting
  ],
  parser: "@typescript-eslint/parser", // Use the TypeScript parser
  parserOptions: {
    ecmaVersion: 2020, // Use ECMAScript 2020 features
    sourceType: "module", // Use ES modules
    ecmaFeatures: {
      jsx: true, // Enable JSX
    },
  },
  plugins: ["react", "@typescript-eslint", "prettier", "unused-imports",],
  rules: {
    "react/react-in-jsx-scope": "off", // Not needed with React 17+
    "prettier/prettier": "warn", // Show Prettier errors as ESLint warnings
    "@typescript-eslint/no-unused-vars": ["error"], // Warn on unused variables
    "@typescript-eslint/no-explicit-any": ["warn"],
    "@typescript-eslint/no-unused-vars": ["error"], // Warn on unused variables
        "unused-imports/no-unused-imports": "warn", // Warn on unused imports (requires eslint-plugin-unused-imports)
        "unused-imports/no-unused-vars": [
          "warn",
          {
            vars: "all",
            varsIgnorePattern: "^_",
            args: "after-used",
            argsIgnorePattern: "^_",
          },
        ],
    // Add any other rules you need
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the version of React
    },
  },
};

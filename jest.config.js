// module.expots = {
//   resolver: require.resolve(`jest-pnp-resolver`),
//   preset: "ts-jest"
//   // moduleFileExtensions: ["ts", "js"],
//   // transform: {
//   //   "^.+\\.ts$": "ts-jest"
//   // },
//   // globals: {
//   //   "ts-jest": {
//   //     tsConfig: "tsconfig.json"
//   //   }
//   // },
//   // testMatch: ["**/tests/**/*.test.ts"]

// };

module.exports = {
  resolver: require.resolve("jest-pnp-resolver"),
  // roots: ["<rootDir>"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*)\\.test\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node", "wasm"]
  // collectCoverageFrom: ["systems/tracker/packages/*/src/**/*.ts"]
};

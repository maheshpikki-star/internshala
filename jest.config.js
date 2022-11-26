/** @type {import('jest').Config} */
const config = {
  verbose: true,
  preset: "jest-puppeteer",
  testMatch: ["**/__tests__/*.test.js"],
};

module.exports = config;

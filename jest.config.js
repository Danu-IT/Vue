module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  "collectCoverageForm": [
    "*/**/**.{js,vue}",
    "!**/node_modules/**",
    "!coverage/**"
  ]
}

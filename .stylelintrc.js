module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-rational-order",
    "stylelint-config-prettier"
  ],
  plugins: [
    "stylelint-order",
    "stylelint-declaration-block-no-ignored-properties"
  ],
  rules: {
    "no-descending-specificity": null,
    //https://github.com/stylelint/stylelint/issues/4114
    "function-calc-no-invalid": null,
    "font-family-no-missing-generic-family-keyword": null, // iconfont
    "plugin/declaration-block-no-ignored-properties": true,
    "unit-no-unknown": [true, { ignoreUnits: ["rpx"] }]
  }
};

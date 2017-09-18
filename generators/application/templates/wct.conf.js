/*eslint-env node*/

module.exports = {
  verbose: true,
  sauce: false,
  suites: [
    'src/components/**/test/wct.html'
  ],
  plugins: {
    sauce: {
      disabled: true
    },
    local: {
      remote: false,
      browsers: [
        'chrome'
      ]
    }
  }
};
